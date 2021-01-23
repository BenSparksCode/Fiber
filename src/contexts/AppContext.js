import React, { Component, createContext } from 'react'

export const AppContext = createContext()

const dummyTxs = [
    {
        txID: "0x305a83574cb8e4c51acf6db9fd38ec39e6ef73ffe25cbf1845e8d8f68a5f1696",
        blockNum: 11711726,
        date: new Date(),
        amountUSD: 14258,
        tokenBorrowed: "WBTC",
        from: "0x87245c288fcC858BF7225Dc3Ab97D0aD94730757",
        providers: ["AAVE"],
        interactions: [
            {entity: "WBTC"},
            {entity: "UNISWAP"},
            {entity: "USDC"},
            {entity: "aWBTC"},
            {entity: "aUSDC"},
        ]
    },
    {
        txID: "0x305a83574cb8e4c51acf6db9fd38ec39e6ef73ffe25cbf1845e8d8f68a5f1696",
        blockNum: 11711726,
        date: new Date(),
        amountUSD: 9000000,
        tokenBorrowed: "ETH",
        from: "0x87245c288fcC858BF7225Dc3Ab97D0aD94730757",
        providers: ["AAVE"],
        interactions: [
            {entity: "ETH"},
            {entity: "UNISWAP"},
            {entity: "USDC"},
            {entity: "aETH"},
            {entity: "aUSDC"},
        ]
    }
]

class AppContextProvider extends Component {
    state = {
        FLs: [],
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