import React, { useContext, useEffect, useState } from 'react'

import { AppContext } from '../contexts/AppContext'

import { ContentPanel } from './StyledComponents'
import { FlashLoanListItem } from './FlashLoanListItem'


export const FlashLoanFeed = () => {
    const { FLs } = useContext(AppContext)
    const [FLFeedContainerHeight, setFLFeedContainerHeight] = useState(300)

    useEffect(() => {
        const height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight

        const OFFSET = 450

        console.log(height, height-OFFSET);

        setFLFeedContainerHeight(height-OFFSET)

    }, [])

    return (
        <ContentPanel className='FLFeedContainer'
            // style={{
            //     height: FLFeedContainerHeight,
            //     minHeight: FLFeedContainerHeight,
            //     maxHeight: FLFeedContainerHeight,
            // }}
        >

            {FLs.map(FL => <FlashLoanListItem data={FL} />)}

        </ContentPanel>
    )
}

