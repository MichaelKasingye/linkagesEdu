
import React from 'react';
import Image from 'next/image';
import styles from "./ProfileHeader.module.css";
import userProfilePic from "../images/user.png"

export default function ProfleHeader({profileDetails}) {
  // console.log(profileDetails);
    return (
      <div className={styles.profileHeader}>
        {profileDetails &&
        (<>
        
          <div className={styles.details}>
            <p className={styles.p}>
            {/* {profileDetails[0].data.displayName} {" "} */}
  
              {profileDetails[0].data.fisrtName} {" "}
             {profileDetails[0].data.lastName}
            </p>
            {/* <p className={styles.p}>{profileDetails[0].data.jobTItle}</p> */}
            <p className={styles.p}>{profileDetails[0].data.phoneNumber}</p>
            <p className={styles.p}>{profileDetails[0].data.email}</p>
          </div>
          {/* <Image src={profileDetails[0].data.imageUrl} alt="name" width={150}  height={150} className={styles.img}/> */}
          <Image
            loader={({ src, width, quality }) => {
              return `${src}`;
            }}
            src={profileDetails[0].data.photoURL}
            alt="name"
            width={150}
            height={150}
            className={styles.img}
          />
        </>)
        }
        {/* <img src={profileDetails[0].data.imageUrl} alt="img" width="150" height="150" className={styles.img}/> */}
      </div>
    );
}