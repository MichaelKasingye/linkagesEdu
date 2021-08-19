import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../images/outbox.png"
import profilePic from "../images/user.jpg";


export default function Navbar(userProfile) {
  return (
    <nav className={styles.navbar} > 
      <Link href="/" className={styles.logo}>
        <a> 
          <Image src={logo} alt="logo" width={100}  height={40}/> 
        </a>
      </Link>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/enrollment">Enrollment</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/learning">Learning</Link>
        </li>
        <li className={`${styles.navlink} ${styles.active}`}>
          <Link href="/linkages">Linkages</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/events">Events</Link>
        </li>
      </ul> 
      <div className={`${styles.navlink} ${styles.user}`}> 
            <a>Name</a>
            <Image src={profilePic} alt="Profile pic" width={35}  height={35} className={styles.img} />
      </div> 
    </nav>
  );
};
