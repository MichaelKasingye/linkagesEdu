import React from "react";
import Link from "next/link";
import listItems from "./ListItems.module.css";

function ListItems(menuItems) {
  return (
    <div className={listItems.list}>
      <ul>
       {/* {menuItems.map((item, index)=> (
          <li key={index}>
          <Link  href={item.link} >{item.list}</Link>
        </li>
         )
        )} */}
      </ul>
    </div>
  );
}

export default ListItems;
