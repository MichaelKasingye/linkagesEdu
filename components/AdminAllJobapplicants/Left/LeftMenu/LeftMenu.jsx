import React from "react";
import LeftTitle from "../../../LeftTitle/LeftTitle";
import LeftMenuCss from "./LeftMenu.module.css";
import ListItems from "../../../LeftListItems/ListItems";
function LeftMenu({menu}) {
  return (
    <div className={LeftMenuCss.left}>
      
      <LeftTitle title="Search" />
      <ListItems list="Full stack" link="/" />
      <ListItems list="Backend" link="/" />
      <ListItems list="Frontend" link="/" />
      <ListItems list="Ui/ Ux Developer" link="/" />

      <LeftTitle title="Opportunities" />
      <ListItems list="View Job Offer" link="/" />
      <ListItems list="All profiles" link="/allProfiles" />
    </div>
  );
}

export default LeftMenu;
