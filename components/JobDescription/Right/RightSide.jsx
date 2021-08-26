import React from "react";
import TitleRight from "../../TitleRight/TitleRight";
import Paragraph from "../../Paragraph/Paragraph";
import rightCss from "../../../styles/body/RightBody.module.css";
import Subtitle from "../../SubTitle/Subtitle";
import Unordered from "../../UnorderedList/Unordered";
import { ButtonFilled } from "../../Button/Button";
import Tag from "../../TechnicalSkills/Tag";
import Skills from "../../Skills/Skills";

function RightSide() {
  const techSkills = ["Mongodb, react, Node"];
  const qualifications = [
    "At least 5+ years of experience hand-coding HTML(5), CSS(3) and other UI technologies",
    "Experience with XML: XSLT, DTD or Schema modeling, DOM/XPath/SAX parsing",
    "Deep understanding of object oriented JavaScript, solid programming background",
    "Expertise developing and testing across multiple browsers, platforms, DOM implementations, etc.",
  ];

  return (
    <section className={rightCss.right}>
      <TitleRight title="Andela Uganda" />
      <Subtitle text="Senior Frontend" />
      <Paragraph
        text="
    The Senior Frontend Developer is an essential part of the business. 
    He oversees the activities of the junior frontend developer teams and 
    works closely with the business’s backend developers. The Senior 
    Frontend Developer implements the user interface and engineers the 
    experience of every site/software being put out by the business."
      />

      <Subtitle text="Qualifications/skills" />
      <Unordered listItem={qualifications} />

      <Subtitle text="Technical skills" />
      <Skills allSkills={techSkills} />

      <ButtonFilled text="Apply" />
    </section>
  );
}

export default RightSide;
