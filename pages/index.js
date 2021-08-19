import React from 'react'
import LeftSide from '../components/Left/LeftBody/LeftSide';
import RightSide from '../components/Right/RightBody/RightSide';
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
