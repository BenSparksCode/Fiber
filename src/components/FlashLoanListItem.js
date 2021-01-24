import React from 'react'

export const FlashLoanListItem = (props) => {
    console.log(props)
    return (
        

        <div className='FlashLoanListItem'>
            <div className='Third Third1'>
                
                <div className= 'one date' >Date: new Date()  </div>
                <div className= 'one Providers'>Providers: AAVE <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png" height="32" width="32" alt="AAVE"></img> </div>
                <div className= 'one TxSize'>Transaction Size $: 14258 </div>
                <div className= 'one BlockNum' >Block Number: {props.blockNumber} </div>

               
            </div>

            <div className='Third Third2'>
                
                <div className = 'two Interactions'>Interactions: [WBTC,UNISWAP USDC aWBTC aUSDC  </div>
                {/* <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" height="32" width="32" alt="ETH"></img>
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"></img> */}
                <div className = 'three LOGOS1'> <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png" height="32" width="32" alt="WBTC"></img> </div> 
                <div className = 'three LOGOS2'> <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png" height="32" width="32" alt="UNI"></img> </div> 
                <div className = 'three LOGOS3'> <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png" height="32" width="32" alt="USDC"></img> </div> 
                <div className = 'three LOGOS4'> <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/6038.png" height="32" width="32" alt="AWBTC"></img> </div> 
                <div className = 'three LOGOS5'> <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/5760.png" height="32" width="32" alt="AUSDC"></img></div> 
                                    
                              
            </div>

                <div className='Third Third3'>
                <div className = 'four TxHash'>Tx Hash Link: "0x305a83574cb8e4c51acf6db9fd38ec39e6ef73ffe25cbf1845e8d8f68a5f1696"</div>
                <div className = 'four Address'>FROM Address: "0x87245c288fcC858BF7225Dc3Ab97D0aD94730757" </div>

            </div>

        </div>
    )
}
