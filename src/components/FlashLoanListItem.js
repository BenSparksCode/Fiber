import React from 'react'
import { getCoinIconURL } from '../images/CoinIcons'


const currency = require('currency.js')


export const FlashLoanListItem = (props) => {
    const { data } = props

    const shortenDate = (date) => {
        if (!date) return "DATE NOT FOUND"
        // TODO
        const options = {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric',
            hour12: false,
        }
        return Intl.DateTimeFormat(navigator?.languages[0] ?? 'en-US', options).format(date)
    }

    const shortenHash = (hash) => {
        if (!hash) return "HASH NOT FOUND"
        return hash.substring(0, 6) + " . . . " + hash.substring(hash.length - 6)
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
        if (iconArray.length > 5) {
            let icons = iconArray.map(icon => <img className="CoinIcon" src={getCoinIconURL(icon)} />)
            let circle = <div className='CoinIcon additionalInteractionsIcon'>
                <p className='CoinIconText'>{"+" + Math.min(iconArray.length - 5, 999)}</p>
            </div>

            return [...icons.slice(0, 5), circle]
        } else
            return iconArray.map(icon => <img className="CoinIcon" src={getCoinIconURL(icon)} />)
    }

    return (

        <div className='FlashLoanListItem'>
            <div className='Third Third1'>
                <div className='FLDateContainer' >
                    <p>{shortenDate(data.date)}</p>
                </div>
                <div className='FLTxContainer'>
                    <p>TX: <a href={"https://etherscan.io/tx/" + data.tx}>{shortenHash(data.tx)}</a></p>
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
                    <p>From: <a href={"https://etherscan.io/address/" + data.from}>{shortenHash(data.from)}</a></p>
                </div>
                <div className='FLTextContainer'>
                    <p>Interactions:</p>
                </div>
                <div className='FLBorrowedTokensContainer'>
                    {getIconArray(data.interactions.map(i => i.entity))}
                </div>
            </div>

        </div>
    )
}
