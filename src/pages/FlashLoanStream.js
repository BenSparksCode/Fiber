import React, { useState, useContext, useEffect, useRef } from 'react'
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

import { AppContext } from '../contexts/AppContext'

import web3 from '../data/Web3Connection'

const Web3 = require('web3')
// console.log(Web3.utils.soliditySha3("flashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)"));

const API_KEY = process.env.REACT_APP_ALCHEMY_API

export const FlashLoanStream = () => {

    const { killNewBlocksSub } = useContext(AppContext)

    // const web3 = useRef(null)
    const subscription = useRef(null)

    const [blockNum, setBlockNum] = useState(-1)
    const [eventData, setEventData] = useState("Nothing yet...")

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

        console.log("V2 flashLoan():", Web3.utils.soliditySha3("flashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)"));
        console.log("V2 FlashLoan Event:", Web3.utils.soliditySha3("FlashLoan(address,address,address,uint256,uint256,uint16)"));
        // flashLoan(address _receiver, address _reserve, uint256 _amount, bytes memory _params)
        console.log("V1 flashLoan():", Web3.utils.soliditySha3("flashLoan(address,address,uint256,bytes)"));
        console.log("V1 FlashLoan Event:", Web3.utils.soliditySha3("FlashLoan(address,address,uint256,uint256,uint256,uint256)"));
        console.log("V1 Repay Event:", Web3.utils.soliditySha3("Repay(address,address,address,uint256,uint256,uint256,uint256)"));
        // Repay(address indexed _reserve,address indexed _user,address indexed _repayer,uint256 _amountMinusFees,uint256 _fees,uint256 _borrowBalanceIncrease,uint256 _timestamp)

        // subscription.current = web3.subscribeToLogs({address: '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9'}, ()=>{})
    }

    const handleUnsubscribe = () => {
        web3.unsubscribeFromSub(subscription.current)
    }

    return (
        <div>
            <button onClick={handleSubscribe}>Subscribe to Events</button>
            <button onClick={handleUnsubscribe}>Unsubscribe to Events</button>
            <button onClick={killNewBlocksSub}>Unsub from New Blocks</button>
            <h2>Data from block: {blockNum}</h2>
            <p>{eventData}</p>
        </div>
    )
}
