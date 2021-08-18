import React from 'react'
import LeftSide from '../components/Left/LeftSide';
import RightSide from '../components/Right/RightSide';
import general from '../styles/general.module.css'
function course() {
  return (
    <div className = {general.wrapper}>
      <LeftSide/>
      <RightSide/>
    </div>
  )
}

export default course
