import React from "react";
import LeftSide from "../components/JobOpportunities/Left/LeftSide";
// import RightSide from "../components/JobOpportunities/Right/RightSide";
import TitleRight from "../components/TitleRight/TitleRight";
import JobRightSide from "../components/JobDescription/Right/RightSide";
import styles from "../styles/Home.module.css";
import Paragraph from "../components/Paragraph/Paragraph";

export default function jobdescription() {
  return (
    <div className={styles.container}>
      <LeftSide />

      <JobRightSide />
    </div>
  );
}
