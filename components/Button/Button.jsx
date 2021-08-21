import React from 'react'
import ButtonModalCss from "./Button.module.css";

export function ButtonFilled(props) {
    return (
        <div className={ButtonModalCss.buttonfilled} onClick={props.onClick}>
            <button>{props.text}</button>
        </div>
    )
}
export function ButtonOutlined(props) {
    return (
        <div className={ButtonModalCss.buttonOutlined} onClick={props.onClick}>
            <button>{props.text}</button>
        </div>
    )
}

