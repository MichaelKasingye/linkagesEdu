import React from 'react';
import Image from 'next/image';
import styles from "./ProfileHeader.module.css";

export default function ProfleHeader( name, email, phoneNumber, profilePic) {
    return (
        <div id="user_header">
            <div className={styles.card}> 
                <p className={styles.p}>{name}</p>
                <p className={styles.p}>{email}</p>
                <p className={styles.p}>{phoneNumber}</p>
                <p className={styles.p}>{title}</p>  
            </div>  
            <div>
                <Image src={userProfilePic} alt={name} width={150}  height={150} className={styles.img}/>
            </div>
       
        </div> 
    )
}