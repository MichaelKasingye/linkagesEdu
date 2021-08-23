import React, { useState } from "react";
import TitleRight from "../../TitleRight/TitleRight";
import SearchBar from "../../SearchBar/SearchBar";
import opportStyles from "../../../styles/body/AllOpportunities.module.css";
import rightCss from "../../../styles/body/RightBody.module.css";
import OpportunityCard from "../../Opportunity/OpportunityCard";
import ModalJobOpportunities from "../../ModalJobOpportunities/Modal";




const opport = [
  {
    key: "1",
    jobTitle: "Junior Fronted",
    company: "Outbox Uganda",
    location: "Kampala",
    paragraph:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,  slightly believable. If you are going to use a passage of Lorem Ipsum",
    deadline: "21/08/2021",
  },
  {
    key: "1",
    jobTitle: "Office Fronted",
    company: "Outbox Uganda",
    location: "Kampala",
    paragraph:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,  slightly believable. If you are going to use a passage of Lorem Ipsum",
    deadline: "21/08/2021",
  },
  {
    key: "1",
    jobTitle: "Exct Fronted",
    company: "Outbox Uganda",
    location: "Kampala",
    paragraph:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,  slightly believable. If you are going to use a passage of Lorem Ipsum",
    deadline: "21/08/2021",
  },
];

function RightSide() {
  return (
    <section className={rightCss.right}>
      <TitleRight title="Job Opportunities" />
      <SearchBar
        placeholder="Search.."
        onClick={() => alert("Search button")}
      />

      {opport.map(
        ({ key, jobTitle, company, location, paragraph, deadline }) => (
          <div key={key} className={opportStyles.flexitem}>
            <OpportunityCard
              key={key}
              jobTitle={jobTitle}
              company={company}
              location={location}
              paragraph={paragraph}
              deadline={deadline}
            />
          </div>
        )
      )}



<div className={opportStyles.flexitem}>




{opport.map(
        ({ key, jobTitle, company, location, paragraph, deadline }) => (
          <div key={key} >
            {/* <OpportunityCard
              key={key}
              jobTitle={jobTitle}
              company={company}
              location={location}
              paragraph={paragraph}
              deadline={deadline}
            /> */}
<ModalJobOpportunities
 label="Apply"
 key={key} 
 jobTitle={jobTitle} 
 company={company} 
 location={location} 
 JobDescription={paragraph}
 requiredQualifications={paragraph} 
 jobCategories={jobTitle} 
 deadline={deadline}/>
          </div>
        )
      )}


         
</div>

    </section>
  );
}

export default RightSide;
