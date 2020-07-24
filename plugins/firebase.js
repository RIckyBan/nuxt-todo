import firebase from 'firebase'

console.log('firebase project id:', process.env.FIREBASE_PROJECT_ID)

const config = {
    projectId: process.env.FIREBASE_PROJECT_ID
}

if(!firebase.apps.length) {
    firebase.initializeApp(config)
}

export default firebase