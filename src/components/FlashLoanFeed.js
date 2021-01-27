import React, { useContext } from 'react'
import { Table } from 'antd';

import { AppContext } from '../contexts/AppContext'

import { ContentPanel } from './StyledComponents'
import { FlashLoanListItem } from './FlashLoanListItem'


export const FlashLoanFeed = () => {

    const { FLs } = useContext(AppContext)

    return (
            <ContentPanel>

                {FLs.map(FL => <FlashLoanListItem data={FL}/>)}

            </ContentPanel>
    )
}

