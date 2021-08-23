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
    <nav className={navStyles.navbar} > 
      <Link href="/" id="brand"> 
        <a id="brand">
          <Image src={logo} alt=" EDU Logo" height={90} width={100}/> 
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
          <Link href="/linkages">Linkages</Link>
        </li>
        <li className={navStyles.navlink}>
          <Link href="/">Events</Link>
        </li>
      </ul> 
      <Link href ="/profile">
        <a  onClick={toggle}  className={navStyles.user}>
          <p>John</p>
          <Image src={profilePic} alt="Profile pic" width={35}  height={35} className={navStyles.img} />
        </a> 
      </Link> 
    </nav>
     <div style={{ display: showMe?"block":"none"}} 
     className={navStyles.menu}>
            <p className={navStyles.menuitem} ><Link  href="/profile">View Profile</Link></p>
            <p className={navStyles.menuitem} ><Link href="/logout">Logout</Link></p>
      </div> 
    </>
  );
};
