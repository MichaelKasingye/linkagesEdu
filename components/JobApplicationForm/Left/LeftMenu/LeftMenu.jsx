import React from 'react'
import LeftTitle from '../../../LeftTitle/LeftTitle';
import LeftMenuCss from './LeftMenu.module.css';
import ListItems from '../../../LeftListItems/ListItems';
function LeftMenu() {
    return (
        <div className={LeftMenuCss.left}>
           <LeftTitle  title = "Job Categories"/> 
            <ListItems list="Full stack" link="/fullstack"/>
        </div>
    )
}

export default LeftMenu
