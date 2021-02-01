import React from 'react'
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { getCoinIconURL } from '../images/CoinIcons'
import { formatBlockNum, shortenHash, getCardDate, getCardTime, currencyFormat } from '../utils/utils'



export const FlashLoanListItem = (props) => {
    const { data } = props

    const getIconArray = (iconArray) => {
        const MAX_ICONS_SHOWN = 4

        if (iconArray.length > MAX_ICONS_SHOWN) {
            let icons = iconArray.map(icon => <img className="CoinIcon" src={getCoinIconURL(icon)} />)
            let circle = <div className='CoinIcon additionalInteractionsIcon'>
                <p className='CoinIconText'>{"+" + Math.min(iconArray.length - MAX_ICONS_SHOWN, 99)}</p>
            </div>

            return [...icons.slice(0, MAX_ICONS_SHOWN), circle]
        } else
            return iconArray.map(icon => <img className="CoinIcon" src={getCoinIconURL(icon)} />)
    }

    const openFlashLoanView = () => {
        console.log("Opening FL:", data.tx);
    }

    const AaveVersion = (version) => {
        return "V" + version
    }


    return (
        <div className='FlashLoanListItem'
            id={data.txHash}>

            {/* <div className='FlashLoanVersionTag'>
                <Button shape="circle" type="secondary">
                    {AaveVersion(data.version)}
                </Button>
            </div> */}

            <div className='FLCardSubcontainer FLCardSubcontainer1' >
                <p className='FLCardTextLeft'>{getCardTime(data.date)}</p>
                <p className='FLCardTextLeft'>{getCardDate(data.date)}</p>
            </div>

            <div className='FLCardSubcontainer FLCardSubcontainer2'>
                <div className='FLLoanAmountContainer'>
                    <h2 className='FLDollarText FLCardTextLeft'>{currencyFormat(data.amountBorrowedUSD, "USD")}</h2>
                </div>
                <div className='FLBorrowedTokensContainer'>
                    <p className='FLCardTextLeft'> in {getIconArray(data.tokensBorrowed)} </p>
                </div>
            </div>

            <div className='FLCardSubcontainer FLCardSubcontainer3'>
                <div className='FLTxContainer'>
                    <p className='FLCardTextLeft'>TX: <a href={"https://etherscan.io/tx/" + data.txHash}>{shortenHash(data.txHash)}</a></p>
                </div>
                <div className='FLBlockContainer' >
                    <p className='FLCardTextLeft'>Block: <a href={"https://etherscan.io/block/" + data.blockNum}>{formatBlockNum(data.blockNum)}</a></p>
                </div>
            </div>

            <div className='FLCardSubcontainer FLCardSubcontainer4'>
                <div className='FLFromAddrContainer' >
                    <p className='FLCardTextLeft'>From:<a href={"https://etherscan.io/address/" + data.from}> {shortenHash(data.from)} </a></p>
                </div>
                <div className='InteractionsContainer'>
                    {getIconArray(data.interactions.map(i => i.entity))}
                </div>
            </div>

            <div className='FlashLoanViewButton'>
                <Button onClick={() => openFlashLoanView()} type="primary" shape="circle">
                    <PlusOutlined />
                </Button>
            </div>

        </div>
    )
}
