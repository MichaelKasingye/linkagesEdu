import React from "react";
import ParagraphCss from "./Paragraph.module.css";

function Paragraph({ text }) {
  return (
    <div className={ParagraphCss.paragraph}>
      <p>{text}</p>
    </div>
  );
}

export default Paragraph;
