import React, { useState } from "react";
import TitleRight from "../../TitleRight/TitleRight";
import SearchBar from "../../SearchBar/SearchBar"; 
import rightCss from "../../../styles/body/RightBody.module.css"; 
import Border from "../../Border/Border"; 
import ProfileCard from "../../ProfileCard/ProfileCard";
import profileStyles from "../../../styles/body/AllProfiles.module.css"; 

const profileDetails = [
  {
    key: "1", 
    name: "John Magale",
    title: "FullStack Developer",
  },
  {
    key: "2",
    name: "John Magale",
    title: "FullStack Developer",
  },
  {
    key: "3",
   name: "John Magale",
    title: "FullStack Developer",
  },
  {
    key: "4",
   name: "John Magale",
    title: "FullStack Developer",
  },
  {
    key: "5",
  name: "John Magale",
    title: "FullStack Developer",
  },
  {
    key: "6",
  name: "John Magale",
    title: "FullStack Developer",
  },
];

function RightSide() {
  return (
    <section className={rightCss.right}>
      <TitleRight title="Candidates Profiles" />
      <SearchBar style="text-align:center"
        placeholder="Search profiles.."
        onClick={() => alert("Search button")}
      />  
         <div className={profileStyles.allProfiles}> 
      <div className={profileStyles.flexitem}>
        {profileDetails.map(
          ({ key, name,title}) => (
            <ProfileCard
              key={key} 
              name={name}
              title={title}

            />
          )
        )}
      </div>
    </div>
    </section>
  );
}

export default RightSide;
