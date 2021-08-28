import React from 'react'
import LeftSide from "../components/profileApplicationForm/Left/LeftSide";
import RightSide from "../components/profileApplicationForm/Right/RightSide";  
import style from "../styles/body/Profile.module.css";
function profileform() {
    return (
        <div className={style.container}>
        <LeftSide />
      <RightSide />  
        </div>
    )
}

export default profileform
  