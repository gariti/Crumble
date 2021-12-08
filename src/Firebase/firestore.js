/* eslint-disable arrow-body-style */

/* eslint-disable no-console */
import firebase from 'Firebase/firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const omitKeys = (keysToOmit, originalObj = {}) =>
  Object.fromEntries(
    Object.entries(originalObj).filter(([key]) => !keysToOmit.includes(key)),
  )

const db = getFirestore(firebase)

// export const updateUser = async (uid, user) => {
//   const docRef = doc(db, 'users', uid)

//   await docRef.update({ ...user }).catch((error) => {
//     console.error('Error updating document:', error)
//   })
// }

export const createNewUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(), email, password)
}

export const uploadPhoto = async (path, photo) => {
  const storageRef = ref(getStorage(), path)
  uploadBytes(storageRef, photo)
}

export const getUserPhotoUrl = async (uid) => {
  const storageRef = ref(getStorage(), `${uid}/profile`)
  const photo = await getDownloadURL(storageRef)
  return photo
}

export const updateUser = async (uid, data) => {
  return setDoc(doc(db, 'users', uid), data)
}

export const getUserData = async (uid) => {
  const docSnap = await getDoc(doc(db, 'users', uid))
  return docSnap.exists() ? docSnap.data() : null
}
