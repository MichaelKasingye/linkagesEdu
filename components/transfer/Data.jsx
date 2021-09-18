import React from 'react'
import Jobapplicationform from '../../pages/jobapplicationform'

function Data({infor}) {
    console.log(infor);
    return (
        <div style={{display:'none'}}>
            <Jobapplicationform tranferData={infor}/>
            <h1>hi</h1>
        </div>
    )
}

export default Data
