import React from "react";
import Link from "next/link";
import listItems from "./ListItems.module.css";

function ListItems(props) {
  return (
    <div className={listItems.list}>
      <ul>
        <li>
          <Link href={props.link}>{props.list}</Link>
        </li>
      </ul>
    </div>
  );
}

export default ListItems;
