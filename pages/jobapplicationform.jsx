import React from 'react'
import LeftSide from '../components/Jobpostingform/Left/LeftSide';
import RightSide from '../components/Jobpostingform/Right/RightSide';
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
