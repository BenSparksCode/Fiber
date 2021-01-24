import React from 'react'

import { getCoinIconURL } from '../images/CoinIcons'

const currency = require('currency.js')


export const FlashLoanListItem = (props) => {
    const { data } = props

    const shortenDate = (date) => {
        if (!date) return "DATE NOT FOUND"
        // TODO
        return date.toString()
    }

    const shortenTX = (TX) => {
        if (!TX) return "TX NOT FOUND"
        return TX.substring(0, 6) + " . . . " + TX.substring(60)
    }

    const formatBlockNum = (blockNum) => {
        if (!blockNum) return "BLOCK NUM NOT FOUND"
        return currency(blockNum, { symbol: "", separator: " ", precision: 0 }).format()
    }

    const currencyFormat = (amount) => {
        if (!amount) return "$------"
        return currency(amount, { symbol: "$", separator: " ", precision: 0 }).format()
    }

    const getIconArray = (iconArray) => {
        // iconArray => e.g. ["ETH", "AAVE", "SUSHI", "YFI"]
        return iconArray.map(icon => <img className="CoinIcon" src={getCoinIconURL(icon)} />)
    }

    return (

        <div className='FlashLoanListItem'>
            <div className='Third Third1'>
                <div className='FLDateContainer' >
                    <p>{shortenDate(data.date)}</p>
                </div>
                <div className='FLTxContainer'>
                    <p>TX: <a href={"https://etherscan.io/tx/" + data.tx}>{shortenTX(data.tx)}</a></p>
                </div>
                <div className='FLBlockContainer' >
                    <p>Block: <a href={"https://etherscan.io/block/" + data.blockNum}>{formatBlockNum(data.blockNum)}</a></p>
                </div>
            </div>

            <div className='Third Third2'>
                <div className='FLLoanAmountContainer'>
                    <h2>{currencyFormat(data.amountBorrowedUSD, "USD")}</h2>
                </div>
                <div className='FLTextContainer'>
                    <p>borrowed in</p>
                </div>
                <div className='FLBorrowedTokensContainer'>
                    {getIconArray(data.tokensBorrowed)}
                </div>
            </div>

            <div className='Third Third3'>
                <div className='FLFromAddrContainer' >
                    <p>Block: <a href={"https://etherscan.io/block/" + data.blockNum}>{data.blockNum}</a></p>
                </div>

                <div className='FLBlockContainer' >
                    <p>Block: <a href={"https://etherscan.io/block/" + data.blockNum}>{data.blockNum}</a></p>
                </div>
            </div>

        </div>
    )
}
