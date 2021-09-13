// import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";
import signStyles from "../../styles/body/Signin.module.css";
import {auth} from "../../Firebase/firebase";
// import { userinfo } from "../components/Utilities/userInfo";
import { db,storage } from '../../Firebase/firebase';
import Image from "next/image";
import logo from "../../components/images/logo4.png";

import { useStateValue } from '../../ContextAPI/StateProvider';
import {actionTypes} from "../../ContextAPI/Reducer";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // const [{user}, dispatch] = useStateValue();
  // const [{}, dispatch] = useStateValue()

  // const router = useRouter()

  function login(event){
    event.preventDefault();
    auth
    .signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
      var userId = userCredential.user.uid || "123_no_id";
      // var user = userCredential.user || "anonymous";
      var displayName = userCredential.user.displayName || "Anonymous";
      var email = userCredential.user.email || "Anonymous";
      var photoURL = userCredential.user.photoURL || "https://i.pinimg.com/originals/03/87/f4/0387f42a06dcad1bde003acf1f5882f0.jpg";
      var phoneNumber = userCredential.user.phoneNumber || "1234";
      var emailVerified = userCredential.emailVerified || false; //boolean value
      console.log(displayName);

        // console.log(userCredentialuserCredential.uid);

        localStorage.setItem('userId', userId);
        localStorage.setItem('emailVerified', emailVerified);
        localStorage.setItem('email', email);
        localStorage.setItem('displayName', displayName);
        localStorage.setItem('photoURL', photoURL);
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('emailVerified', emailVerified);

        db.collection("P&L_UserProfile").add({
            displayName : displayName,
            email : email,
            photoURL : photoURL,
            phoneNumber : phoneNumber 
          
      }).then((docRef) => {
        docRef.update({
          Id:docRef.id,
          displayName : displayName,
          email : email,
          photoURL : photoURL,
          phoneNumber : phoneNumber 
        })
        localStorage.setItem('Id', docRef.id);
        console.log("Document sent with ID: ", docRef.id );
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });


        let customMessage = "Credentials Confirmed "
        setMessage(customMessage);
        // console.log(email);
        // router.push("/profile");
    
    })
    .catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      // alert(errorCode)
      if (errorCode == "auth/invalid-email") {
        let customError = "Password or Email is not correct "
        setMessage(customError);
      }
    });

    };

    useEffect(() => {
      const userinfo = {
        userId: !localStorage.getItem('userId') || "",
        emailVerified: localStorage.getItem('emailVerified') || "",
        email: localStorage.getItem('email') ||"",
        displayName: localStorage.getItem('displayName') || "",
        photoURL: localStorage.getItem('photoURL') || "",
        phoneNumber: localStorage.getItem('phoneNumber') || "",
        emailVerified: localStorage.getItem('emailVerified') || "",
    }
  //   dispatch({
  //     type: actionTypes.SET_SEARCH_TERM,
  //     user: userinfo
  // })
    // console.log( userinfo[0]);
      
    }, [])
    // console.log( user);

  return (
    <div className={signStyles.container}>

 <Image
        loader={({ src, width, quality }) => {
          return `${src}`;
        }}
        src={logo}
        alt="EDU logo"
        width={200}
        height={140}
        objectFit="contain"
      />

      <form className={signStyles.grid}>
        <h3>Log in</h3>
        <input
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick ={login}>Login</button>
      <p>{message}</p>
      </form>
    </div>
  );
}

export default Signin;
