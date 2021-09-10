import React, { useState } from "react";
import signStyles from "../styles/body/Signin.module.css";
import {auth} from "../Firebase/firebase";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  function login(event){
    event.preventDefault();
    auth
    .signInWithEmailAndPassword(email,password)
    .then((auth)=>{
        history.push("/");
    })
    .catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      // alert(errorCode)
      if (errorCode == "auth/invalid-email") {
        let customError = "Password or Email is not correct "
      }
      setError(errorCode);
    });
    };


  return (
    <div className={signStyles.container}>
      <form className={signStyles.grid}>
        <h3>Log in</h3>
        <input
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick ={login}>Login</button>
      <p>{error}</p>
      </form>
    </div>
  );
}

export default Signin;
