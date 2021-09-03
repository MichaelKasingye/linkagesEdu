import React from 'react'; 
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import navStyles from "./Navbar.module.css";
import logo from "../images/logo4.png"
import profilePic from "../images/user.png"; 


export default function Navbar(userProfile) { 
const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }

  return (
    <>
      <nav className={navStyles.navbar}>
        <Link href="/" >
          <a>
          <div className={navStyles.brand}>
            {/* <Image src={logo} alt=" EDU Logo" height={90} width={100} /> */}
            <Image
                loader={ ({ src, width, quality }) => {
                    return `${src}`
                  }}
                 src={logo}
                  alt="EDU Logo"
                 width={100}
                height={90}
                 />
          </div></a>
        </Link>
        <ul className={navStyles.links}>
          <li className={navStyles.navlink}>
            <Link href="/">Enrollment</Link>
          </li>
          <li className={navStyles.navlink}>
            <Link href="/">Learning</Link>
          </li>
          <li className={`${navStyles.navlink} ${navStyles.active}`}>
            <Link href="/">Linkages</Link>
          </li>
          <li className={navStyles.navlink}>
            <Link href="/">Events</Link>
          </li>
        </ul> 
          <div className={navStyles.user} onClick={toggle}>
            <div className={navStyles.name}>John</div>
            {/* <Image
              src={profilePic}
              alt="Profile pic"
              width={45}
              height={45}
              className={navStyles.img}
            /> */}
                 <Image
                loader={ ({ src, width, quality }) => {
                    return `${src}`
                  }}
                 src={profilePic}
                  alt="Profile pic"
                 width={45}
                height={45}
                 />
          </div> 
      </nav>
      <div
        style={{ display: showMe ? "block" : "none" }}
        className={navStyles.menu}
      >
        <p className={navStyles.menuitem}>
          <Link href="/profile">View Profile</Link>
        </p>
        <p className={navStyles.menuitem}>
          <Link href="/logout">Logout</Link>
        </p>
      </div>
    </>
  );
};
