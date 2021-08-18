import React from 'react'
import Title from './Title';
import Logo from './Logo';
import { frontEnd } from './List';
import leftCss from '../../styles/left/leftSide.module.css';


function LeftSide() {

    const frontEndList = <ul >
        {frontEnd.map(list => (
        <li className={leftCss.list_text} key={list.title}>{list.icon} {list.title}</li>
    ))}
    </ul>;

    return (
        <section className={leftCss.left}>
                <div  className={leftCss.left_box}>
                <Logo logo = "self" logo2="Teach"/>
                    <Title title="Front end"/>
                    {frontEndList}

                </div>
            </section>
    )
}

export default LeftSide
