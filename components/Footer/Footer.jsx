import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.footer}>
      <h2>Join the community</h2>
      <div className={styles.flex1}>
        <button className={styles.button1}>Receive news</button>
        <button className={styles.button2}>Join here</button>
      </div>
      <div className={styles.flex2}>
        <div>
          <h4>NAVIGATION</h4>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About us</Link>
          </li>
          <li>
            <Link href="#home">What we do</Link>
          </li>
          <li>
            <Link href="#home">Events</Link>
          </li>
          <li>
            <Link href="#contact">contact us</Link>
          </li>
        </div>
        <div>
          <h4>WHAT WE DO</h4>
          <li>
            <Link href="#home">Lorem</Link>
          </li>
          <li>
            <Link href="#about">Lorem</Link>
          </li>
        </div>
        <div>
          <h4>LEGAL</h4>
          <li>
            <Link href="#home">General info</Link>
          </li>
          <li>
            <Link href="#about">Privacy policy</Link>
          </li>
        </div>
        <div>
          <h4>TALK TO US</h4>
          <li>
            <Link href="#home">General info</Link>
          </li>
          <li>
            <Link href="#about">Privacy policy</Link>
          </li>
        </div>
      </div>
      <div className={styles.copysection}>
        <div>
          <h4>Logo</h4>
        </div>
        <div>
          <p>© 2021 OutBox EDU. All Rights Reserved. </p>
        </div>
      </div>
      <div className={styles.social}></div>
    </div>
  );
}
export default Footer;
