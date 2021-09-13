
import React from 'react';
import Image from 'next/image';
import styles from "./ProfileHeader.module.css";
import userProfilePic from "../images/user.png"

export default function ProfleHeader({fisrtName,lastName,jobTItle,phoneNumber,email,image}) { //typeof info ==='undefinded'

  // console.log(image);
// const profilepIC = image
  // const userPic = typeof profileDetails ==='undefined'?"https://i.pinimg.com/originals/03/87/f4/0387f42a06dcad1bde003acf1f5882f0.jpg"  : profileDetails[0].data.photoURL
  // console.log(typeof profileDetails[0] );
    return (
      <div className={styles.profileHeader}>
        {/* { typeof profileDetails[0] !=='undefined' ?
        (<> */}
        
          <div className={styles.details}>
            <p className={styles.p}>
              {fisrtName } {" "}
             {lastName}
            </p>
            <p className={styles.p}>{jobTItle}</p>
            <p className={styles.p}>{phoneNumber}</p>
            <p className={styles.p}>{email}</p>
          </div>
          {image && 
          
          <Image
            loader={({ src, width, quality }) => {
              return `${src}`;
            }}
            src={image}
            alt="name"
            width={150}
            height={150}
            className={styles.img}
          />
          }
        {/* </>) :"Edit Profile"
        } */}
      </div>
    );
}