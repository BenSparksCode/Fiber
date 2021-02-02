import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { ethers } from 'ethers'

import DataConstants from './DataConstants.json'
import { getTokenData } from './TokenData'
import { LENDING_POOL_V1, LENDING_POOL_V2 } from './ABIs'

const axios = require('axios');

const API_KEY = process.env.REACT_APP_ALCHEMY_API

let FL_SIGS = []

DataConstants.FLSources.forEach(src => {
    FL_SIGS = [...FL_SIGS, ...src.FLSigs]
});

class Web3Connection {
    constructor() {
        this.latestBlock = null
        this.flashLoans = []
        this.txEvents = {}
        this.websocket = createAlchemyWeb3(
            "wss://eth-mainnet.ws.alchemyapi.io/ws/" + API_KEY,
        );
        this.LP1Interface = new ethers.utils.Interface(LENDING_POOL_V1)
        this.LP2Interface = new ethers.utils.Interface(LENDING_POOL_V2)
    }

    subscribeToNewBlocks = (callback) => {
        console.log("Subscribing to new blocks...")

        return this.websocket.eth.subscribe(
            'newBlockHeaders', {},
            (err, res) => {
                if (!err) {

                    this.handleNewBlock(res.number)
                    return callback(err, res)
                }
            })
    }

    subscribeToFLLogs = () => {
        console.log("Subscribing to FL logs...");

        const FLSources = DataConstants.FLSources

        return FLSources.map(src => {
            this.websocket.eth.subscribe(
                'logs',
                {
                    address: src.contract,
                    //  fromBlock: 11746847
                },
                (err, eventRes) => {
                    if (!err) {
                        console.log("Event from", src.provider + " " + src.version);
                        console.log(eventRes);
                        this.groupEventsToTx(eventRes, src)
                        // return callback(err, eventRes, src)
                    }
                })
        })
    }

    unsubscribeFromSub = (sub) => {
        sub.unsubscribe(function (err, success) {
            if (success)
                console.log('Unsubscribed successfully.');
        })
    }

    handleNewBlock = (blockNum) => {
        // update block num
        this.latestBlock = blockNum
        // add compiled FL objects from last block to flashLoans
        console.log("INSPECT", this.txEvents, Object.values(this.txEvents).filter(
            i => i.isFL && i.block < this.latestBlock && Object.values(i).length > 0
        ));
        this.flashLoans = [
            ...this.flashLoans,
            ...Object.values(this.txEvents).filter(
                i => i.isFL && i.block < this.latestBlock
            )]

        // remove all events from previous blocks
        for (const key in this.txEvents) {
            if (this.txEvents.hasOwnProperty(key) && this.txEvents[key].block < this.latestBlock) {
                delete this.txEvents[key]
            }
        }

        console.log(blockNum, this.flashLoans, this.txEvents);
        if (this.flashLoans.length > 0) {
            console.log("FOUND A FLASH LOAN IN THE WILD!!!!\n")
            console.log(this.flashLoans);
            console.log("\n--------------------------------------");
        }
    }

    groupEventsToTx = (eventData, src) => {
        if (!eventData) return

        if (!this.txEvents.hasOwnProperty(eventData.transactionHash)) {
            this.txEvents[eventData.transactionHash] = { src, tx: null, isFL: false, block: null, queried: false, events: [] }
        }
        this.txEvents[eventData.transactionHash].events.push(eventData)

        if (!this.txEvents[eventData.transactionHash].queried) {
            // run extra Web3 call to get full TX data
            this.websocket.eth.getTransaction(eventData.transactionHash, (err, res) => {
                if (!err) {
                    this.txEvents[eventData.transactionHash].queried = true

                    console.log("SIG:", res?.input.substring(0, 10), res, FL_SIGS);
                    if (FL_SIGS.includes(res?.input.substring(0, 10))) {
                        this.txEvents[eventData.transactionHash].tx = res
                        this.txEvents[eventData.transactionHash].version = 2
                        this.txEvents[eventData.transactionHash].decodedTX = this.decodeTx(res, src)
                        this.txEvents[eventData.transactionHash].isFL = true
                        this.txEvents[eventData.transactionHash].block = res.blockNumber
                    }
                }
            })
        }
    }

    decodeTx = (tx, src) => {
        console.log("Decoding with V", src.version, " ABI...");

        if (src.version === 2) {
            return this.LP2Interface.parseTransaction({
                data: tx.input
            })
        } else {
            return this.LP1Interface.parseTransaction({
                data: tx.input
            })
        }
    }

    formatFLData = async (data) => {
        let tempBorrowData = null
        if(!data.hasOwnProperty("borrowData")){
            console.log("Looking up borrow data...");
            tempBorrowData = await this.getBorrowData(data)
        } 
        return {
            // dateCreated - added on server
            date: data.dateCreated ? data.dateCreated.toDate() : new Date(),
            txHash: data.tx.hash,
            from: data.tx.from,
            block: data.block,
            version: data.src ? data.src.version : data.version,
            tx: data.tx,
            decodedTX: data.decodedTX,
            events: data.events,
            borrowData: tempBorrowData ? tempBorrowData : data.borrowData,
            interactions: this.getInteractionsFromTx(data) //todo - add back for SERVER
        }
    }

    clearFLs = () => {
        this.flashLoans = []
    }

    getBorrowData = async (data) => {
        if (!data?.decodedTX) return 0

        // DELEET SOON SER PLZ
        if (!["0x5cffe9de", "0xab9c4b5d"].includes(data.tx.input.substring(0, 10))) return [{
            "asset": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
            "ticker": "LINK",
            "tokensBorrowed": 50,
            "tokenValue": 22.39,
            "valueBorrowed": 1119.5
        }]

        let borrowData = []

        // args[1] = assets, args[2] = amounts
        for (let i = 0; i < data.decodedTX.args[2].length; i++) {
            try {
                const amountBN = data.decodedTX.args[2][i]
                const address = ethers.BigNumber.from(data.decodedTX.args[1][i]).toHexString()
                const decimals = getTokenData(address).decimals
                const tokensBorrowed = ethers.BigNumber.from(amountBN).div(ethers.BigNumber.from(10).pow(decimals)).toNumber()
                const tokenValue = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids='
                    + getTokenData(address).coinGeckoID
                    + '&vs_currencies=usd').then(res => {
                        return res.data[getTokenData(address).coinGeckoID].usd
                    });

                console.log(getTokenData(address).ticker, tokensBorrowed, tokenValue);

                borrowData.push({
                    asset: address,
                    ticker: getTokenData(address).ticker,
                    tokensBorrowed,
                    tokenValue,
                    valueBorrowed: tokenValue * tokensBorrowed
                })
            } catch (err) {
                console.log("getBorrowData Error at func input", i, err);
            }
        }
        console.log("Borrow Data:", borrowData);
        return borrowData
    }

    getInteractionsFromTx = (data) => {
        // TODO
        return [
            { entity: "ETH" },
            { entity: "UNI" },
            { entity: "USDC" },
            { entity: "CRV" }
        ]
    }
}

export default new Web3Connection()