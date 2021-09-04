import React from 'react'
import Logo from '../../Logo/Logo';
import LeftMenu from './LeftMenu/LeftMenu';
import leftCss from '../../../styles/body/LeftSide.module.css';
import {opportunity} from '../../../Utilities/listMenu'

function LeftSide() {

    return (
        <section className={leftCss.left}>
                    <Logo/>
                    <LeftMenu data ={opportunity}/>
        <div  className={leftCss.left_box}>

        </div>
    </section>
    )
}

export default LeftSide
