import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/logo4.png";
import signStyles from "../../styles/body/Signin.module.css";
import rightCss from "../../styles/body/RightBody.module.css";

function RightSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className={rightCss.right}>
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
