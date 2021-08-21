import React from 'react'
import FormCss from "./Forms.module.css";

export function FormsText({shortDes, title}) {
    return (
        <div className={FormCss.FormsText}>
            <label >{title}</label>
            <input type="text" placeholder={shortDes}/>  
        </div>
    )
}

export function FormsTextArea({longDes, title}) {
    return (
        <div className={FormCss.FormsTextArea}>
            <label >{title}</label>
            <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder={longDes}/>
              
        </div>
    )
}