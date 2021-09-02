/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { db,storage } from '../../../Firebase/firebase';
import firebase from "firebase";

import TitleRight from '../../TitleRight/TitleRight';
import SearchBar from '../../SearchBar/SearchBar';
import {FormsText, FormsTextArea} from '../../Forms/Forms';

import rightCss from '../../../styles/body/RightBody.module.css';
import Modal from '../../Modal/Modal';
import { ButtonFilled } from '../../Button/Button';





function RightSide() {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
     const [image, setImage] = useState(null);

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');

    const [email, setEmail] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [allData, setAllData] = useState('');
   



    useEffect(() => {
       db.collection('jobsApplications').onSnapshot(snapshot => {
           console.log(snapshot.docs.map(doc => doc.data()));
    setAllData(snapshot.docs.map(doc => doc.data()))
console.log(allData);
       })
        return () => {
        };
        }, []);

        const handleChange = (e) => {
            if(e.target.files[0]){
                setFile(e.target.files[0]);
            }
        };
    
    
    
        const applyJob = (event) =>{
            event.preventDefault();

            const uploadTask = storage.ref(`file/${file.name}`).put(file);
    
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
                        .ref("file")
                        .child(file.name)
                        .getDownloadURL()
                        .then(url => {
                            // post image inside db
                            db.collection("jobsApplications").add({
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                 imageUrl: url,
                                 fisrtName:fname,
                                 lastName:lname,

                                 email:email,
                                 link:link,
                                 description:description,
                                 linkedIn:linkedIn,
                            }).then((docRef) => {
                                console.log("Document sent with ID: ", docRef.id );
                                //update collection with document id
                            })
                            .catch((error) => {
                                console.error("Error adding document: ", error);
                            });
                            setFName('');
                            setLName('');

                            setEmail('');
                            setLink('');
                            setDescription('');
                            setLinkedIn('');
                            setProgress(0);
                            setFile(null)
                        })
                    }
            )
        };




    return (
        <section className={rightCss.right}>
       <TitleRight title= "Job Application Form" />
       {/* <SearchBar placeholder="Search.." onClick={()=>alert("Search button")}/> */}

       <form className={rightCss.FormsText}>

            <label >First Name</label>
            <input type="text" placeholder="First" value={fname} onChange={(e) => setFName(e.target.value)}/>  
            <label >Last Name</label>
            <input type="text" placeholder="Last" value={lname} onChange={(e) => setLName(e.target.value)}/> 

            <label >Email</label>
            <input type="text" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}/> 

            <label >Short description about you</label>
            <textarea  rows="4" cols="50" placeholder="Description"  value={description}  onChange={(e) => setDescription(e.target.value)}/> 

            <label >Upload CV</label>
            <input type="file" onChange={handleChange}/> 
            <progress  className={rightCss.imageupload_progress} value={progress} max="100"></progress>

            {/* <ButtonFilled text = "Upload" /> */}

            <label >Web site /portfolio/ github Link</label>
            <input type="text" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)}/> 

            <label >LinkedIn Link</label>
            <input type="text" placeholder="LinkedIn" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)}/> 

            
                
            </form>         {/* <Modal title = "Delete" body="Are you sure" yes= "yes" no="no" ok="Ok" label="Apply" onClick={postJob} /> */}
        <ButtonFilled text = "Submit" onClick={applyJob}/>

        </section>
    )
}

export default RightSide
