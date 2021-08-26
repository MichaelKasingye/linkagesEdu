import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from "./ProjectCard.module.css"
import projectImage from "../images/project1.png";

export default function ProfileCard({projectName, projectLink, projectDescription}) {
    return (
        <div className={styles.projectcard}>
            <Link href={projectLink}>
                <a>
                    <Image src={projectImage} alt={projectName} width={300}  height={200} className={styles.img}/>
                    <p className={styles.title}>{projectName}</p>
                    <p className={styles.description}>{projectDescription}</p> 
                </a>
            </Link>
        </div>
    )
}
