import React, { useEffect, useState } from "react";
import { db } from '../../Firebase/firebase';
import { useRouter } from 'next/router'
import Link from 'next/link';

import LeftSide from "../../components/JobOpportunities/Left/LeftSide";
// import RightSide from "../components/JobOpportunities/Right/RightSide";
import TitleRight from "../../components/TitleRight/TitleRight";
// import JobRightSide from "../components/JobDescription/Right/RightSide";
import styles from "../../styles/Home.module.css";
import Paragraph from "../../components/Paragraph/Paragraph";


import rightCss from "../../styles/body/RightBody.module.css";
import Subtitle from "../../components/SubTitle/Subtitle";
// import Unordered from "../../UnorderedList/Unordered";
import { ButtonFilled } from "../../components/Button/Button";
import BackdropOverlay from "../../components/Backdrop/Backdrop";
// import Tag from "../../TechnicalSkills/Tag";
// import Skills from "../../Skills/Skills";


export default function Jobdescription() {

    const [info, setInfo] = useState('');
    const router = useRouter()
    const {
      query: { JobId },
    } = router

    
    useEffect(() => {
      db.collection('jobs').onSnapshot(snapshot => {
          // console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === JobId));
  setInfo(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === JobId));
      })
    
  }, [JobId]);

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch('/jobapplicationform')
  }, [router])

  // console.log(info[0]);

  return (
    <div className={styles.container}>
      <LeftSide />

      {typeof info[0] != "undefined" ? (

      <section className={rightCss.right}>
      <TitleRight title={info[0].data.coName}/>
      <Paragraph text={info[0].data.location}  />

      <Paragraph text={info[0].data.jobTitle} />
      <Paragraph
        text={info[0].data.jobDescription} 
      />

      <Subtitle text="Qualifications/skills" />
      <Paragraph text={info[0].data.qualifications}  />

      <Subtitle text="Technical skills" />
      <Paragraph text={info[0].data.jobCategory}  />

      <Subtitle text="Deadline" />

      <Paragraph text={info[0].data.deadline}  />
    

    
      <Link href="/jobapplicationform" >
     <a><BackdropOverlay text = "Apply"/></a> 
        </Link>
    </section>
      ) : (
        <h3>Data not available yet..</h3>
      )}
    </div>
  );
}
