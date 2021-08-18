import React from 'react'
import Image from 'next/image'
import html from "../images/html5.png"
import css from "../images/css.png"
import js from "../images/js.png"
import leftCss from '../../styles/left/leftSide.module.css';

const imageHeight =20 ;
const imageWidth =20 ;

export const frontEnd = [
    {
        title: 'HTML',
        icon: <Image src={html} width={imageWidth} height={imageHeight} alt="html5 icon"  />,
        // cName: {leftCss}
    },
    {
        title: 'CSS',
        icon: <Image src={css} width={imageWidth} height={imageHeight} alt="css icon" />,
        // cName: 'list-text'
    },
    {
        title: 'JavaScript',
        icon: <Image src={js} width={imageWidth} height={imageHeight} alt="js icon" />,
        // cName: 'list-text'
    },
    // {
    //     title: 'React Js',
    //     icon: <RiIcons.RiLoginBoxLine className="icon"/>,
    //     cName: 'list-text'
    // }
]

export const BackEnd = [
    {
        title: 'Node',
        // icon: <AiIcons.AiFillHome className="icon"/>,
        cName: 'list-text'
    },
    {
        title: 'Mongoose',
        // icon: <RiIcons.RiHandCoinFill className="icon"/>,
        cName: 'list-text'
    }
]