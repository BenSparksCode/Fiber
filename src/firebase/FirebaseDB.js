import firebase from 'firebase'
import auth from './FirebaseAuth'

// For transforming data in batches
// import web3 from '../data/Web3Connection'
// import { ethers } from 'ethers'
// import { getTokenData } from '../data/TokenData'

class FirebaseDB {

    async storeFlashLoan(data) {
        // data = {...FL}
        if (!data.tx || !data.block || !data.decodedTX || !data.logs || !data.version) {
            console.log("ERROR in FIREBASE DB: Missing data in storeFlashLoan()")
            return null
        }
        const collectionRef = await auth.db.collection('flashLoans')
        try {
            const res = await collectionRef.add({
                txHash: data.txHash,
                from: data.from,
                block: data.block,
                version: data.version,
                tx: JSON.stringify(data.tx),
                decodedTX: JSON.stringify(data.decodedTX),
                borrowData: JSON.stringify(data.borrowData),
                logs: JSON.stringify(data.logs),
                dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
            })
            return res
        } catch (err) {
            console.log("ERROR in FIREBASE DB: Error in storeFlashLoan", err);
            return null
        }
    }

    async getAllFlashLoans() {
        if (!auth.isUserSignedIn()) return null
        let FLs = []
        const colRef = auth.db.collection('flashLoans')

        return colRef
            .orderBy('dateCreated', 'desc')
            .limit(5)
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const flObj = { ...doc.data(), ...{ id: doc.id } }
                    FLs.push(flObj)
                })
            })
            .then(() => {
                return FLs
            })
            .catch(err => {
                console.log("ERROR in FIREBASE DB: Error in getAllFlashLoans", err);
            })
    }


    // USE FUNCTION BELOW TO TRANSFER ITEMS BETWEEN FIREBASE COLLECTIONS

    async moveFLToNewCollection() {
        const from = 'flashLoans2'
        const to = 'flashLoans'

        if (!auth.isUserSignedIn()) return null
        let FLs = []
        const colRef = auth.db.collection(from)

        return colRef
            .orderBy('dateCreated', 'desc')
            // .limit(2)
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const flObj = { ...doc.data() }
                    FLs.push(flObj)
                })
            })
            // MUTATE FLs before re-uploading
            // .then(() => {
            //     for (let i = 0; i < FLs.length; i++) {
            //         let tempFL = { ...FLs[i] }

            //         tempFL.decodedTX = JSON.parse(tempFL.decodedTX)
            //         tempFL.borrowData = JSON.parse(tempFL.borrowData)

            //         // Delete old IDs
            //         delete tempFL.id

            //         // Re-calc token amounts
            //         for (let j = 0; j < tempFL.borrowData.length; j++) {

            //             const amountBN = tempFL.decodedTX?.args[2][j]
            //             const address = ethers.BigNumber.from(tempFL.decodedTX.args[1][j]).toHexString()
            //             const decimals = getTokenData(address).decimals

            //             const tokensBorrowed = ethers.BigNumber.from(amountBN)
            //                 .div(ethers.BigNumber.from(10).pow(decimals - 3))
            //                 .toNumber() / Math.pow(10, 3)

            //             tempFL.borrowData[j].tokensBorrowed = tokensBorrowed
            //             tempFL.borrowData[j].valueBorrowed = tokensBorrowed * tempFL.borrowData[j].tokenValue
            //         }

            //         tempFL.decodedTX = JSON.stringify(tempFL.decodedTX)
            //         tempFL.borrowData = JSON.stringify(tempFL.borrowData)

            //         // Add interactions address array

            //         tempFL.interactions = [...new Set(JSON.parse(tempFL.logs).map(lg => lg.address))]

            //         console.log("INTERACTIONS:", tempFL.interactions);
                    
            //         // Add mutated data back to FL array
            //         FLs[i] = tempFL
            //     }
            // })
            .then(async () => {
                const collectionRef = await auth.db.collection(to)
                try {
                    for (let i = 0; i < FLs.length; i++) {
                        console.log("Trying to add", FLs[i]);
                        collectionRef.add(FLs[i])
                    }
                    console.log("SUCCESS: Moved all items from " + from + " to " + to);
                    return true
                } catch (err) {
                    console.log("ERROR in FIREBASE DB: Error in moveFLToNewCollection", err);
                    return null
                }
            })
            .catch(err => {
                console.log("ERROR in FIREBASE DB: Error in moveFLToNewCollection", err);
            })
    }

    // async getFlashLoans() {
    //     if (!auth.isUserSignedIn()) return null
    //     let FLs = []
    //     const colRef = auth.db.collection('flashLoans')

    //     return colRef
    //         // .orderBy('dateCreated', 'desc').limit(5)
    //         .get()
    //         .then(snapshot => {
    //             snapshot.forEach(doc => {
    //                 const flObj = { ...doc.data(), ...{ id: doc.id } }
    //                 FLs.push(flObj)
    //             })
    //         })
    //         .then(() => {
    //             return FLs
    //         })
    //         .catch(err => {
    //             console.log("ERROR in FIREBASE DB: Error in getAllFlashLoans", err);
    //         })
    // }

    // async uploadFlashLoans(FLs) {
    //     // WARNING - MAKE SURE FLs IN CORRECT FORMAT
    //     const to = 'flashLoans2'

    //     if (!auth.isUserSignedIn()) return null
    //     const collectionRef = await auth.db.collection(to)
    //     try {
    //         for (let i = 0; i < FLs.length; i++) {
    //             console.log("Trying to add", FLs[i]);
    //             collectionRef.add(FLs[i])
    //         }
    //         console.log("SUCCESS: Done uploading to", to);
    //         return true
    //     } catch (err) {
    //         console.log("ERROR in FIREBASE DB: Error in uploadFlashLoans", err);
    //         return null
    //     }
    // }
}

export default new FirebaseDB()