// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB6ZFlk4FXGqVwyC4ZUBy0d3spZyk_PwBg',
  authDomain: 'health-recruit-app.firebaseapp.com',
  projectId: 'health-recruit-app',
  storageBucket: 'health-recruit-app.appspot.com',
  messagingSenderId: '428276744937',
  appId: '1:428276744937:web:5bcc7f29c7656ce36b2678',
  measurementId: 'G-QK5SY3DGGQ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
