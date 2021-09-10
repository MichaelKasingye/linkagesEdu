import React from "react";
import Link from "next/link";
import listItems from "./ListItems.module.css";

function ListItems(props) {
  return (
    <div className={listItems.list}>
      <ul> {props.list.map((menuItem, index)=> (
          <li key ={index}>
          <Link   href={menuItem.link} >{menuItem.list}</Link>
        </li>
         )
        )} 
      </ul>
    </div>
  );
}

export default ListItems;
