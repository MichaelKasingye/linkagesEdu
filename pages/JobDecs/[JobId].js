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
import { doc, getDoc } from "firebase/firestore";
// import Data from "../../components/transfer/Data";
import Jobapplicationform from "../jobapplicationform";
import { useStateValue } from '../../ContextAPI/StateProvider';
import {actionTypes} from "../../ContextAPI/reducer";



export default function Jobdescription({data}) {

    const [info, setInfo] = useState('');
    const [jobData, setJobData] = useState('');
    const [clicked, setClicked] = useState(false);

    //Context API
    const [{}, dispatch] = useStateValue()

console.log(data);
    const router = useRouter()
    const {
      query: { JobId },
    } = router

    
    useEffect(() => {
      db.collection('jobs').onSnapshot(snapshot => {
          // console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === JobId));
  setInfo(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === JobId));
// console.log(info[0].data);
// setlocalStorage(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === JobId))

// localStorage.setItem("jobData",jobData )
})
// setJobData(typeof info != "undefined" ? info[0] : "no data")
// console.log(typeof info != "undefined" ? info[0] : "no data");
//     localStorage.setItem("jobData",jobData )
    
  }, [JobId]);

  const JobData =  [...info][0]?.data 
  const JobDataInfo = info[0]?.data 

  useEffect(() => {
    setClicked(false)

  }, []);
// console.log(  JobData);

function sendToContext(){
  dispatch({
    type: actionTypes.SET_ITEM,
    info: typeof info != "undefined" ? info[0]?.data : "no data"
})
setClicked(true)
}

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
    
<ButtonFilled text= "Confirm" onClick={sendToContext} />

{clicked? 
 <Link href="/jobapplicationform"  onClick={sendToContext}>
     <a><BackdropOverlay text = "Apply" />
     </a> 
        </Link> : ""}

     
    </section>
      ) : (
        <h3>Data not available yet..</h3>
        )}
{/* <Data info = {jobData}/> */}
        {/* <div style={{display:'none'}}>
        <Jobapplicationform infor ={jobData}/>
        </div> */}
    </div>
  );
}


// export const getServerSideProps = async (context) => {
//   let data = []
//   try 
//   {
//      db.collection("jobs").doc(context.params.JobId).get().then((doc) => {
//     if (doc.exists) {
//         // console.log("Document data:", doc.data());
//         // data.push(doc.data())
//         return data.push(
//           {
//              id: doc.id,
//              otherSkills: doc.data().otherSkills,
//              projectName: doc.data().projectName,
//              projectDescription: doc.data().projectDescription,
//              email: doc.data().email,
//              phone: doc.data().phone,
//         })
  
//       } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }

//   })
//   // console.log(docRef)
//   console.log(data)

// } catch(error) {
//     // catch part using try/catch
//     console.log('Error getting documents: ', error)
//     // return something else here, or an empty props, or throw an exception or whatever 
// }

// console.log(data);

//   return {
//       props: {
//         data
//       }
//   }
// }




// export const getStaticProps = async (context) => {
//   let data = []
//   try 
//   {
//     var docRef = db.collection("jobs").doc(context.params.JobId);
  
//   docRef.get().then((doc) => {
//     if (doc.exists) {
//         // console.log("Document data:", doc.data());
//         // info.push(doc.data())
//         data.push(
//           {
//              id: doc.id,
//              otherSkills: doc.data().otherSkills,
//              projectName: doc.data().projectName,
//              projectDescription: doc.data().projectDescription,
//              email: doc.data().email,
//              phone: doc.data().phone,
//         })
  
//       } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }

//   })
//   console.log(data)
// } catch(error) {
//     // catch part using try/catch
//     console.log('Error getting documents: ', error)
//     // return something else here, or an empty props, or throw an exception or whatever 
// }

// console.log(data);

//   return {
//       props: {
//         data
//       }
//   }
// }






// export async function getStaticPaths() {
//   let info = []
//   let paths = []

//   try 
//   {
//     // await the promise
//     const querySnapshot = await db
//     .collection('profileApplications')
//       .get();
      
//     querySnapshot.forEach(function (doc) {
//       // console.log(doc.data())
//       // console.log(doc.data().jobCategory)
//       info.push(
//         {
//            id: doc.id,

//       })

//     })
//     const paths = info.map((data) => ({params:{JobId: data.id.toString()}}))
//     paths.push(paths)
//     // console.log(info)
//     console.log(paths)

//   } catch(error) {
//       // catch part using try/catch
//       console.log('Error getting documents: ', error)
//       // return something else here, or an empty props, or throw an exception or whatever 
//   }

// // console.log(info);
//   return {
//     paths,
//     fallback: true, 
//   };
// }