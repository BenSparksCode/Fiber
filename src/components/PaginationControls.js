import React from 'react'
import { Pagination } from 'antd'

import { PaginationPanel } from './StyledComponents'
import { AppContext } from '../contexts/AppContext'

export const PaginationControls = () => {



    return (
        <PaginationPanel>
            <div className='PaginationContainer'>
                <Pagination defaultCurrent={1} total={100} />
            </div>
        </PaginationPanel>
    )
}
