import React from 'react'
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { getCoinIconURL } from '../images/CoinIcons'
import { formatBlockNum, shortenHash, shortenDate, currencyFormat } from '../utils/utils'

export const FlashLoanListItem = (props) => {
    const { data } = props

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

    const openFlashLoanView = () => {
        console.log("Opening FL:", data.tx);
    }

    return (

        <div className='FlashLoanListItem'>

            <div className='Third Third0'>
                <div className='FLDateContainer' >
                    <p>{shortenDate(data.date)}</p>
                </div>
            </div>

            <div className='Third Third1'>

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
                    <p>borrowed in: </p>
                </div>
            </div>


            <div>

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
                <div className='InteractionsContainer'>
                    {getIconArray(data.interactions.map(i => i.entity))}
                </div>
            </div>

            <div className='FlashLoanViewButton'>
                <Button onClick={()=>openFlashLoanView()} type="primary" shape="circle">
                    <PlusOutlined />
                </Button>
            </div>
        </div>
    )
}
