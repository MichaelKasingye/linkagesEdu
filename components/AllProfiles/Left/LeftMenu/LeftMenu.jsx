import React from "react";
import LeftTitle from "../../../LeftTitle/LeftTitle";
import LeftMenuCss from "../../../../styles/body/LeftMenu.module.css";
import ListItems from "../../../LeftListItems/ListItems";

import {profile} from '../../../Utilities/listMenu'

function LeftMenu() {
    return (
        <div className={LeftMenuCss.left}>
           <LeftTitle  title = "Job Categories"/> 
           <ListItems list={profile}  />
    </div>
  );
}

export default LeftMenu;
