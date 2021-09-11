import React, { useEffect, useState } from 'react'
import { ButtonFilled } from '../../components/Button/Button';
import TitleRight from '../../components/TitleRight/TitleRight';
import { db,storage } from '../../Firebase/firebase';
import rightCss from '../../styles/body/RightBody.module.css';
import LeftSide from "../../components/PersonalProfile/Left/LeftSide";
import style from "../../styles/body/Profile.module.css";

function Editprofile() {
    const [info, setInfo] = useState('');
    const [progress, setProgress] = useState(0);
    const [profileimage, setProfileImage] = useState(null);

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [displayName, setDisplayName] = useState('');

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

    useEffect(() => {
        db.collection('P&L_UserProfile').onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc => doc.data()));
            console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === localStorage.getItem("Id")));
    setInfo(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === localStorage.getItem("Id")));
        })
    }, []);

// console.log(info);
const id = info? info[0].data.Id: "no Id" 
const data = info? info[0].data: "no Data yet" 

const user = {
    displayName: data.displayName || "Anonymous",
email: data.email || "Anonymous",
fisrtName: data.fisrtName || "Anonymous",
jobTItle: data.jobTItle || "Anonymous",
lastName:data.lastName ||  "Anonymous",
phoneNumber: data.phoneNumber || "Anonymous",
bio:data.bio || "Anonymous",
technicalSkills:data.technicalSkills || "Anonymous",
otherSkills:data.otherSkills || "Anonymous",
projectName:data.projectName || "Anonymous",
projectDescription:data.projectDescription || "Anonymous",
projectLink:data.projectLink || "Anonymous",
projectImgLink:data.projectImgLink || "Anonymous",
certificateName:data.certificateName || "Anonymous",
certificateImage:data.certificateImage || "Anonymous",
}
console.log(data);

    const handleChange = (e) => {
        if(e.target.files[0]){
            setProfileImage(e.target.files[0]);
        }
    };

    const upDateProfileHeader = (event) =>{
        event.preventDefault();

        const uploadTask = storage.ref(`image/${profileimage.name}`).put(profileimage);

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
                    .child(profileimage.name)
                    .getDownloadURL()
                    .then(url => {
                        // post image inside db
                        // const docRef =  db.collection("profileApplications")
                        db.collection("P&L_UserProfile").doc(id).update({
                            photoURL: url,
                             fisrtName:fname,
                             lastName:lname,
                             displayName:displayName,
                             jobTItle:jobTItle,

                             email:email,
                             phoneNumber:phone,
                             
                            //  update()
                        }).then((docRef) => {
                            console.log("Document sent  " );
                        })
                        .catch((error) => {
                            console.error("Error adding document: ", error);
                        });
                        setFName('');
                        setLName('');
                        setDisplayName('');
                        setjobTItle('');

                        setEmail('');
                        setPhone('');
                       
                        setProfileImage(null)
                    })
                }
        )
    };

function upDateProfileBody(event){
    event.preventDefault();

    db.collection("P&L_UserProfile").doc(id).set({
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
       console.log("Document sent ");
   })
   .catch((error) => {
       console.error("Error adding document: ", error);
   });
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
//    setImage(null)
}
    return (
 <div className={style.container}>
      <LeftSide />

<form className={rightCss.ProfileFormsText}>
    <h5>{info && info[0].data.displayName}</h5>
<TitleRight title= "Profile Header" />

<label >Upload Image</label>
<input type="file" onChange={handleChange}/> 
{/* <ButtonFilled text = "Upload" /> */}
<progress  className={rightCss.imageupload_progress} value={progress} max="100"></progress>

<label >First Name</label>
<input type="text" placeholder={user.email} value={fname} onChange={(e) => setFName(e.target.value)}/>  
<label >Last Name</label>
<input type="text" placeholder={user.lastName} value={lname} onChange={(e) => setLName(e.target.value)}/> 
<label >Display Name</label>
<input type="text" placeholder={user.displayName} value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>   
<label >Job Title </label>
<input type="text" placeholder={user.jobTItle} value={jobTItle} onChange={(e) => setjobTItle(e.target.value)}/> 

<label >Email</label>
<input type="text" placeholder={user.email}  value={email} onChange={(e) => setEmail(e.target.value)}/> 

<label >Phone</label>
<input type="number" placeholder={user.phoneNumber}  value={phone} onChange={(e) => setPhone(e.target.value)}/> 

<ButtonFilled text = "Submit" onClick={upDateProfileHeader}/>

{/* </form> 


<form className={rightCss.ProfileFormsText}>  */}
<TitleRight title= "Other Details" />
<label >Bio</label>
<textarea  rows="4" cols="50" placeholder={user.bio}   value={bio}  onChange={(e) => setBio(e.target.value)}/> 


<label >Technical Skills</label>
<input type="text" placeholder={user.technicalSkills}  value={technicalSkills} onChange={(e) => setTechnicalSkills(e.target.value)}/> 

<label >Other Skills</label>
<input type="text" placeholder={user.otherSkills}  value={otherSkills} onChange={(e) => setOtherSkills(e.target.value)}/> 


<TitleRight title= "Projects" />
<label >Projects name</label>
<input type="text" placeholder={user.projectName}  value={projectName} onChange={(e) => setProjectName(e.target.value)}/> 

<label >Projects Description</label>
<input type="text" placeholder={user.projectDescription}  value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}/> 

<label >Projects link</label>
<input type="text" placeholder={user.projectLink}  value={projectLink} onChange={(e) => setProjectLink(e.target.value)}/> 

<label >Projects image</label>
<input type="text" placeholder={user.projectImgLink}  value={projectImgLink} onChange={(e) => setProjectImgLink(e.target.value)}/> 

<TitleRight title= "Certification" />
<label >certificate Name</label>
<input type="text" placeholder={user.certificateName}  value={certificateName} onChange={(e) => setCertificateName(e.target.value)}/> 

<label >certificate Image</label>
<input type="text" placeholder={user.certificateImage}  value={certificateImage} onChange={(e) => setCertificateImage(e.target.value)}/> 

<ButtonFilled text = "Submit" onClick={upDateProfileBody}/>
    
</form> 
        </div>
    )
}

export default Editprofile
