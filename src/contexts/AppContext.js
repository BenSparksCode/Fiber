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
        latestBlockNum: null,
        FLs: dummyTxs,
        selectedFL: null
    }

    componentDidMount(){
        console.log("Context mounted");
        // Set up newBlockListener
        const sub = web3.subscribeToNewBlocks({}, (err, res) => {
            console.log("From blocks callback", err, res);
            if(err) return
            this.setState({
                latestBlockNum: res.number
            })
        })
        this.setState({
            newBlocksSub: sub
        })
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