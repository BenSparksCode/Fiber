import React, { Component, createContext } from 'react'

import web3 from '../data/Web3Connection'
import firebaseAuth from '../firebase/FirebaseAuth'
import firebaseDB from '../firebase/FirebaseDB'

export const AppContext = createContext()

class AppContextProvider extends Component {
    state = {
        newBlocksSub: null,
        FLEventSubs: null,
        latestBlockNum: null,
        connectedToMainnet: false,
        FLs: [],
        filteredFLs: [],
        selectedFL: null,
    }

    async componentDidMount() {
        // log in to save data on Firebase
        // email: data@data.com
        // password: d@t@123
        await firebaseAuth.login("data@data.com", "d@t@123")

        // FIREBASE DATA
        const newFLs = await firebaseDB.getAllFlashLoans()
        this.setState({
            FLs: await this.convertFirebaseFLs(newFLs),
        })

        // firebaseDB.moveFLToNewCollection()

        // WEB3 LISTENERS
        // Set up newBlockListener
        // const sub = web3.subscribeToNewBlocks((err, res) => {
        //     if (err) return
        //     this.setState({
        //         connectedToMainnet: true,
        //         latestBlockNum: res.number
        //     })
        // })
        // // Set up FL event listeners
        // const eventSubs = web3.subscribeToFLLogs()
        // // Save subs to state for unsubbing later
        // this.setState({
        //     newBlocksSub: sub,
        //     FLEventSubs: eventSubs
        // })
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.latestBlockNum != this.state.latestBlockNum) {
            if (web3.flashLoans.length === 0) return

            let newFLs = []

            for (let i = 0; i < web3.flashLoans.length; i++) {
                let tempFL = web3.flashLoans[i];
                tempFL = await web3.formatFLData(tempFL)

                // Store FL in Firebase --------
                if (["0x5cffe9de", "0xab9c4b5d"].includes(tempFL.tx.input.substring(0, 10))) {
                    // this.storeFLInFirebase(tempFL)
                    // console.log("FL STORING DISABLED - WOULD HAVE SAVED TO DB HERE");
                }
                // -----------------------------

                newFLs.push(tempFL)
            }

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

    runSearchRequest = async (address) => {
        console.log("Running search from Context:", address);
        const res = await firebaseDB.searchFLsByInteractionAddress(address)
        this.setState({
            filteredFLs: await this.convertFirebaseFLs(res),
        })
    }

    convertFirebaseFLs = async (firebaseFLs) => {
        // firebaseFLs - still stringified
        if(!firebaseFLs || firebaseFLs.length === 0){
            console.log("ERROR: firebaseFLs passed into convertFirebaseFLs is not valid");
            return []
        }
        
        let processedFLs = []

        for (let i = 0; i < firebaseFLs.length; i++) {
            const fl = firebaseFLs[i];

            fl.decodedTX = JSON.parse(fl.decodedTX)
            fl.logs = JSON.parse(fl.logs)
            fl.tx = JSON.parse(fl.tx)
            fl.borrowData = JSON.parse(fl.borrowData)

            const tempFL = await web3.formatFLData(fl)
            processedFLs.push(tempFL)
        }

        // sort FLs with latest at top
        processedFLs = processedFLs.sort((a, b) => (a.date > b.date) ? -1 : 1)
        console.log("PROCESSED FLs", processedFLs);

        return processedFLs
    }

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                setSelectedFL: this.setSelectedFL,
                killNewBlocksSub: this.killNewBlocksSub,
                runSearchRequest: this.runSearchRequest,
            }}>
                { this.props.children}
            </AppContext.Provider >
        )
    }
}

export default AppContextProvider