import React from 'react'
import styles from './Skills.module.css';
import TitleRight from '../TitleRight/TitleRight';

export default function Skills(title, allSkills) {
    return (
        <div className={styles.skills-section}>
            <TitleRight />
            <div className={styles.skills}>
                {allskills.map((skill) =>
                    <p key={skill.id} className={styles.skill}>{skill.name}</p>
                )}      
            </div>
            
        </div>
    )
}
