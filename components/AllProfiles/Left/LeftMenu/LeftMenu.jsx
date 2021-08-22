import React from "react";
import LeftTitle from "../../../LeftTitle/LeftTitle";
import LeftMenuCss from "../../../../styles/body/LeftMenu.module.css";
import ListItems from "../../../LeftListItems/ListItems";

const menuItems=[
  { 
    list:" view profile", 
    link: "/profile",
  },
  { 
    list:" view profile", 
    link: "/profile",
  },
  { 
   list:" view profile", 
    link: "/profile",
  }
]

function LeftMenu() {
  return (
    <div className={LeftMenuCss.left}>
      <LeftTitle title="Settings" />
      {/* <ListItems menuItems={menuItems}/> */}
    </div>
  );
}

export default LeftMenu;
