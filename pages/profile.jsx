import React from 'react'
import LeftSide from "../components/PersonalProfile/Left/LeftSide";
import RightSide from "../components/PersonalProfile/Right/RightSide";  
import style from "../styles/body/Profile.module.css";
export default function profile() {
  return (
 <div className={style.container}>
      <LeftSide />
      <RightSide /> 
    </div>
  )
} 