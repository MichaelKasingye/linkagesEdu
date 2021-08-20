import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from "./ProjectCard.module.css"
//import profilePic from "../images/user.png";

export default function ProfileCard(projectDetails) {
    return (
        <div className={styles.projectcard}>
            <Link href={projectDetails.projectLink}>
                <a>
                    <Image src={projectDetails.projectImage} alt={projectDetails.projectName} width={150}  height={150} className={styles.img}/>
                    <p className={styles.title}>{projectDetails.projectName}</p>
                    <p className={styles.p}>{projectDetails.projectDescription}</p> 
                </a>
            </Link>
        </div>
    )
}
