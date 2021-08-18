import React from 'react'
import leftCss from '../../styles/left/leftSide.module.css';

function Logo({logo, logo2}) {
    return (
        <h4  className={leftCss.logo}>
           {logo}<span>{logo2}</span> 
        </h4>
    )
}

export default Logo
