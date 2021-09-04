import React from "react";
import LeftTitle from "../../../LeftTitle/LeftTitle";
import LeftMenuCss from "./LeftMenu.module.css";
import ListItems from "../../../LeftListItems/ListItems";
import {admin} from '../../../Utilities/listMenu'

function LeftMenu() {
  console.log(admin);
  return (
    <div className={LeftMenuCss.left}>
      
      <LeftTitle title="Search" />
      <ListItems list={admin}  />
  

    </div>
  );
}

export default LeftMenu;
