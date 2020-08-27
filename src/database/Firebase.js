import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBqgNE_e8Mw7phwStCvKu85mHfdY0-5ylI",
    authDomain: "souk-6a5e8.firebaseapp.com",
    databaseURL: "https://souk-6a5e8.firebaseio.com",
    projectId: "souk-6a5e8",
    storageBucket: "souk-6a5e8.appspot.com",
    messagingSenderId: "294153288309",
    appId: "1:294153288309:web:276bef93fe441d43ee163c",
    measurementId: "G-DTQ60KNT26"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;