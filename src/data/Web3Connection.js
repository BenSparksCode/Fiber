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

        // TESTING RIG

        // const assets = [
        //     "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
        //     "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        //     "0x0000000000085d4780B73119b644AE5ecd22b376",
        //     "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        // ]

        // const amounts = [
        //     "0x768573e29f7ec98c1b00",
        //     "0x06a533478f296de16800",
        //     "0x043d766e646d644aab80",
        //     "0x4fc9727df8",
        // ]

        // const data = {
        //     decodedTX: {
        //         args: {
        //             amounts,
        //             assets
        //         }
        //     },   
        //     tx: {
        //         input: "0xab9c4b5d"
        //     }
        // }

        // console.log(this.getBorrowedValue(data));
        // console.log(this.getTokensBorrowedFromTx(data));
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

    convertFLToCardFormat = (data) => {
        return {
            txHash: data.tx.hash,
            blockNum: data.block,
            date: new Date(),
            amountBorrowedUSD: this.getBorrowedValue(data),
            tokensBorrowed: this.getTokensBorrowedFromTx(data),
            from: data.tx.from,
            version: data.src.version,
            interactions: this.getInteractionsFromTx(data) //todo
        }
    }

    convertFirebaseFLToCardFormat = (data) => {
        return {
            txHash: data.tx.hash,
            blockNum: data.block,
            date: data.dateCreated.toDate(),
            amountBorrowedUSD: this.getBorrowedValue(data),
            tokensBorrowed: this.getTokensBorrowedFromTx(data),
            from: data.tx.from,
            version: data.src.version,
            interactions: this.getInteractionsFromTx(data) //todo
        }
    }

    clearFLs = () => {
        this.flashLoans = []
    }

    getBorrowedValue = (data) => {
        if (!data?.decodedTX) return 0

        // TODO - add V1 FLs logic

        // delet ser
        if (data.tx.input.substring(0, 10) !== "0xab9c4b5d") return 1

        let borrowed = 0

        for (let i = 0; i < data.decodedTX.args[2].length; i++) {
            try{
                const amount = data.decodedTX.args[2][i]
                const address = ethers.BigNumber.from(data.decodedTX.args[1][i]).toHexString()
                const decimals = getTokenData(address).decimals
                const borrowedUSD = ethers.BigNumber.from(amount).div(ethers.BigNumber.from(10).pow(decimals)).toNumber()
    
                console.log("from getBorrowedValue:", amount, address, decimals, borrowedUSD);
    
                borrowed += borrowedUSD
            } catch(err) {
                console.log("getBorrowedValue Error at func input", i, err);
            }
        }
        return borrowed
    }

    getTokensBorrowedFromTx = (data) => {
        if (!data?.decodedTX) return []

        // TODO - add V1 FLs logic

        // delet ser
        if (data.tx.input.substring(0, 10) !== "0xab9c4b5d") return ["USDT"]

        return data.decodedTX.args[1].map(
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