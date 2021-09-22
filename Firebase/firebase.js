import firebase from "firebase";

const config = {
   
  apiKey: "AIzaSyCa7EGoodLqSA4oy_sQwc6ou-F9zq4Dt-Y",
  authDomain: "the-linkages-and-profile.firebaseapp.com",
  databaseURL: "https://the-linkages-and-profile-default-rtdb.firebaseio.com",
  projectId: "the-linkages-and-profile",
  storageBucket: "the-linkages-and-profile.appspot.com",
  messagingSenderId: "985058206614",
  appId: "1:985058206614:web:d4bd094cda888563b5b3b7",
  measurementId: "G-J7VGMNX7F1"

  // apiKey: "AIzaSyB6GO9pDLo5sg41yIkq2arv0sFXSp_Ja7k",
  // authDomain: "edu-platform-f3a82.firebaseapp.com",
  // databaseURL: "https://edu-platform-f3a82-default-rtdb.firebaseio.com",
  // projectId: "edu-platform-f3a82",
  // storageBucket: "edu-platform-f3a82.appspot.com",
  // messagingSenderId: "195690313426",
  // appId: "1:195690313426:web:41981410ab710f6e431f0b",
  // measurementId: "G-XC1FX816H7"
     
};


  const db = !firebase.apps.length   ? firebase.initializeApp(config).firestore()  : firebase.app().firestore();
  const storage = !firebase.apps.length   ? firebase.initializeApp(config).storage()  : firebase.app().storage();
  const auth = !firebase.apps.length   ? firebase.initializeApp(config).auth()  : firebase.app().auth();

  // const auth = firebase.auth();
  // const storage = firebase.storage();
  
  export{db,   
     auth, 
      storage,
      };
  // export default !firebase.apps.length ? firebaseApp : firebase.app();
  // export default !firebase.apps.length   ? firebase.initializeApp(config).firestore()  : firebase.app().firestore();
  // export default db;