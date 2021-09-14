import React from "react";
import LeftSide from "../components/JobOpportunities/Left/LeftSide";
import RightSide from "../components/JobOpportunities/Right/RightSide";
import general from "../styles/general.module.css";

import styles from "../styles/Home.module.css";
import { db } from '../Firebase/firebase';

export default function JobOpportunities({info}) {
  return (
    <div className={styles.container}>
      <LeftSide />
      <RightSide server = {info} />
    </div>
  );
}


export const getStaticProps = async () => {
  let info = []
  try 
  {
    // await the promise
    const querySnapshot = await db
    .collection('jobs')
      .get();
      
    querySnapshot.forEach(function (doc) {
      // console.log(doc.data())
      // console.log(doc.data().jobCategory)
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
    // console.log(info)
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