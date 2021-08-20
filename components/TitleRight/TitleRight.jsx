import React from "react";
import TitleRightCss from "./TitleRight.module.css";

import { GoSettings } from "react-icons/go";
function TitleRight({ title }) {
  return (
    <div className={TitleRightCss.left_Title}>
      <span>
        {/* <GoSettings className={TitleRightCss.left_Title_icon} /> */}
        <h3> {title}</h3>
      </span>
    </div>
  );
}

export default TitleRight;
