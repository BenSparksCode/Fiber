import React, { Component, createContext } from 'react'

import web3 from '../data/Web3Connection'

export const AppContext = createContext()

const dummyTxs = [
    {
        tx: "0x305a83574cb8e4c51acf6db9fd38ec39e6ef73ffe25cbf1845e8d8f68a5f1696",
        networkFee: 0.066619, //in ETH
        blockNum: 11711726,
        date: new Date(),
        amountBorrowedUSD: 69420,
        tokensBorrowed: ["WBTC"],
        from: "0x87245c288fcC858BF7225Dc3Ab97D0aD94730757",
        providers: ["AAVE"],
        version: 1,
        interactions: [
            {entity: "WBTC"},
            {entity: "UNI"},
            {entity: "USDC"},
            {entity: "aWBTC"},
            {entity: "aUSDC"},
            {entity: "TUSD"},
            {entity: "CRV"},
            {entity: "SUSHI"},
        ]
    },
    {
        tx: "0x305a83574cb8e4c51acf6db9fd38ec39e6ef73ffe25cbf1845e8d8f68a5f1696",
        networkFee: 0.066619, //in ETH
        blockNum: 11711726,
        date: new Date(),
        amountBorrowedUSD: 9000000,
        tokensBorrowed: ["ETH", "AAVE"],
        from: "0x87245c288fcC858BF7225Dc3Ab97D0aD94730757",
        providers: ["AAVE"],
        version: 2,
        interactions: [
            {entity: "ETH"},
            {entity: "UNI"},
            {entity: "USDC"},
            {entity: "aETH"},
            {entity: "aUSDC"},
            {entity: "CRV"},
        ]
    }
]

class AppContextProvider extends Component {
    state = {
        newBlocksSub: null,
        FLEventSubs: null,
        latestBlockNum: null,
        connectedToMainnet: false,
        FLs: dummyTxs,
        selectedFL: null
    }

    // componentDidMount(){
    //     console.log("Context mounted");
    //     // Set up newBlockListener
    //     const sub = web3.subscribeToNewBlocks({}, (err, res) => {
    //         if(err) return
    //         this.setState({
    //             connectedToMainnet: true,
    //             latestBlockNum: res.number
    //         })
    //     })
    //     // Set up FL event listeners
    //     const eventSubs = web3.subscribeToFLLogs()
    //     // Save subs to state for unsubbing later
    //     this.setState({
    //         newBlocksSub: sub,
    //         FLEventSubs: eventSubs
    //     })
    // }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.latestBlockNum != this.state.latestBlockNum){
            if(web3.flashLoans.length === 0) return

            const newFLs = web3.flashLoans.map(fl => web3.convertFLToCardFormat(fl))
            web3.clearFLs()

            this.setState({
                FLs: [...newFLs, ...this.state.FLs]
            })
        }
    }

    killNewBlocksSub = () => {
        console.log("Unsubscribing from new blocks...");
        web3.unsubscribeFromSub(this.state.newBlocksSub)
        this.setState({
            newBlocksSub: null
        })
    }

    setSelectedFL = (FL) => {
        this.setState({
            selectedFL: FL
        })
    }

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                setSelectedFL: this.setSelectedFL,
                killNewBlocksSub: this.killNewBlocksSub,
            }}>
                { this.props.children}
            </AppContext.Provider >
        )
    }
}

export default AppContextProvider