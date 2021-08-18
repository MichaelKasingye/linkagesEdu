import React from 'react'
import leftCss from '../../styles/left/leftSide.module.css';

function Title({title}) {
    return (
          <p className={leftCss.title}> {title} </p> 
    )
}

export default Title
