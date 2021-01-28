import React, { useState, useContext, useRef } from 'react'
import { AppContext } from '../contexts/AppContext'

import web3 from '../data/Web3Connection'

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
