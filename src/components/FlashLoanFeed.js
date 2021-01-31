import React, { useContext, useEffect, useState } from 'react'

import { AppContext } from '../contexts/AppContext'

import { ContentPanel } from './StyledComponents'
import { FlashLoanListItem } from './FlashLoanListItem'

export const FlashLoanFeed = () => {
    const { FLs } = useContext(AppContext)

    return (
        <ContentPanel className='FLFeedContainer'>

            {FLs.map(FL => <FlashLoanListItem data={FL} />)}

        </ContentPanel>
    )
}

