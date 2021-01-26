import React from 'react'
import { ContentPanel } from './StyledComponents'

export const TitleAndStatsCard = () => {
    return (
        <ContentPanel>
            <div className='TitleAndStatsContainer'>
                <div className='TitleContainer'>
                    <h1 className='AppTitle'> FIBER </h1>
                </div>
                <div className='StatsContainer'>
                    <p>Current block: { }</p>
                </div>
            </div>
        </ContentPanel>
    )
}
