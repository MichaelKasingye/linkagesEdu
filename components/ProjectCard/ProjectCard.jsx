import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from "./ProjectCard.module.css"
import projectImage from "../images/project1.png";
// const myLoader = ({ src, width, quality }) => {
//     return `${src}`
//   }
export default function ProfileCard({projectName, projectLink, projectDescription,projectImage}) {

  const userPic = projectImage ? projectImage : "https://i.pinimg.com/originals/d4/d7/dc/d4d7dc8ec7f2e73a296d2d1a3adbe087.jpg"
    return (
      <div className={styles.projectcard}>
        {projectName, projectLink, projectDescription,projectImage && 
        
        <Link href={projectLink}>
          <a target="_blank" rel="noopener noreferrer">
            {/* <Image src={projectImage} alt={projectName} width={300}  height={200} className={styles.img}/> */}
            {/* <img src={projectImage}  className={styles.img} alt="img" width="250" height="200"/> */}
            <Image
              loader={({ src, width, quality }) => {
                return `${src}`;
              }}
              src={userPic}
              alt={projectName}
              width={10}
              height={6}
              layout="responsive"
              className={styles.img}
            />
            <p className={styles.title}>{projectName}</p>
            <p className={styles.description}>{projectDescription}</p>
          </a>
        </Link>
        }
      </div>
    );
}
