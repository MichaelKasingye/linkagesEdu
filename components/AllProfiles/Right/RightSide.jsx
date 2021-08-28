/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { db,storage } from '../../../Firebase/firebase';
import Link from "next/link";

import TitleRight from "../../TitleRight/TitleRight";
import SearchBar from "../../SearchBar/SearchBar"; 
import rightCss from "../../../styles/body/RightBody.module.css"; 
import Border from "../../Border/Border"; 
import ProfileCard from "../../ProfileCard/ProfileCard";
import profileStyles from "../../../styles/body/AllProfiles.module.css"; 

const profileDetails = [
  {
    key: "1", 
    name: "John Magale ",
    title: "FullStack Developer",
  },
  {
    key: "2",
    name: "John Magale 2",
    title: "Backend Developer",
  },
  {
    key: "3",
   name: "John Magale 3",
    title: "UI/UX Designer",
  },
  {
    key: "4",
   name: "John Magale 4",
    title: "Frontend Developer",
  },
  {
    key: "5",
  name: "John Magale 5",
    title: "JavaScript Developer",
  },
  {
    key: "6",
  name: "John Magale 6",
    title: "React Developer",
  },
];

function RightSide() {
  const [allData, setAllData] = useState('');

  useEffect(() => {
    db.collection('profileApplications').onSnapshot(snapshot => {
     //    console.log(snapshot.docs.map(doc => doc.data()));
     //    console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})));

 setAllData(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})));
// console.log(allData);
    })
    
     }, []);

  return (
    <section className={rightCss.right}>      
      <TitleRight title="Candidates Profiles" />
      <SearchBar style="text-align:center"
        placeholder="Search profiles.."
        onClick={() => alert("Search button")}
      />  


{/* { 
       [...allData].map(info => (
           <div className="" key={info.id}>
    <Link href="[profile]/[id]" as={`/testprofile/${info.id}`} passHref>
        <div className="" key={info.id}>

               <h1 >{info.data.fisrtName} {info.data.lastName}</h1>
               <img src={info.data.imageUrl} alt="img" width="300" height="300"/>
               <p >{info.data.email}</p>
               <p >{info.data.jobTItle}</p>
        </div>
         </Link>
         </div>
       ))
       } */}
      
         <div className={profileStyles.allProfiles}> 
      <div className={profileStyles.flexitem}>
       { [...allData].map(info => (
            <ProfileCard
            id={info.id}
              key={info.id} 
              img={info.data.imageUrl}
              fname={info.data.fisrtName}
              lname={info.data.lastName}
              title={info.data.jobTItle}

            />
          )
        )}


      </div>
    </div>
    </section>
  );
}

export default RightSide;
