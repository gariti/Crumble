/* eslint-disable arrow-body-style */

/* eslint-disable no-console */
import firebase from 'Cloud/firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const db = getFirestore(firebase)

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
