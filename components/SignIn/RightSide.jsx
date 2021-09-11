import React, { useState } from "react";
import signStyles from "../../styles/body/Signin.module.css";
import rightCss from "../../styles/body/RightBody.module.css";

function RightSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className={rightCss.right}>
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
    </section>
  );
}

export default RightSide;
