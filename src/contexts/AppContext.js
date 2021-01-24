import React, { Component, createContext } from 'react'

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
        ]
    }
]

class AppContextProvider extends Component {
    state = {
        FLs: dummyTxs,
        selectedFL: null
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
            }}>
                { this.props.children}
            </AppContext.Provider >
        )
    }
}

export default AppContextProvider