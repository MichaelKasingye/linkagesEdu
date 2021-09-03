import React from "react";
import Image from "next/image";
import Logo from "../images/logo4.png";
import logoCss from "./logo.module.css";

function logo() {
  return (
    <div className={logoCss.wrapper}>
      <div className={logoCss.logo}>
        {/* <Image src={Logo} alt="Picture of the Logo" /> */}
        <Image
                loader={ ({ src, width, quality }) => {
                    return `${src}`
                  }}
                 src={Logo}
                  alt="Profile pic"
                 width={120}
                height={120}
                 />
      </div>
    </div>
  );
}

export default logo;
