import React from "react";
import Link from "next/link";
import listItems from "./ListItems.module.css";

function ListItems({menuItems}) {
  return (
    <div className={listItems.list}>
      <ul> {menuItems.map((menuItem, index)=> (
          <li key={index}>
          <Link  href={menuItem.link} >{menuItem.item}</Link>
        </li>
         )
        )} 
      </ul>
    </div>
  );
}

export default ListItems;
