import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestora'

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDA81IvdFnPgXey7SoiR4zO1TAeuX_sskg",
    authDomain: "firegram-react-firebase-beb78.firebaseapp.com",
    databaseURL: "https://firegram-react-firebase-beb78.firebaseio.com",
    projectId: "firegram-react-firebase-beb78",
    storageBucket: "firegram-react-firebase-beb78.appspot.com",
    messagingSenderId: "162795374897",
    appId: "1:162795374897:web:db737bea6edc64d4ba0810"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage  = firebase.storage()
  const projectFirestore  = firebase.firestore()

  export {projectFirestore, projectStorage}