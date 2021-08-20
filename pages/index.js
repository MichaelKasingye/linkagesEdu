import React from 'react'
import LeftSide from '../components/Body/Left/LeftSide';
import RightSide from '../components/Body/Right/RightSide';
import general from '../styles/general.module.css'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

<LeftSide/>
      <RightSide/>    
    </div>
  )
}
