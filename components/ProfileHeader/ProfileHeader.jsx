
import React from 'react';
import Image from 'next/image';
import styles from "./ProfileHeader.module.css";
import userProfilePic from "../images/user.png"

export default function ProfleHeader({profileDetails}) {
    return (
        <div className={styles.profileHeader}>
            <div className={styles.details}> 
                <p className={styles.p}>{profileDetails[0].data.fisrtName}</p> 
                <p className={styles.p}>{profileDetails[0].data.jobTItle}</p>  
                <p className={styles.p}>{profileDetails[0].data.phone}</p>
                <p className={styles.p}>{profileDetails[0].data.email}</p> 
            </div>  
                {/* <Image src={profileDetails[0].data.imageUrl} alt="name" width={150}  height={150} className={styles.img}/> */}
                <Image
                loader={ ({ src, width, quality }) => {
                    return `${src}`
                  }}
                 src={profileDetails[0].data.imageUrl}
                  alt="name"
                 width={150}
                height={150}
                 />
                {/* <img src={profileDetails[0].data.imageUrl} alt="img" width="150" height="150" className={styles.img}/> */}
            
        </div> 
    )
}