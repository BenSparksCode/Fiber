import React, { useState, useEffect, useRef } from 'react'
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

const Web3 = require('web3')

// import { ethers } from 'ethers'

const API_KEY = process.env.REACT_APP_ALCHEMY_API

// flashLoan(address, address[], uint256[], uint256[], address, bytes, uint16)
// a9211949fd2308838f1ccb7302610549a55a8d65696f91a6bd7e3513e4620ed3
// FlashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)
// 59d096263b64c6802ec4bb4b97e113d8d866b19f68bf80bd2d6a6b98179efbad

// FlashLoan(address,address,uint256[],uint256[],bytes,uint16)
// 0x9ba3329ab34c01d59f4cec1094a242209d2aae4cbea5126b45516efccfcfc5cc

export const FlashLoanStream = () => {

    const web3 = useRef(null)
    const subscription = useRef(null)

    const [blockNum, setBlockNum] = useState(-1)
    const [eventData, setEventData] = useState("Nothing yet...")

    useEffect(() => {
        console.log(Web3.utils.soliditySha3("flashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)"));

        web3.current = createAlchemyWeb3(
            "wss://eth-mainnet.ws.alchemyapi.io/ws/" + API_KEY,
        );
    }, [])

    const getTxData = (txHash) => {
        web3.current.eth.getTransaction(txHash, (err, res) => {
            if (!err) {
                console.log("TX DATA");
                console.log(res);
                console.log(res.input.substring(0,10));
            }
        })
    }


    const handleSubscribe = () => {
        console.log("Subscribing...");

        subscription.current = web3.current.eth.subscribe('logs', {
            address: '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9',
            fromBlock: 11713028,
            toBlock: 11713030,
            topics: []

        }, function (error, result) {
            if (!error) {
                console.log(result);

                setBlockNum(result.blockNumber)

                getTxData(result.transactionHash)

                setEventData(JSON.stringify(result, null, 2))
            }

        })
            .on("data", function (data) {
                console.log("NEW DATA:", data);
            })
            .on("changed", function (log) {
                console.log("Subscription changed...");
            })
            .on("connected", function (log) {
                console.log("CONNECTED!!!");
            })

    }

    const handleUnsubscribe = () => {
        subscription.current.unsubscribe(function (error, success) {
            if (success)
                console.log('Successfully UN-subscribed!');
        })
    }



    return (
        <div>
            <button onClick={handleSubscribe}>Subscribe to Events</button>
            <button onClick={handleUnsubscribe}>Unsubscribe to Events</button>
            <h2>Data from block: {blockNum}</h2>
            <p>{eventData}</p>
        </div>
    )
}
