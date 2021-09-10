import React from 'react'
import Image from "next/image";
import styles from "./ProfileCard.module.css"
import userProfilePic from "../images/user.png";
import Link from 'next/link';

export default function ProfileCard({fname,lname, title,img,id}) {
    return (
      // <Link href="[profile]/[id]" as={`/testprofile/${id}`} passHref>
      <Link href="profile/[id]" as={`/profile/${id}`} passHref>
        <a className={styles.card}>
          {/* <Image src={img} alt={fname} width={160}  height={160} className={styles.img}/> */}
          <div className ={styles.pic}>
            <Image
              loader={({ src, width, quality }) => {
                return `${src}`;
              }}
              src={img}
              alt={fname}
              width={10}
              height={10}
              layout="responsive"
              className={styles.img}
            />
          </div>
          {/* <img src={img} alt="img" width="300" height="300" className={styles.img}/> */}
          <div className={styles.details}>
            <p className={styles.p}>
              {fname} <span>{lname}</span>{" "}
            </p>
            <p className={styles.p}>{title}</p>
          </div>
        </a>
      </Link>
    );
}
