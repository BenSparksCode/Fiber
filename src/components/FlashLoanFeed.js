import React from 'react'
import { Table } from 'antd';

import { ContentPanel } from './StyledComponents'
import { FlashLoanListItem } from './FlashLoanListItem'


export const FlashLoanFeed = () => {

    return (
        <div >
            <ContentPanel>
                
                <h1 className = 'FL'>Flash Loans</h1>
                <FlashLoanListItem name = '24 Jan 2021' blockNumber = '123456789'/>
                <FlashLoanListItem/>
            
              
            </ContentPanel>
        </div>
    )
}
