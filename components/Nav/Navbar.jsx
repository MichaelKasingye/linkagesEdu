import React from 'react'; 
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import navStyles from "./Navbar.module.css"; 
import profilePic from "../images/user.png"; 
import Logo from "../images/logo4.png";


export default function Navbar(userProfile) { 
const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }

  return (
    <>
      <nav className={navStyles.navbar}>
        <Link href="/" >
          <a className={navStyles.brand}>
            <Image
              loader={({ src, width, quality }) => {
                return `${src}`;
              }}
              src={Logo}
              alt="logo"
              width={80}
              height={80}
            />
          </a>
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
          <Image
            loader={({ src, width, quality }) => {
              return `${src}`;
            }}
            src={profilePic}
            alt="Profile pic"
            width={45}
            height={45}
            className={navStyles.img}
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
