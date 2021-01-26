import React, { useContext } from 'react'

import { formatBlockNum } from '../utils/utils'

import { ContentPanel } from './StyledComponents'

import { AppContext } from '../contexts/AppContext'

export const TitleAndStatsCard = () => {
    const { latestBlockNum } = useContext(AppContext)

    return (
        <ContentPanel>
            <div className='TitleAndStatsContainer'>
                <div className='TitleContainer'>
                    <h1 className='AppTitle'> FIBER </h1>
                </div>
                <div className='StatsContainer'>
                    <p>Connected: </p>
                    <p>Current block: <a href={"https://etherscan.io/block/" + latestBlockNum}>{formatBlockNum(latestBlockNum)}</a></p>
                </div>
            </div>
        </ContentPanel>
    )
}
