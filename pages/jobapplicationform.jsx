import React from 'react'
import LeftSide from '../components/JobApplicationForm/Left/LeftSide';
import RightSide from '../components/JobApplicationForm/Right/RightSide';
import Data from '../components/transfer/Data';
// import general from '../styles/general.module.css'

import styles from '../styles/Home.module.css'
function jobapplicationform({tranferData}) {
    return (
        <div className={styles.container}>
{console.log(tranferData)}
      <LeftSide/>
      <RightSide/>    
    </div>
    )
}

export default jobapplicationform
