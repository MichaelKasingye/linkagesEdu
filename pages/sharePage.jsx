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
import { useStateValue } from '../ContextAPI/StateProvider';
import Paragraph from '../components/Paragraph/Paragraph';
// import { protectedPage } from '../components/Utilities/functions';
import { useRouter } from 'next/router'


function SharePage() {

    const [info, setInfo] = useState('');
    const [localStoreId, setLocalStoreId] = useState('');

    // const [{user}, dispatch] = useStateValue();
    const router = useRouter()
  
    useEffect(() => {
      db.collection('P&L_UserProfile').onSnapshot(snapshot => {
          // console.log(snapshot.docs.map(doc => doc.data()));
          // console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === localStorage.getItem("Id")));
  setInfo(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === localStorage.getItem("Id")));
      })
      setLocalStoreId(localStorage.getItem("Id"));
  }, []);
  
  // console.log(info);
  
  
  const data = info? info[0].data: "no Data yet" ;
  const idUser = info? info[0].id: "no Data yet" ;
  const storeId = localStoreId;

//PROTECTED ROUTE
  // console.log(idUser);
  //   if(idUser != localStoreId ){
  //     console.log("not user");
  //     router.push('/userSignIn/signin')
      
  //   }else{
  //     console.log("yes user");

  // }




    return (
        <div className={style.container}>
      {/* <LeftSide /> */}

      <section className={rightCss.right}>
      {/* {console.log(data)} */}
      <ProfileHeader profileDetails={info} />
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
        {/* <div className={profileStyle.flexitem}>
          {projectDetails.map(
            ({ projectName, projectDescription, projectLink, key }) => (
              <ProjectCard
                key={key}
                projectName={projectName}
                projectLink={projectLink}
                projectDescription={projectDescription}
              />
            )
          )}
        </div> */}
         <div className={profileStyle.flexitem}>
          
              <ProjectCard
                projectName={data.projectName}
                projectLink={data.projectLink}
                projectDescription={data.projectDescription}
                projectImage={data.projectImgLink }
              />
          
        </div>
      </div>
    </section>
    </div>
    )
}

export default SharePage
    