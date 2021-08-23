import React from 'react'
import LeftSide from '../components/JobApplicationForm/Left/LeftSide';
import RightSide from '../components/JobApplicationForm/Right/RightSide';
// import general from '../styles/general.module.css'

import styles from '../styles/Home.module.css'
function jobapplicationform() {
    return (
        <div className={styles.container}>

      <LeftSide/>
      <RightSide/>    
    </div>
    )
}

export default jobapplicationform
