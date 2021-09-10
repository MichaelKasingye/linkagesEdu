import React from 'react'
import { db } from '../../Firebase/firebase';
import LeftSide from "../../components/AdminAllJobOpportunities/Left/LeftSide";
import RightSide from "../../components/AdminAllJobOpportunities/Right/RightSide";
import styles from "../../styles/body/AllProfiles.module.css";

export default  function admin({info}) {
    return (
      <div className={styles.container}>
      {/* {console.log(info)} */}
        <LeftSide/>
        <RightSide server = {info}/> 
    </div>
    )
}

export const getStaticProps = async () => {
    let info = []
    try 
    {
      // await the promise
      const querySnapshot = await db
        .collection('jobs')
        .get();
    
      // "then" part after the await
      querySnapshot.forEach(function (doc) {
        console.log(doc.data())
        console.log(doc.data().jobCategory)
        info.push(
            {
               id: doc.id,
               coName: doc.data().coName,
               qualifications: doc.data().qualifications,
               jobTitle: doc.data().jobTitle,
               jobCategory: doc.data().jobCategory,
               jobDescription: doc.data().jobDescription,
               deadline: doc.data().deadline,
               location: doc.data().location,
               qualifications: doc.data().qualifications,
          })
  

    

      })
    //   console.log(posts)
    } catch(error) {
        // catch part using try/catch
        console.log('Error getting documents: ', error)
        // return something else here, or an empty props, or throw an exception or whatever 
    }

    return {
        props: {
          info
        }
    }
}
