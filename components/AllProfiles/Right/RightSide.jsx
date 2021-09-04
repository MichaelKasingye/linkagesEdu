import React, { useEffect, useState } from "react";
import { db,storage } from '../../../Firebase/firebase';
import Link from "next/link";

import TitleRight from "../../TitleRight/TitleRight";
import SearchBar from "../../SearchBar/SearchBar"; 
import rightCss from "../../../styles/body/RightBody.module.css"; 
import Border from "../../Border/Border"; 
import ProfileCard from "../../ProfileCard/ProfileCard";
import profileStyles from "../../../styles/body/AllProfiles.module.css"; 



function RightSide({server}) {
  const [allData, setAllData] = useState('');
  const [severData, setSeverData] = useState('');

  console.log(server)
  // console.log(`info`)


//   useEffect(() => {
//     db.collection('profileApplications').onSnapshot(snapshot => {
//      //    console.log(snapshot.docs.map(doc => doc.data()));
//      //    console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})));

//  setAllData(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})));
// // console.log(allData);
//     })
    
//      }, []);

  return (
    <section className={rightCss.right}>      
      <TitleRight title="Candidates Profiles" />
      <SearchBar style="text-align:center"
        placeholder="Search profiles.."
        onClick={() => alert("Search button")}
      />  


      
         <div className={profileStyles.allProfiles}> 
      <div className={profileStyles.flexitem}>
       { server.map(info => (
            <ProfileCard
            id={info.id}
              key={info.id} 
              img={info.imageUrl}
              fname={info.fisrtName}
              lname={info.lastName}
              title={info.jobTItle}

            />
            // console.log(info.id)

          )
        )}


      </div>
    </div>
    </section>
  );
}


// export const getStaticProps = async () => {
//   let info = ["xxxx"]
//   try 
//   {
//     // await the promise
//     const querySnapshot = await db
//     .collection('profileApplications')
//       .get();
      
//     querySnapshot.forEach(function (doc) {
//       console.log(doc.id)
//       // console.log(doc.data().jobCategory)
//       info.push(
//         {
//            id: doc.id
//            }
//            ,{
//           // jobTitle: doc.data().jobTitle,
//           // jobCategory: doc.data().jobCategory,
//           // jobDescription: doc.data().jobDescription,
//           // deadline: doc.data().deadline,
//           // location: doc.data().location,
//           // qualifications: doc.data().qualifications,
//       })


      

//     })
//     console.log(querySnapshot)
//   } catch(error) {
//       // catch part using try/catch
//       console.log('Error getting documents: ', error)
//       // return something else here, or an empty props, or throw an exception or whatever 
//   }

//   return {
//       props: {
//         info
//       }
//   }
// }

export default RightSide;