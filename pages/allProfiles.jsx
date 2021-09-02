import LeftSide from "../components/AllProfiles/Left/LeftSide";
import RightSide from "../components/AllProfiles/Right/RightSide";
import styles from "../styles/body/AllProfiles.module.css";
import { db,storage } from '../Firebase/firebase';


export default function allProfiles({info}) {
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
      .collection('profileApplications')
        .get();
        
      querySnapshot.forEach(function (doc) {
        // console.log(doc.data())
        // console.log(doc.data().jobCategory)
        info.push(
          {
             id: doc.id,
            //  }
            //  ,{
            otherSkills: doc.data().otherSkills,
            projectName: doc.data().projectName,
            projectDescription: doc.data().projectDescription,
            email: doc.data().email,
            phone: doc.data().phone,
            projectImgLink: doc.data().projectImgLink,

            projectLink: doc.data().projectLink,
            jobTItle: doc.data().jobTItle,
            technicalSkills: doc.data().technicalSkills,
            fisrtName: doc.data().fisrtName,
            bio: doc.data().bio,
            certificateImage: doc.data().certificateImage,
              imageUrl: doc.data().imageUrl,
            lastName: doc.data().lastName,
            certificateName: doc.data().certificateName,
        })
  
  
        
  
      })
    //   console.log(info)
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