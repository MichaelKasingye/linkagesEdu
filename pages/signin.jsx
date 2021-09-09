import React, { useState } from "react";
import signStyles from "../styles/body/Signin.module.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <button>Login</button>
      </form>
    </div>
  );
}

export default Signin;
