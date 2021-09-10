import React from "react";
import LeftTitle from "../../../LeftTitle/LeftTitle";
import LeftMenuCss from "./LeftMenu.module.css";
import ListItems from "../../../LeftListItems/ListItems";
import {admin} from '../../../Utilities/listMenu'

function LeftMenu() {
  return (
    <div className={LeftMenuCss.left}>
      
      <LeftTitle title="Admin" />
      <ListItems list={admin}  />

    </div>
  );
}

export default LeftMenu;
