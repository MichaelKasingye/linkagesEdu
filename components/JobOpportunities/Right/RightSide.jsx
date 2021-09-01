/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { db } from '../../../Firebase/firebase';
import firebase from "firebase";

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
    key: "2",
    jobTitle: "Office Fronted",
    company: "Outbox Uganda",
    location: "Kampala",
    paragraph:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,  slightly believable. If you are going to use a passage of Lorem Ipsum",
    deadline: "21/08/2021",
  },
  {
    key: "3",
    jobTitle: "Exct Fronted",
    company: "Outbox Uganda",
    location: "Kampala",
    paragraph:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,  slightly believable. If you are going to use a passage of Lorem Ipsum",
    deadline: "21/08/2021",
  },
];

function RightSide() {
  const [alljobs, setAlljobs] = useState();

  useEffect(() => {
    db.collection('jobs').onSnapshot(snapshot => {
        // console.log(snapshot.docs.map(doc => doc.data()));
        // setCoName(snapshot.docs.map(doc => doc.data().coName));
     //    setJob(snapshot.docs.map(doc => doc.data().jobTitle))
     //    setLocation(snapshot.docs.map(doc => doc.data().location))
     //    setJobdescription(snapshot.docs.map(doc => doc.data().jobDescription))
     //    setQualifications(snapshot.docs.map(doc => doc.data().qualifications))
     //    setCategory(snapshot.docs.map(doc => doc.data().jobCategory))
     //    setDeadline(snapshot.docs.map(doc => doc.data().deadline))
     setAlljobs(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})))
    })

    console.log(alljobs);
     return () => {
     };
     }, []);

  
  return (
    <section className={rightCss.right}>
      <TitleRight title="Job Opportunities" />
      <SearchBar
        placeholder="Search.."
        onClick={() => alert("Search button")}
      />

      {/* {opport.map(
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
      )} */}



<div className={opportStyles.flexitem}>

{typeof alljobs != "undefined" ? (
        
        alljobs.map(
          (job) => (
        //     <div 
        //     key={Math.random()} 
        //     >
        // <ModalJobOpportunities
        // label="Apply"
        // key={Math.random()} 
        // jobTitle={job.jobTitle} 
        // company={job.coName} 
        // location={job.location} 
        // JobDescription={job.jobDescription}
        // requiredQualifications={job.qualifications} 
        // jobCategories={job.jobCategory} 
        // deadline={job.deadline}/>
        //     </div>
        // <h1 key={Math.random()}>sdsds
        // {console.log(job.data.jobTitle)}
        // </h1>
        <OpportunityCard
        Jid={job.id}
          key={job.id}
          jobTitle={job.data.jobTitle}
          company={job.data.coName}
          location={job.data.locationion}
          paragraph={job.data.jobDescription}
          deadline={job.data.deadline}
        />
          )
        )
              ) : (
              <h4>Loading....</h4>
              )}

{/* 
{alljobs.map(
        (job) => (
          <div 
          key={Math.random()} 
          >
{    console.log(alljobs)
}
            
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
      )} */}


         
</div>

    </section>
  );
}

export default RightSide;
