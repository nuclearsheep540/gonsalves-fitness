import firebase from 'firebase/app'
import 'firebase/firebase-storage'


// const apiKey = process.env.FIREBASE_API_KEY
// const authDomain = process.env.FIREBASE_AUTH_DOMAIN
// const databaseURL = process.env.FIREBASE_DATABASE_URL
// const projectId = process.env.FIREBASE_PROJECT_ID
// const storageBucket = process.env.FIREBASE_STORAGE_BUCKET
// const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID
// const appId = process.env.FIREBASE_APP_ID
// logger.info(apiKey, authDomain )
// const firebaseConfig = {
//   apiKey: apiKey,
//   authDomain: authDomain,
//   databaseURL: databaseURL,
//   projectId: projectId,
//   storageBucket: storageBucket,
//   messagingSenderId: messagingSenderId, 
//   appId: appId
// }


const firebaseConfig = {
  apiKey: 'AIzaSyCPOC2jvwIesvjYcs451VEtwnWlr_F6cIU',
  authDomain: 'rhyse-pt.firebaseapp.com',
  databaseURL: 'https://rhyse-pt.firebaseio.com',
  projectId: 'rhyse-pt',
  storageBucket: 'rhyse-pt.appspot.com',
  messagingSenderId: '255560484286',
  appId: '1:255560484286:web:0b2b8d379cb0e685a565ef',
  measurementId: 'G-NDT04Q1MJ2'
}





firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
export {
  storage, firebase as default
}