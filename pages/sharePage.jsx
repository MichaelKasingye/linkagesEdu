import React, { useEffect, useState } from 'react'
import { db, } from '../Firebase/firebase';

import LeftSide from "../components/PersonalProfile/Left/LeftSide";
import RightSide from "../components/PersonalProfile/Right/RightSide";  

import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import SkillsTags from "../components/Skills/Skills";
import BioParagraph from "../components/Paragraph/Paragraph";
import Border from "../components/Border/Border";
import profileStyle from "../styles/body/Profile.module.css";
import TitleRight from "../components/TitleRight/TitleRight";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import rightCss from "../styles/body/RightBody.module.css";
import style from "../styles/body/Profile.module.css";
// import { useStateValue } from '../ContextAPI/StateProvider';
import Paragraph from '../components/Paragraph/Paragraph';
// import { protectedPage } from '../components/Utilities/functions';
// import { useRouter } from 'next/router'
import Router from "next/router";


export default function SharePage() {

  
  const [info, setInfo] = useState('');
  // const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    db.collection('P&L_UserProfile').onSnapshot(snapshot => {
        // console.log(snapshot.docs.map(doc => doc.data()));
        // console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === localStorage.getItem("Id")));
setInfo(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.data.userId === localStorage.getItem("userId")));
    })

// const dataId =  typeof info[0] !=='undefined'?info[0].data.Id : "no Data yet" ;
// // console.log(dataId);

//      if (dataId) {
//         console.log("user logged");
//         // Router.push("/");

//       } else {
//         Router.push( "/");
//       }

}, []);

const data = typeof info[0] !=='undefined'?info[0].data : "no Data yet" ;
const fname = data.fisrtName;
console.log( data);
  return (
 <div className={style.container}>
{typeof data !=='undefined'?<section className={rightCss.right}>
      {/* {console.log(data)} */}
      <ProfileHeader 
      profileDetails={data} 
      fisrtName ={data.fisrtName}
      lastName = {data.lastName}
      jobTItle= {data.jobTItle}
      phoneNumber={data.phoneNumber}
      email={data.email}
      image={data.photoURL}/>

      <div className={profileStyle.border}></div>
      <div>
        <TitleRight title="Bio" />
        <BioParagraph text={data.bio} />
      </div>
      <Border />
      <div>
        <TitleRight title="Technical Skills" />
        <Paragraph text={data.technicalSkills}  />
      </div>
      <Border />
      <div>
        <TitleRight title="Other Skills" />
        <Paragraph text={data.otherSkills}  />
      </div>
      <Border />
      <div>
        <TitleRight title="Certifications" />
        <Paragraph text={data.certificateName} />
      </div>
      <Border />
      <div className={profileStyle.allProjects}>
        <TitleRight title="Portfolio" />
     
         <div className={profileStyle.flexitem}>
          
              <ProjectCard
                projectName={data.projectName}
                projectLink={data.projectLink}
                projectDescription={data.projectDescription}
                projectImage={data.projectImgLink }
              />
          
        </div>
      </div>
    </section> :"Edit profile"}
      
    </div>
  )
} 

