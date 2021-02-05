import React, { useContext, useEffect, useState } from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { AppContext } from '../contexts/AppContext'

import { ContentPanel } from './StyledComponents'
import { FlashLoanListItem } from './FlashLoanListItem'

export const FlashLoanFeed = () => {
    const { FLs, filteredFLs } = useContext(AppContext)

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    return (
        <ContentPanel className='FLFeedContainer'>
            {
                (filteredFLs?.length > 0) ?
                    (
                        filteredFLs.map(FL => <FlashLoanListItem data={FL} key={FL.txHash} />)
                    ) : (
                        (FLs?.length > 0) ?
                            (
                                FLs.map(FL => <FlashLoanListItem
                                    data={FL}
                                    key={FL.txHash}
                                />)
                            ) : (
                                <div className='FLFeedLoadingContainer'>
                                    <p>Listening for flash loans...</p>
                                    <Spin className='StatsIndicator' indicator={antIcon} />
                                </div>
                            )
                    )
            }
        </ContentPanel>
    )
}

