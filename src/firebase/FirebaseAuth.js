import firebase from 'firebase';
const API_KEY = process.env.REACT_APP_FIREBASE_API

const config = {
    apiKey:             API_KEY,
    authDomain:         "fiber-2ab6a.firebaseapp.com",
    projectId:          "fiber-2ab6a"
}

class Firebase {
    constructor() {
        // Initialize Firebase
        firebase.initializeApp(config);
        //firebase.analytics()

        //Auth and DB objects to use Firebase functions
        this.auth = firebase.auth()
        this.db = firebase.firestore()
    }

    async login (email, password) {
        return await this.auth.signInWithEmailAndPassword(email, password)
    }

    logout() {
        return this.auth.signOut()
    }

    async register(name, email, password){
        await this.auth.createUserWithEmailAndPassword(email, password)

        //Can pass in other registration data here - but prob keep min data on sign up
        //And can incentivize them adding more data later
        await this.auth.currentUser.updateProfile({
            displayName: name
        })
        return this.auth.currentUser
    }

    //Returns if user is logged in or not
    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    //Use to check if user signed in
    isUserSignedIn() { 
        return this.auth.currentUser
        // && this.auth.currentUser.displayName
    }

    getCurrentUserId(){
        return this.auth.currentUser.uid
    }
 
    // E.g. of adding to DB given user is logged in and data associated with user
    async updateUserNameData(name, email) {
        if(!this.auth.currentUser){
            return console.log("FAILED to update user name data!");
        }
        
        const res = await this.db.doc(`users/${this.auth.currentUser.uid}`).set({
            name: name,
            email: email,
            dateCreated: firebase.firestore.FieldValue.serverTimestamp()
        })
        return res
    }
}

export default new Firebase()