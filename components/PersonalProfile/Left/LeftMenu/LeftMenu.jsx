import React from "react";
import LeftTitle from "../../../LeftTitle/LeftTitle";
import LeftMenuCss from "../../../../styles/body/LeftMenu.module.css";
import ListItems from "../../../LeftListItems/ListItems";

const profileMenu = [
  {
    item: " All profiles",
    link: "/allProfiles",
  },
  {
    item: " My profile",
    link: "/profile",
  },
  {
    item: " Edit profile",
    link: "/profile",
  },
  {
    item: " Delete profile",
    link: "/profile",
  },
];

const jobMenu = [
  {
    item: "Job Offers",
    link: "/allOpportunities",
  },
  {
    item: "Offers",
    link: "/allOpportunities",
  },
];

function LeftMenu() {
  return (
    <div className={LeftMenuCss.left}>
      <LeftTitle title="Settings" />
      <ListItems menuItems={profileMenu} />
      <LeftTitle title="Opportunities" />
      <ListItems menuItems={jobMenu} />
    </div>
  );
}

export default LeftMenu;
