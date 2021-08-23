import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase/firebase';
import firebase from "firebase";

import TitleRight from '../../TitleRight/TitleRight';
import SearchBar from '../../SearchBar/SearchBar';
import {FormsText, FormsTextArea} from '../../Forms/Forms';

import rightCss from '../../../styles/body/RightBody.module.css';
import Modal from '../../Modal/Modal';
import { ButtonFilled } from '../../Button/Button';





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
    //        console.log(snapshot.docs.map(doc => doc.data()));
    //        setCoName(snapshot.docs.map(doc => doc.data().coName));
    //        setJob(snapshot.docs.map(doc => doc.data().jobTitle))
    //        setLocation(snapshot.docs.map(doc => doc.data().location))
    //        setJobdescription(snapshot.docs.map(doc => doc.data().jobDescription))
    //        setQualifications(snapshot.docs.map(doc => doc.data().qualifications))
    //        setCategory(snapshot.docs.map(doc => doc.data().jobCategory))
    //        setDeadline(snapshot.docs.map(doc => doc.data().deadline))

    //    })
    //     return () => {
    //     };
    //     }, []);

        function postJob(event) {
            event.preventDefault();
            // console.log(coName);
            db.collection('jobs').add({
                coName:coName,
                jobTitle:job,
                location:location,
                jobDescription:jobdescription,
                qualifications:qualifications,
                jobCategory:category,
                deadline:Deadline,
                // username: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            setCoName('');
            setJob('');
            setLocation('');
            setJobdescription('');
            setQualifications('');
            setQualifications('');
            setDeadline('');
            setCategory('');
        }
        // console.log(coName);

    return (
        <section className={rightCss.right}>
       <TitleRight title= "Job Application Form" />
       {/* <SearchBar placeholder="Search.." onClick={()=>alert("Search button")}/> */}

       <form className={rightCss.FormsText}>

            <label >First Name</label>
            <input type="text" placeholder="Name" value={coName} onChange={(e) => setCoName(e.target.value)}/>  

            <label >Email</label>
            <input type="text" placeholder="Job"  value={ajob} onChange={(e) => setAJob(e.target.value)}/> 

            <label >Short description about you</label>
            <textarea  rows="4" cols="50" placeholder="Description"  value={jobdescription}  onChange={(e) => setJobdescription(e.target.value)}/> 

            <label >Upload CV</label>
            <ButtonFilled text = "Upload" />


            <label >Web site /portfolio/ github Link</label>
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}/> 

            <label >LinkedIn LInk</label>
            <input type="text" placeholder="Deadline" value={Deadline} onChange={(e) => setDeadline(e.target.value)}/> 

            
                
            </form>         {/* <Modal title = "Delete" body="Are you sure" yes= "yes" no="no" ok="Ok" label="Apply" onClick={postJob} /> */}
        <ButtonFilled text = "Submit" onClick={postJob}/>
        </section>
    )
}

export default RightSide
