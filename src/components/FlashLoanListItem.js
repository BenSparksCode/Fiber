import React from 'react'
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { getCoinIconURL } from '../images/CoinIcons'
import { formatBlockNum, shortenHash, getCardDate, getCardTime, currencyFormat } from '../utils/utils'



export const FlashLoanListItem = (props) => {
    const { data } = props

    const getIconArray = (tokensData) => {
        const MAX_ICONS_SHOWN = 4

        const iconArray = tokensData

        if (!iconArray || iconArray.length == 0) return <img className="CoinIcon" src={getCoinIconURL("???")} />
        if (iconArray.length > MAX_ICONS_SHOWN) {

            let icons = iconArray.map(i =>
                <a href={"https://etherscan.io/address/" + i.asset}>
                    <img className="CoinIcon" src={getCoinIconURL(i.ticker)} />
                </a>)

            let circle = <div className='CoinIcon additionalInteractionsIcon'>
                <p className='CoinIconText'>{"+" + Math.min(iconArray.length - MAX_ICONS_SHOWN, 99)}</p>
            </div>

            return [...icons.slice(0, MAX_ICONS_SHOWN), circle]
        } else
            return iconArray?.map(i =>
                <a href={"https://etherscan.io/address/" + i.asset}>
                    <img className="CoinIcon" src={getCoinIconURL(i.ticker)} />
                </a>)
    }

    const calcTotalBorrowed = (borrowData) => {
        if (!borrowData || borrowData.length === 0) return 0
        let acc = 0
        for (let i = 0; i < borrowData.length; i++) {
            const token = borrowData[i];
            acc += token.valueBorrowed ? token.valueBorrowed : 0
        }
        return acc
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

            <div className='FLCardSubcontainer FLCardSubcontainer1' >
                <p className='FLCardTextLeft'>{getCardTime(data.date)}</p>
                <p className='FLCardTextLeft'>{getCardDate(data.date)}</p>
            </div>

            <div className='FLCardSubcontainer FLCardSubcontainer2'>
                <div className='FLLoanAmountContainer'>
                    <h2 className='FLDollarText FLCardTextLeft'>{currencyFormat(calcTotalBorrowed(data.borrowData), "USD")}</h2>
                </div>
                <div className='FLBorrowedTokensContainer'>
                    <p className='FLCardTextLeft'> in {getIconArray(data.borrowData)} </p>
                </div>
            </div>

            <div className='FLCardSubcontainer FLCardSubcontainer3'>
                <div className='FLTxContainer'>
                    <p className='FLCardTextLeft'>TX: <a href={"https://etherscan.io/tx/" + data.txHash}>{shortenHash(data.txHash)}</a></p>
                </div>
                <div className='FLBlockContainer' >
                    <p className='FLCardTextLeft'>Block: <a href={"https://etherscan.io/block/" + data.blockNum}>{formatBlockNum(data.block)}</a></p>
                </div>
            </div>

            <div className='FLCardSubcontainer FLCardSubcontainer4'>
                <div className='FLFromAddrContainer' >
                    <p className='FLCardTextLeft'>From:<a href={"https://etherscan.io/address/" + data.from}> {shortenHash(data.from)} </a></p>
                </div>
                <div className='InteractionsContainer'>
                    {getIconArray(data.interactions)}
                </div>
            </div>

            <div className='FlashLoanViewButton'>
                <Button type="primary" shape="circle"
                    onClick={() => {
                        window.open('https://etherscan.io/address/'
                            + ((data.version == 2)
                            ? "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9"
                            : "0x398eC7346DcD622eDc5ae82352F02bE94C62d119"),'_blank')
                    }}
                >
                    <p className='VersionTag'>V{data.version}</p>
                </Button>
            </div>

        </div>
    )
}
