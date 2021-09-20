import firebase from 'Firebase/firebase'
import { onAuthStateChanged, getAuth } from 'firebase/auth'

export function authObserver(callback) {
  const auth = getAuth(firebase)
  return onAuthStateChanged(auth, (data) => {
    if (data) {
      callback({
        ...data,
        uid: data.uid,
      })
    }
  })
}
