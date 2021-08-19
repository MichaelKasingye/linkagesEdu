import React from 'react'
import LeftSide from '../components/Left/LeftBody/LeftSide';
import RightSide from '../components/Right/RightBody/RightSide';
import general from '../styles/general.module.css'
import Link from "next/link";

function course() {
  return (
    <div className = {general.wrapper}>
      <LeftSide/>
      <RightSide/>
      <h1>All Opportunities</h1>
<button>  <Link href='/profile'>create profile</Link> </button>
    </div>
  )
}

export default course
