/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { db,storage } from '../../Firebase/firebase';
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'


// const myLoader = ({ src, width, quality }) => {
//     return `https://example.com/${src}?w=${width}&q=${quality || 75}`
//   }

export default function Testprofile() {
    const [allData, setAllData] = useState('');
    const [info, setInfo] = useState('');
    const [state, setState] = useState(0);

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
        return () => {
            return () => {
                setState(+1)
                console.log("clean up"+state);
    
            }
        };
    }, [state]);
    


    // useEffect(() => {
    //     if( info.length === 0){
    //         setState(+1)
    //     console.log("length is zero");
    // console.log(state);

    //     }
     
    // }, [])
    
     
    // console.log(allData);
    console.log(state);
    console.log(id);

    //   console.log(info[0].data.name);

    function reStart(){
        // router.push(`/testprofile/${id}`)
        // router.push('/profileform')
        router.back()


    }


    return (
        <div>
            {/* <h1>{info[0].data}</h1> */}
            {typeof info[0] != "undefined" ? (
        <div className="">
            <h2>Profile</h2>
  <img src={info[0].data.imageUrl} alt="img" width="300" height="300"/>
  
         <p>{info[0].data.fisrtName}</p>
         <p>{info[0].data.lastName}</p>
         <p>{info[0].data.email}</p>
         <p>{info[0].data.phone}</p>
         <p>{info[0].data.bio}</p>


         <p>{info[0].data.technicalSkills}</p>
         <p>{info[0].data.otherSkills}</p>

         <h2>projects</h2>
         <p>{info[0].data.projectName}</p>
         <p>{info[0].data.projectDescription}</p>
          <p><strong> <a  href={info[0].data.projectLink} target="_blank" rel="noopener noreferrer">{info[0].data.projectName}</a> </strong></p>

          {/* <Image  src={info[0].data.projectImgLink}   loader={({ src, width, quality }) => {
    return `${info[0].data.projectImgLink}`
  }} alt="Picture of the author" width={300}height={300} /> */}
<img src={info[0].data.projectImgLink} alt="img" width="300" height="300"/>

    <h2>Certificates</h2>
         <p>{info[0].data.certificateName}</p>
         <a href={info[0].data.certificateImage} target="_blank" rel="noopener noreferrer">css </a>
        </div>
      ) : (
        // <h1 onClick={() => router.push('/profileform')}> back to previous page</h1>
       <button><h1 onClick={reStart}> back to previous page</h1></button> 

      )}
        </div>
    )
}
