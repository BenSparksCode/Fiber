import React, { useContext } from 'react'
import { Spin } from 'antd';
import { LoadingOutlined, CheckCircleTwoTone } from '@ant-design/icons';

import { formatBlockNum } from '../utils/utils'
import { ContentPanel } from './StyledComponents'
import { AppContext } from '../contexts/AppContext'

export const TitleAndStatsCard = () => {
    const { latestBlockNum, connectedToMainnet } = useContext(AppContext)

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    return (
        <ContentPanel>
            <div className='TitleAndStatsContainer'>
                <div className='TitleContainer'>
                    <h1 className='AppTitle'> FIBER </h1>
                </div>
                <div className='StatsContainer'>
                    <div className='StatsLineContainer'>
                        <p className='StatsText'>Connected to Mainnet: </p>
                        {
                            connectedToMainnet ?
                                <CheckCircleTwoTone style={{ fontSize: '24px', margin: "0px", padding: "0px", alignSelf: "center" }} className='StatsIndicator' twoToneColor="#1890ff" /> :
                                <Spin className='StatsIndicator' indicator={antIcon} />
                        }
                    </div>
                    <div style={{ clear: "both" }}></div>
                    <div className='StatsLineContainer'>
                        <p className='StatsText'>Current block:</p>
                        {
                            latestBlockNum ?
                                <a className='StatsIndicator' href={"https://etherscan.io/block/" + latestBlockNum}>
                                    {formatBlockNum(latestBlockNum)}
                                </a> :
                                <Spin className='StatsIndicator' indicator={antIcon} />
                        }
                    </div>
                    <div style={{ clear: "both" }}></div>
                </div>
            </div>
        </ContentPanel>
    )
}
