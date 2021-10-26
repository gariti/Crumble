/* eslint-disable no-console */
import { getStorage, ref, uploadBytes } from 'firebase/storage'

export const uploadProfileImage = async (photo, uid) => {
  const imgRef = ref(getStorage(), `${uid}.jpg`)

  uploadBytes(imgRef, photo).then((snapshot) => {
    console.log('Uploaded a blob or file!')
  })
}
