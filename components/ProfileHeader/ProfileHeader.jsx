import React from 'react';
import Image from 'next/image';
import styles from "./ProfileHeader.module.css";
import userProfilePic from "../images/user.png"

export default function ProfleHeader({profileDetails}) {
    return (
        <div className={styles.profileHeader}>
            <div className={styles.details}> 
                <p className={styles.p}>{profileDetails.name}</p> 
                <p className={styles.p}>{profileDetails.title}</p>  
                <p className={styles.p}>{profileDetails.phoneNumber}</p>
                <p className={styles.p}>{profileDetails.email}</p> 
            </div>  
                <Image src={userProfilePic} alt="name" width={150}  height={150} className={styles.img}/>
            
        </div> 
    )
}