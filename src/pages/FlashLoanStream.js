import React, { useState, useEffect, useRef } from 'react'
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

// const Web3 = require('web3')
// console.log(Web3.utils.soliditySha3("flashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)"));

const API_KEY = process.env.REACT_APP_ALCHEMY_API

export const FlashLoanStream = () => {

    const web3 = useRef(null)
    const subscription = useRef(null)

    const [blockNum, setBlockNum] = useState(-1)
    const [eventData, setEventData] = useState("Nothing yet...")

    useEffect(() => {

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
