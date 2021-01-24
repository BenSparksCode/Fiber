import React from 'react'
import { Table } from 'antd';

import { ContentPanel } from './StyledComponents'
import { FlashLoanListItem } from './FlashLoanListItem'


export const FlashLoanFeed = () => {

    return (
        <div>
            <ContentPanel>
                <h1>Flash Loans</h1>
                <FlashLoanListItem />
            </ContentPanel>
        </div>
    )
}
