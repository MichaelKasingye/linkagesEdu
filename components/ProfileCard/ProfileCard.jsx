import React from 'react'
import Image from "next/image";
import styles from "./ProfileCard.module.css"
//import profilePic from "../images/user.jpg";

export default function ProfileCard(name, title,userProfilePic) {
    return (
        <div className={styles.card}>
            <Image src={userProfilePic} alt={name} width={150}  height={150} className={styles.img}/>
            <p className={styles.p}>{name}</p>
            <p className={styles.p}>{title}</p>  
        </div>
    )
}
