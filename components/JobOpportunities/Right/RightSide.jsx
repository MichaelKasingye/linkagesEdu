import React, { useState } from "react";
import TitleRight from "../../TitleRight/TitleRight";
import SearchBar from "../../SearchBar/SearchBar";
import { FormsText, FormsTextArea } from "../../Forms/Forms";

import rightCss from "../../../styles/body/RightBody.module.css";
import Modal from "../../Modal/Modal";
import { ButtonFilled, ButtonOutlined } from "../../Button/Button";
import Paragraph from "../../Paragraph/Paragraph";
import Border from "../../Border/Border";
import OpportunityCard from "../../Opportunity/OpportunityCard";

function RightSide() {
  return (
    <section className={rightCss.right}>
      {/* <TitleRight title="Job Opportunities" />
      <SearchBar
        placeholder="Search.."
        onClick={() => alert("Search button")}
      /> */}
      {/* <FormsText shortDes="info" title="title" />
      <FormsTextArea longDes="text Area" title="title" />

      <Modal title="Delete" body="Are you sure" yes="yes" no="no" ok="Ok" />

      <ButtonFilled text="button1" onClick={() => alert("FIlled button1")} />
      <ButtonOutlined
        text="button2"
        onClick={() => alert("Outlined button2")}
      />
      <Border /> */}
      {/* {opport.map(
        ({ key, jobTitle, company, location, paragraph, deadline }) => (
          <OpportunityCard
            key={key}
            jobTitle={jobTitle}
            company={company}
            location={location}
            paragraph={paragraph}
            deadline={deadline}
          />
        )
      )} */}
      {/* <Paragraph text="THis is a paragraph" /> */}
    </section>
  );
}

export default RightSide;
