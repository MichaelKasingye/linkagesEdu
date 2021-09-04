import React from 'react'
import { db } from '../../Firebase/firebase';
import LeftSide from "../../components/AdminAllJobapplicants/Left/LeftSide";
import RightSide from "../../components/AdminAllJobapplicants/Right/RightSide";
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
        .collection('jobsApplications')
        .get();
    
      // "then" part after the await
      querySnapshot.forEach(function (doc) {
        console.log(doc.data())
        // console.log(doc.data().fisrtName)
        info.push(
            {
               id: doc.id,
               fisrtName: doc.data().fisrtName,
               lastName: doc.data().lastName,
               email: doc.data().email,
               about_you: doc.data().description,
               cv: doc.data().imageUrl,
               linkedIn: doc.data().linkedIn,
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
