import firebase from 'firebase'
import auth from './FirebaseAuth'

class FirebaseDB {

    async storeFlashLoan(data) {
        // data = {...FL}
        if (!data.tx || !data.block || !data.decodedTX || !data.events || !data.version) {
            console.log("ERROR in FIREBASE DB: Missing data in storeFlashLoan()")
            return null
        }
        const collectionRef = await auth.db.collection('flashLoans')
        try {
            const res = await collectionRef.add({
                txHash: data.tx?.hash,
                block: data.block,
                version: data.version,
                tx: JSON.stringify(data.tx),
                decodedTX: JSON.stringify(data.decodedTX),
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
        console.log("in getAllFlashLoans");
        if (!auth.isUserSignedIn()) return null
        let FLs = []
        const colRef = auth.db.collection('flashLoans')

        return colRef.get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const flObj = { ...doc.data(), ...{ id: doc.id } }
                    console.log(flObj);
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
}

export default new FirebaseDB()