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
    const [job, setJob] = useState('');
    const [location, setLocation] = useState('');
    const [jobdescription, setJobdescription] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [category, setCategory] = useState('');
    const [Deadline, setDeadline] = useState('');
   


    useEffect(() => {
       db.collection('jobs').onSnapshot(snapshot => {
           console.log(snapshot.docs.map(doc => doc.data()));
           setCoName(snapshot.docs.map(doc => doc.data().coName));
           setJob(snapshot.docs.map(doc => doc.data().jobTitle))
           setLocation(snapshot.docs.map(doc => doc.data().location))
           setJobdescription(snapshot.docs.map(doc => doc.data().jobDescription))
           setQualifications(snapshot.docs.map(doc => doc.data().qualifications))
           setCategory(snapshot.docs.map(doc => doc.data().jobCategory))
           setDeadline(snapshot.docs.map(doc => doc.data().deadline))

       })
        return () => {
        };
        }, []);

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
       <TitleRight title= "Job Opportunities" />
       {/* <SearchBar placeholder="Search.." onClick={()=>alert("Search button")}/> */}

        <FormsText placeholder="Name" title="Company Name" input={coName} handler={(e) => setCoName(e.target.value)}/>
        <FormsText placeholder="Job" title="Job Title" input={job} onChange={(e) => setJob(e.target.value)}/>
        <FormsText placeholder="Location" title="Location" input={location} onChange={(e) => setLocation(e.target.value)}/>

        <FormsTextArea placeholder="Description"  title="Job description" input={jobdescription} handler={(e) => setJobdescription(e.target.value)}/>
        <FormsTextArea placeholder="Qualifications"  title="Required Qualifications" input={qualifications} handler={(e) => setQualifications(e.target.value)}/>

        <FormsTextArea placeholder="Category"  title="Job Category" input={category} handler={(e) => setCategory(e.target.value)}/>
        <FormsText placeholder="Deadline"  title="Deadline" input={Deadline} handler={(e) => setDeadline(e.target.value)}/>

        {/* <Modal title = "Delete" body="Are you sure" yes= "yes" no="no" ok="Ok" label="Apply" onClick={postJob} /> */}
        <ButtonFilled text = "Post" onClick={postJob}/>
        </section>
    )
}

export default RightSide
