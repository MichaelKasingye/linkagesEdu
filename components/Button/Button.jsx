import React from 'react'
import ButtonModalCss from "./Button.module.css";

export function ButtonFilled({text, onClick}) {
    return (
        <div className={ButtonModalCss.buttonfilled} onClick={onClick}>
            <button>{text}</button>
        </div>
    )
}
export function ButtonOutlined({text, onClick}) {
    return (
        <div className={ButtonModalCss.buttonOutlined} onClick={onClick}>
            <button>{text}</button>
        </div>
    )
}

