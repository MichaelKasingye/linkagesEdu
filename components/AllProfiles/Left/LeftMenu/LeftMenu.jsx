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
      <ListItems list="Edit profile" link="/" />
      <ListItems list="View profile" link="/" />
      <ListItems list="Delete profile" link="/" />
      <ListItems list="Create profile" link="/" />

      <LeftTitle title="Opportunities" />
      <ListItems list="View Job Offer" link="/" />
      <ListItems list="All profiles" link="/allProfiles" />
    </div>
  );
}

export default LeftMenu;
