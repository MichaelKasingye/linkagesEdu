import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase/firebase';
import firebase from "firebase";

import TitleRight from '../../TitleRight/TitleRight';
import SearchBar from '../../SearchBar/SearchBar';
import {FormsText, FormsTextArea} from '../../Forms/Forms';

import rightCss from '../../../styles/body/RightBody.module.css';
import Modal from '../../Modal/Modal';
import { ButtonFilled } from '../../Button/Button';

// note



function RightSide() {
    
    const [coName, setCoName] = useState('');
    const [ajob, setAJob] = useState('');
    const [alocation, setALocation] = useState('');
    const [jobdescription, setJobdescription] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [category, setCategory] = useState('');
    const [Deadline, setDeadline] = useState('');
    
    const [alljobs, setAlljobs] = useState('');


    // useEffect(() => {
    //    db.collection('jobs').onSnapshot(snapshot => {
    //     //    console.log(snapshot.docs.map(doc => doc.data()));
    //     //    setCoName(snapshot.docs.map(doc => doc.data().coName));
    //     //    setJob(snapshot.docs.map(doc => doc.data().jobTitle))
    //     //    setLocation(snapshot.docs.map(doc => doc.data().location))
    //     //    setJobdescription(snapshot.docs.map(doc => doc.data().jobDescription))
    //     //    setQualifications(snapshot.docs.map(doc => doc.data().qualifications))
    //     //    setCategory(snapshot.docs.map(doc => doc.data().jobCategory))
    //     //    setDeadline(snapshot.docs.map(doc => doc.data().deadline))
    //        setAlljobs(snapshot.docs.map(doc => doc.data()))
    //    })

    //    console.log(alljobs);
    //     return () => {
    //     };
    //     }, []);

        function postJob(event) {
            event.preventDefault();
            console.log(coName);
            const data = {
                coName:coName,
                jobTitle:ajob,
                location:alocation,
                jobDescription:jobdescription,
                qualifications:qualifications,
                jobCategory:category,
                deadline:Deadline,
                // username: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
            db.collection('jobs').add(data).then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
            setCoName('');
            setAJob('');
            setALocation('');
            setJobdescription('');
            setQualifications('');
            setDeadline('');
            setCategory('');
            console.log(coName,ajob, alocation,jobdescription, qualifications );
        }

    return (
        <section className={rightCss.right}>
       <TitleRight title= "Job Opportunities" />
       {/* <SearchBar placeholder="Search.." onClick={()=>alert("Search button")}/> */}

        {/* <FormsText placeholder="Name" title="Company Name" input={coName} handler={(e) => setCoName(e.target.value)}/> */}

        {/* <div className={FormCss.FormsText}> */}
            <form className={rightCss.FormsText}>

            <label >Company Name</label>
            <input type="text" placeholder="Name" value={coName} onChange={(e) => setCoName(e.target.value)}/>  

            <label >Job Title</label>
            <input type="text" placeholder="Job"  value={ajob} onChange={(e) => setAJob(e.target.value)}/> 

            <label >Location</label>
            <input type="text" placeholder="Location" value={alocation} onChange={(e) => setALocation(e.target.value)}/> 

            <label >Job description</label>
            <textarea  rows="4" cols="50" placeholder="Description"  value={jobdescription}  onChange={(e) => setJobdescription(e.target.value)}/> 

            <label >Required Qualifications</label>
            <textarea  rows="4" cols="50" placeholder="Qualifications" value={qualifications}  onChange={(e) => setQualifications(e.target.value)}/> 

            <label >Job Category</label>
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}/> 

            <label >Deadline</label>
            <input type="text" placeholder="Deadline" value={Deadline} onChange={(e) => setDeadline(e.target.value)}/> 

            
                
            </form> 


        <ButtonFilled text = "Post" onClick={postJob}/>
        </section>
    )
}

export default RightSide
