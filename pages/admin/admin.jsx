import React from 'react'
import { db,storage } from '../../Firebase/firebase';

function admin({data}) {
    return (
        <div>
            {console.log(data)}
           <h1>admin</h1> 
        </div>
    )
}

// export const getServerSideProps = async (context) => {
//     // var docRef = db.collection("jobs");
//     // const docSnap = await getDoc(docRef);
//     // const user = await docSnap.data()
//     var docRef = await db.collection("jobs").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             console.log({id: doc.id,data:doc.data()});
//         });
//     });
//   console.log(docRef);
//   return  {props: { post }} // will be passed to the page component as props
  
//   }

export const getStaticProps = async () => {
    let posts = []
    try 
    {
      // await the promise
      const querySnapshot = await db
        // .firestore()
        .collection('jobs')
        // .orderBy('createdAt', 'desc')
        .get();
    
      // "then" part after the await
      querySnapshot.forEach(function (doc) {
        console.log(doc.data().jobTitle)
        console.log(doc.data().jobCategory)
        posts.push({
            jobTitle: doc.data().jobTitle,
            jobCategory: doc.data().jobCategory,
        })
      })
      console.log(posts)
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




// export const   getStaticProps = async () => {
    //    var docRef = db.collection("jobs");
    // // const docSnap = await get(docRef);
    // const data = await docRef.get()
    // let data = [];
    // var docRef = await db.collection("jobs")
    // .get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         // console.log(doc.id, " => ", doc.data())
    //         // console.log(doc)
    //             doc.id
    //     });
    // });
    // // const docSnap = await get(docRef);
    // const docSnap = await docRef.get()
    // const info =  docSnap.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log({id: doc.id,data:doc.data()})
                // console.log(doc)
                // data.push({id: doc.id,post:doc.data()})   
                // data.push(Object.assign({
                    // id: doc.id
                // },doc.data()))
               
            // });
           
    // const info =  docRef.id
    // const text = await info.text()data
    // console.log(data.toJSON())
    // console.log(docRef);

    //  await db.collection("jobs").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //         data.push({
    //                 id: doc.id
    //             },doc.data())
    //     });
    // });


    
//     console.log(data);


//     return {
//       props: { data }, 
//     }
//   }

export default admin
