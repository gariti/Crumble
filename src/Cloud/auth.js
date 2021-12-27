import firebase from 'Cloud/firebase'
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth'

export function authObserver(callback) {
  const auth = getAuth(firebase)
  return onAuthStateChanged(auth, (data) => {
    callback(data)
  })
}

export async function signOutOfFirebase() {
  const auth = getAuth(firebase)
  return signOut(auth)
}
