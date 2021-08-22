import React from 'react'
import styles from './Skills.module.css'; 

export default function Skills({skillsTitle, allSkills}) {
    return (
        <div className={styles.skills}>
            <h4 className={styles.title}>{skillsTitle}</h4> 
            <div className={styles.skillTags}> 
               {allSkills.map((skill, index)=>(
                    <p className={styles.skill} key={index}>{skill}</p> 
               ))}  
            </div>
            
        </div>
    )
}
