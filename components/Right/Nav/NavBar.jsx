import React from 'react'
import Image from 'next/image'

import navcss from'./navbar.module.css'

function NavBar({userName, userImage}) {

    const imageHeight =20 ;
const imageWidth =20 ;
    return (
        <div className={navcss.navbar}>
            <div className={navcss.id}>
            <h5>{userName}</h5>
            <Image className= {navcss.id_image}  src={userImage} width={imageWidth} height={imageHeight} 
             alt="user identity" />
            </div>
        </div>
    )
}

export default NavBar
