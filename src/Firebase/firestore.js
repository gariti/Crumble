/* eslint-disable no-console */
import firebase from 'Firebase/firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const db = getFirestore(firebase)

// export const updateUser = async (uid, user) => {
//   const docRef = doc(db, 'users', uid)

//   await docRef.update({ ...user }).catch((error) => {
//     console.error('Error updating document:', error)
//   })
// }

export const createNewUser = async (user) => {
  createUserWithEmailAndPassword(getAuth(), user.email, user.password).then(
    (uc) => {
      setDoc(doc(db, 'users', uc.user.uid), user)
    },
  )
}

export const getUserData = async (uid) => {
  const docSnap = await getDoc(doc(db, 'users', uid))
  return docSnap.exists() ? docSnap.data() : null
}
