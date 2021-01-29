// ALCHEMY VERSION
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { ethers } from 'ethers'

import DataConstants from './DataConstants.json'
import { getTokenData } from './TokenData'
import { LENDING_POOL_V1, LENDING_POOL_V2 } from './ABIs'


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

    convertFLToCardFormat = (data) => {
        return {
            tx: data.tx.hash,
            blockNum: data.block,
            date: new Date(),
            amountBorrowedUSD: this.getBorrowedValue(data),
            tokensBorrowed: this.getTokensBorrowedFromTx(data),
            from: data.tx.from,
            version: data.src.version,
            interactions: this.getInteractionsFromTx(data) //todo
        }
    }

    borrowData = {
        "0x000": {
            ticker: "ETH",
            borrowedUSD: 420,
        }
    }

    clearFLs = () => {
        this.flashLoans = []
    }

    getBorrowedValue = (data) => {
        if (!data?.decodedTX) return 0

        // delet ser
        if (data.tx.input.substring(0, 10) !== "0xab9c4b5d") return 1

        let borrowed = 0

        for(let i = 0; i < data.decodedTX.args.amounts; i++){
            const amount = data.decodedTX.args.amounts[i]
            const address = ethers.BigNumber.from(data.decodedTX.args.assets[i]).toHexString()
            const decimals = getTokenData(address).decimals
            const borrowedUSD = ethers.BigNumber.from(amount).div(Math.pow(10, decimals)).toNumber()

            console.log(amount, address, decimals, borrowedUSD);

            borrowed += borrowedUSD
        }

        return borrowed
    }

    getTokensBorrowedFromTx = (data) => {
        if (!data?.decodedTX) return []

        // delet ser
        if (data.tx.input.substring(0, 10) !== "0xab9c4b5d") return ["USDT"]

        return data.decodedTX.args.assets.map(
            asset => getTokenData(ethers.BigNumber.from(asset).toHexString()).ticker
        );
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