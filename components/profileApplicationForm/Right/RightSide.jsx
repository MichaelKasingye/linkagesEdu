
import React, { useEffect, useState } from 'react'
import { db,storage } from '../../../Firebase/firebase';
import Link from "next/link";
import firebase from "firebase";
import Image from 'next/image'
import TitleRight from '../../TitleRight/TitleRight';
import SearchBar from '../../SearchBar/SearchBar';
import {FormsText, FormsTextArea} from '../../Forms/Forms';

import rightCss from '../../../styles/body/RightBody.module.css';
import Modal from '../../Modal/Modal';
import { ButtonFilled } from '../../Button/Button';





function RightSide({fireBaseData}) {
    // const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
     const [image, setImage] = useState(null);

     const [fname, setFName] = useState('');
     const [lname, setLName] = useState('');
     const [jobTItle, setjobTItle] = useState('');


    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [bio, setBio] = useState('');
    const [technicalSkills, setTechnicalSkills] = useState('');
    const [otherSkills, setOtherSkills] = useState('');

    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectLink, setProjectLink] = useState('');
    const [projectImgLink, setProjectImgLink] = useState('');

    const [certificateName, setCertificateName] = useState('');
    const [certificateImage, setCertificateImage] = useState('');


    const [allData, setAllData] = useState('');
   
// console.log(fireBaseData);


//     useEffect(() => {
//        db.collection('profileApplications').onSnapshot(snapshot => {
//         //    console.log(snapshot.docs.map(doc => doc.data()));
//         //    console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})));

//     setAllData(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})));
// console.log(allData);
//        })
       
//         }, []);


        const handleChange = (e) => {
            if(e.target.files[0]){
                setImage(e.target.files[0]);
            }
        };
    
    
        const applyJob = (event) =>{
            event.preventDefault();

            const uploadTask = storage.ref(`image/${image.name}`).put(image);
    
            uploadTask.on(
                "state_changed",
                (snapshot)=>{
                    //progress function..
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progress);
                    },
                    (error) => {
                        console.log(error);
                        alert(error.message);
                    },
                    //complete function 
                    () =>{
                        storage
                        .ref("image")
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            // post image inside db
                            // const docRef =  db.collection("profileApplications")
                            db.collection("profileApplications").add({
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                 imageUrl: url,
                                 fisrtName:fname,
                                 lastName:lname,
                                 jobTItle:jobTItle,

                                 email:email,
                                 phone:phone,
                                 bio:bio,
                                 technicalSkills:technicalSkills,
                                 otherSkills:otherSkills,
                                 projectName:projectName,
                                 projectDescription:projectDescription,
                                 projectLink:projectLink,
                                 projectImgLink:projectImgLink,
                                 certificateName:certificateName,
                                 certificateImage:certificateImage,
                                //  update()
                            }).then((docRef) => {
                                console.log("Document sent with ID: ", docRef.id );
                                //update collection with document id
                                // db.collection("profileApplications").update({
                                //     id: docRef.id,
                                //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                //      imageUrl: url,
                                //      name:name,
                                //      email:email,
                                //      phone:phone,
                                //      bio:bio,
                                //      technicalSkills:technicalSkills,
                                //      otherSkills:otherSkills,
                                //      projectName:projectName,
                                //      projectDescription:projectDescription,
                                //      projectLink:projectLink,
                                //      projectImgLink:projectImgLink,
                                //      certificateName:certificateName,
                                //      certificateImage:certificateImage,
                                // })
                            })
                            .catch((error) => {
                                console.error("Error adding document: ", error);
                            });
                            setFName('');
                            setLName('');
                            setjobTItle('');

                            setEmail('');
                            setPhone('');
                            setBio('');
                            setTechnicalSkills('');
                            setOtherSkills('');

                            setProjectName('')
                            setProjectDescription('');
                            setProjectLink('');
                            setProjectImgLink('');

                            setCertificateName('');
                            setCertificateImage('');

                            setProgress(0);
                            setImage(null)
                        })
                    }
            )
        };




        // { console.log(allData.map(info => info.id))}
