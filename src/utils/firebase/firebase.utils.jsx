import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCSO9aS_713oYJ3pSmKUao4q9-PSte2aS4",
  authDomain: "e-store-db-3c3c3.firebaseapp.com",
  projectId: "e-store-db-3c3c3",
  storageBucket: "e-store-db-3c3c3.appspot.com",
  messagingSenderId: "399058179177",
  appId: "1:399058179177:web:853c086d94ca53a0277ef8",
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log("error creating the user", error.message)
    }
  }
  return userDocRef
}
