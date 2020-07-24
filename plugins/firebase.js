import firebase from 'firebase'

console.log('firebase project id:', process.env.VUE_APP_FIREBASE_PROJECT_ID)

const config = {
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID
}

if(!firebase.apps.length) {
    firebase.initializeApp(config)
}

export default firebase