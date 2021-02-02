import React, { Component, createContext } from 'react'

import web3 from '../data/Web3Connection'
import firebaseAuth from '../firebase/FirebaseAuth'
import firebaseDB from '../firebase/FirebaseDB'

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
            { entity: "WBTC" },
            { entity: "UNI" },
            { entity: "USDC" },
            { entity: "aWBTC" },
            { entity: "aUSDC" },
            { entity: "TUSD" },
            { entity: "CRV" },
            { entity: "SUSHI" },
        ]
    },
    {
        tx: "0x305a83574cb8e4c51acf6db9fd38ec39e6ef73ffe25cbf1845e8d8f68a5f1695",
        networkFee: 0.066619, //in ETH
        blockNum: 11711726,
        date: new Date(),
        amountBorrowedUSD: 9000000,
        tokensBorrowed: ["ETH", "AAVE"],
        from: "0x87245c288fcC858BF7225Dc3Ab97D0aD94730757",
        providers: ["AAVE"],
        version: 2,
        interactions: [
            { entity: "ETH" },
            { entity: "UNI" },
            { entity: "USDC" },
            { entity: "aETH" },
            { entity: "aUSDC" },
            { entity: "CRV" },
        ]
    },
]

class AppContextProvider extends Component {
    state = {
        newBlocksSub: null,
        FLEventSubs: null,
        latestBlockNum: null,
        connectedToMainnet: false,
        FLs: [],
        selectedFL: null
    }

    async componentDidMount() {
        // log in to save data on Firebase
        // email: data@data.com
        // password: d@t@123
        await firebaseAuth.login("data@data.com", "d@t@123")
        // FIREBASE DATA
        this.loadFLsFromFirebase()

        // WEB3 LISTENERS
        // Set up newBlockListener
        const sub = web3.subscribeToNewBlocks((err, res) => {
            if (err) return
            this.setState({
                connectedToMainnet: true,
                latestBlockNum: res.number
            })
        })
        // Set up FL event listeners
        const eventSubs = web3.subscribeToFLLogs()
        // Save subs to state for unsubbing later
        this.setState({
            newBlocksSub: sub,
            FLEventSubs: eventSubs
        })
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.latestBlockNum != this.state.latestBlockNum) {
            if (web3.flashLoans.length === 0) return

            let newFLs = []

            for (let i = 0; i <  web3.flashLoans.length; i++) {
                let tempFL =  web3.flashLoans[i];
                tempFL = await web3.formatFLData(tempFL)

                // Store FL in Firebase --------
                if (["0x5cffe9de", "0xab9c4b5d"].includes(tempFL.tx.input.substring(0, 10))) {
                    this.storeFLInFirebase(tempFL)
                    // console.log("DISABLED - WOULD HAVE SAVED TO DB HERE");
                }
                // -----------------------------

                newFLs.push(tempFL)
            }

            // const newFLs = await web3.flashLoans.map(async fl => {

            //     fl = await web3.formatFLData(fl)

            //     // Store FL in Firebase --------
            //     if (["0x5cffe9de", "0xab9c4b5d"].includes(fl.tx.input.substring(0, 10))) {
            //         // this.storeFLInFirebase(fl)
            //         console.log("DISABLED - WOULD HAVE SAVED TO DB HERE");
            //     }
            //     // -----------------------------

            //     return fl
            // })

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

    storeFLInFirebase = async (FL) => {
        console.log("Saving FL in tx", FL.tx.hash, "in Firebase...");
        const res = await firebaseDB.storeFlashLoan(FL)
        console.log("FL Saved.");
    }

    loadFLsFromFirebase = async () => {
        // Get raw FLs - still stringified
        const rawFLs = await firebaseDB.getAllFlashLoans()
        let processedFLs = []

        for (let i = 0; i < rawFLs.length; i++) {
            const fl = rawFLs[i];

            fl.decodedTX = JSON.parse(fl.decodedTX)
            fl.events = JSON.parse(fl.events)
            fl.tx = JSON.parse(fl.tx)
            fl.borrowData = JSON.parse(fl.borrowData)

            const tempFL = await web3.formatFLData(fl)
            processedFLs.push(tempFL)
        }

        // sort FLs with latest at top
        processedFLs = processedFLs.sort((a, b) => (a.date > b.date) ? -1 : 1)
        console.log("PROCESSED FLs", processedFLs);

        this.setState({
            FLs: processedFLs,
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