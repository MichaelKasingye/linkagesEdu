import React from 'react'
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";

import righttitlecss from './rightTitle.module.css'

export const RightTitles ={
    RightHTML:function RightHTML({title}){
        return (
                    <div className={righttitlecss.right_title}>
                        <ImIcons.ImHtmlFive2 className={righttitlecss.icon_title}/>,
                        <h4>{title}</h4>            
                    </div>
                )
    },
    RightCSS:function RightCSS({title}){
        return (
                    <div className={righttitlecss.right_title}>
                        <ImIcons.ImCss3 className={righttitlecss.icon_title}/>,
                        <h4>{title}</h4>            
                    </div>
                )
    },
    RightJavaScript:function RightJavaScript({title}){
        return (
                    <div className={righttitlecss.right_title}>
                        <IoIcons.IoLogoJavascript className={righttitlecss.icon_title}/>,
                        <h4>{title}</h4>            
                    </div>
                )
    },
}
