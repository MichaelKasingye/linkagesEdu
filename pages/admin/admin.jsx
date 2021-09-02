import React from 'react'
import { db,storage } from '../../Firebase/firebase';

export default  function admin({posts}) {
    return (
        <div>
            {console.log(posts)}
           <h1>admin</h1> 
        </div>
    )
}

export const getStaticProps = async () => {
    let posts = []
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
          posts
        }
    }
}
