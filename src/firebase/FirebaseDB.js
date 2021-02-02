import firebase from 'firebase'
import auth from './FirebaseAuth'

class FirebaseDB {

    async storeFlashLoan(data) {
        // data = {...FL}
        if (!data.tx || !data.block || !data.decodedTX || !data.events || !data.version) {
            console.log("ERROR in FIREBASE DB: Missing data in storeFlashLoan()")
            return null
        }
        const collectionRef = await auth.db.collection('flashLoans3')
        try {
            const res = await collectionRef.add({
                txHash: data.txHash,
                from: data.from,
                block: data.block,
                version: data.version,
                tx: JSON.stringify(data.tx),
                decodedTX: JSON.stringify(data.decodedTX),
                borrowData: JSON.stringify(data.borrowData),
                events: JSON.stringify(data.events),
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
        const colRef = auth.db.collection('flashLoans3')

        return colRef
            .orderBy('dateCreated', 'desc').limit(10)
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

    // async moveFLToNewCollection() {
    //     const from = 'flashLoans3'
    //     const to = 'flashLoans'

    //     if (!auth.isUserSignedIn()) return null
    //     let FLs = []
    //     const colRef = auth.db.collection(from)

    //     return colRef
    //         .get()
    //         .then(snapshot => {
    //             snapshot.forEach(doc => {
    //                 const flObj = { ...doc.data() }
    //                 FLs.push(flObj)
    //             })
    //         })
    //         .then(async () => {
    //             const collectionRef = await auth.db.collection(to)
    //             try {
    //                 for (let i = 0; i < FLs.length; i++) {
    //                     collectionRef.add(FLs[i])
    //                 }
    //                 console.log("SUCCESS: Moved all items from "+from+" to "+to);
    //                 return true
    //             } catch (err) {
    //                 console.log("ERROR in FIREBASE DB: Error in moveFLToNewCollection", err);
    //                 return null
    //             }
    //         })
    //         .catch(err => {
    //             console.log("ERROR in FIREBASE DB: Error in moveFLToNewCollection", err);
    //         })
    // }
}

export default new FirebaseDB()