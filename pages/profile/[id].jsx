import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { db, } from '../../Firebase/firebase';

import LeftSide from "../../components/PersonalProfile/Left/LeftSide";
import RightSide from "../../components/PersonalProfile/Right/RightSide";  
import style from "../../styles/body/Profile.module.css";
import rightCss from "../../styles/body/RightBody.module.css";
// Skills/Skills
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import SkillsTags from "../../components/Skills/Skills";
import BioParagraph from "../../components/Paragraph/Paragraph";
import Border from "../../components/Border/Border";
import profileStyle from "../../styles/body/Profile.module.css";
import TitleRight from "../../components/TitleRight/TitleRight";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Paragraph from '../../components/Paragraph/Paragraph';

export default function Profile() {
  const [info, setInfo] = useState('');
  const router = useRouter()
  const {
    query: { id },
  } = router

    useEffect(() => {
      db.collection('profileApplications').onSnapshot(snapshot => {
          // console.log(snapshot.docs.map(doc => doc.data()));
          console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === id));

  //  setAllData(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})));
  //  console.log([...allData].map(info => info.id));
  // console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === id));
  // setInfo([...allData].filter(filterData => filterData.id === id));
  setInfo(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === id));


      })
    
  }, [id]);

function reStart(){
  // router.push(`/testprofile/${id}`)
  // router.push('/profileform')
  router.back()


}

// console.log(info[0].data.bio);
  return (
 <div className={style.container}>
      <LeftSide />

      <section className={rightCss.right}>
{typeof info[0] != "undefined" ? (
  <>
      <ProfileHeader profileDetails={info} />
      <div className={profileStyle.border}></div>
      <div>
        <TitleRight title="Bio" />
        <BioParagraph text={info[0].data.bio} />
      </div>
      <Border />
      <div>
        <TitleRight title="Technical Skills" />
        {/* <SkillsTags allSkills={info[0].data.technicalSkills} /> */}
        <Paragraph text={info[0].data.technicalSkills} />

      </div>
      <Border />
      <div>
        <TitleRight title="Other Skills" />
        {/* <SkillsTags allSkills={info[0].data.otherSkills} /> */}
        <Paragraph text={info[0].data.otherSkills} />

      </div>
      <Border />
      <div>
        <TitleRight title="Certifications" />
        {/* <SkillsTags allSkills={info[0].data.certificateName}  /> */}
        <Paragraph text={info[0].data.certificateName}  />

      </div>
      <Border />
      <div className={profileStyle.allProjects}>
        <TitleRight title="Portfolio" />
        <div className={profileStyle.flexitem}>
        <ProjectCard
                key={info.id}
                projectName={info[0].data.projectName}
                projectLink={info[0].data.projectLink}
                projectDescription={info[0].data.projectDescription}
                projectImage={info[0].data.projectImgLink}

              />
               <ProjectCard
                key={info.id}
                projectName={info[0].data.projectName}
                projectLink={info[0].data.projectLink}
                projectDescription={info[0].data.projectDescription}
                projectImage={info[0].data.projectImgLink}
              />
               <ProjectCard
                key={info.id}
                projectName={info[0].data.projectName}
                projectLink={info[0].data.projectLink}
                projectDescription={info[0].data.projectDescription}
                projectImage={info[0].data.projectImgLink}

              />
        
        </div>
      </div>
      </>
          ) : (
       <button><h1 onClick={reStart}> back to previous page</h1></button> 

      )}
    </section>
    </div>
  )
} 
