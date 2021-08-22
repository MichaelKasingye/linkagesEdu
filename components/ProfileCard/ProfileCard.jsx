import React from 'react'
import Image from "next/image";
import styles from "./ProfileCard.module.css"
import userProfilePic from "../images/user.png";
import Link from 'next/link';

export default function ProfileCard({name, title}) {
    return (
        <Link href="/profile">
        <a className={styles.card}>
            <Image src={userProfilePic} alt={name} width={150}  height={150} className={styles.img}/>
            <p className={styles.p}>{name}</p>
            <p className={styles.p}>{title}</p>  
        </a>
        </Link>
    )
}