const id = [...allData].map(info => info.id)
// const route = `/testprofile/${id}`;
const slug = `${id}`;

    return (
        <section className={rightCss.right}>

            {/* {console.log(id)} */}
{/* <Link href={route}>   
<a>Go to pages/post/[pid].js</a>
</Link> */}
{/* <Link href="[profile]/[id]" as={route}>
          <a>First Route</a>
        </Link> */}
        {/* info.id */}

      { 
       [...allData].map(info => (
           <>
           {/* {const route = `/testprofile/${info.id}`} */}
    <Link href="[profile]/[id]" as={`/testprofile/${info.id}`} passHref>
        <div className="">

               <h1 key={info.id}>{info.data.fisrtName} {info.data.lastName}</h1>
               {/* <img src={info.data.imageUrl} alt="img" width="300" height="300"/> */}
               <Image
                loader={({ src, width, quality }) => {
                    return `${info.data.imageUrl}`
                  }}
                 src={info.data.imageUrl}
                  alt={info.data.lastName}
                 width={300}
                height={300}
                 />
               <p key={info.id}>{info.data.email}</p>
               <p key={info.id}>{info.data.jobTItle}</p>
        </div>
         </Link>
         </>
       ))
       }










       <TitleRight title= "Job Application Form" />
       {/* <SearchBar placeholder="Search.." onClick={()=>alert("Search button")}/> */}

       <form className={rightCss.FormsText}>

            <label >Upload Image</label>
            <input type="file" onChange={handleChange}/> 
            {/* <ButtonFilled text = "Upload" /> */}
            <progress  className={rightCss.imageupload_progress} value={progress} max="100"></progress>

           <label >First Name</label>
            <input type="text" placeholder="First" value={fname} onChange={(e) => setFName(e.target.value)}/>  
            <label >Last Name</label>
            <input type="text" placeholder="Last" value={lname} onChange={(e) => setLName(e.target.value)}/>  
            <label >Job Title </label>
            <input type="text" placeholder="Last" value={jobTItle} onChange={(e) => setjobTItle(e.target.value)}/> 

            <label >Email</label>
            <input type="text" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}/> 

            <label >Phone</label>
            <input type="number" placeholder="Email"  value={phone} onChange={(e) => setPhone(e.target.value)}/> 

            <label >Bio</label>
            <textarea  rows="4" cols="50" placeholder="Text"  value={bio}  onChange={(e) => setBio(e.target.value)}/> 


            <label >Technical Skills</label>
            <input type="text" placeholder="HTML, CSS, etc ...." value={technicalSkills} onChange={(e) => setTechnicalSkills(e.target.value)}/> 

            <label >Other Skills</label>
            <input type="text" placeholder="Team leadership, communication skills ...." value={otherSkills} onChange={(e) => setOtherSkills(e.target.value)}/> 


       <TitleRight title= "Projects" />
       <label >Projects name</label>
            <input type="text" placeholder="Project .." value={projectName} onChange={(e) => setProjectName(e.target.value)}/> 

            <label >Projects Description</label>
            <input type="text" placeholder="Team leadership, communication skills" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}/> 

            <label >Projects link</label>
            <input type="text" placeholder="Team leadership, communication skills" value={projectLink} onChange={(e) => setProjectLink(e.target.value)}/> 

            <label >Projects image</label>
            <input type="text" placeholder="Team leadership, communication skills" value={projectImgLink} onChange={(e) => setProjectImgLink(e.target.value)}/> 

        <ButtonFilled text = "Add more" />


            <TitleRight title= "Certification" />
       <label >certificate Name</label>
            <input type="text" placeholder="Team leadership, communication skills" value={certificateName} onChange={(e) => setCertificateName(e.target.value)}/> 

            <label >certificate Image</label>
            <input type="text" placeholder="Team leadership, communication skills" value={certificateImage} onChange={(e) => setCertificateImage(e.target.value)}/> 

            <ButtonFilled text = "Add more" />

                
            </form>         {/* <Modal title = "Delete" body="Are you sure" yes= "yes" no="no" ok="Ok" label="Apply" onClick={postJob} /> */}
        <ButtonFilled text = "Submit" onClick={applyJob}/>
        </section>
    )
}

export default RightSide

export const getStaticProps = async () => {
  const fireBaseData =  await db.collection('profileApplications').onSnapshot(snapshot => {
    //    console.log(snapshot.docs.map(doc => doc.data()));
    //    console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})));

  return (snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})));
// console.log(allData);
   })
//   const fireBaseData =  await data.json()

    return{
        props:{
            fireBaseData
        }
    }
}

