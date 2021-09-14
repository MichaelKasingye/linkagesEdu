import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import navStyles from "./Navbar.module.css"; 
import profilePic from "../images/user.png"; 
import Logo from "../images/logo4.png";
import { useStateValue } from '../../ContextAPI/StateProvider';
import { db,auth } from '../../Firebase/firebase';
import Router from "next/router";

export default function Navbar(userProfile) { 
const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  const [info, setInfo] = useState('');


  
  // const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    db.collection('P&L_UserProfile').onSnapshot(snapshot => {
        // console.log(snapshot.docs.map(doc => doc.data()));
        console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === localStorage.getItem("Id")));
setInfo(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === localStorage.getItem("Id")));
    })
}, []);


function signOut(){
  auth.signOut().then(() => {
  // Sign-out successful.
       localStorage.removeItem('userId');
       localStorage.removeItem('Id');

        localStorage.removeItem('emailVerified');
        localStorage.removeItem('email');
        localStorage.removeItem('displayName');
        localStorage.removeItem('photoURL');
        localStorage.removeItem('phoneNumber');
        localStorage.removeItem('emailVerified');
  console.log("you have logged out");
Router.push( "/");

}).catch((error) => {
  // An error happened.
  console.log('Message Error', error);
});
}


// const info = receivedData || 
//   const userPic = typeof info[0] !=='undefined'? info[0].data.photoURL : "https://i.pinimg.com/originals/03/87/f4/0387f42a06dcad1bde003acf1f5882f0.jpg";
// const userName = typeof info[0] !=='undefined'? info[0].data.displayName : "Anonymous";




// console.log(userPic); 
  return (

    <>
      <nav className={navStyles.navbar}>
        <Link href="/" >
          <a className={navStyles.brand}>
            <Image
              loader={({ src, width, quality }) => {
                return `${src}`;
              }}
              src={Logo}
              alt="logo"
              width={80}
              height={80}
            />
          </a>
        </Link>
        <ul className={navStyles.links}>
          <li className={navStyles.navlink}>
            <Link href="/">Enrollment</Link>
          </li>
          <li className={navStyles.navlink}>
            <Link href="/">Learning</Link>
          </li>
          <li className={`${navStyles.navlink} ${navStyles.active}`}>
            <Link href="/">Linkages</Link>
          </li>
          <li className={navStyles.navlink}>
            <Link href="/">Events</Link>
          </li>
        </ul>
        <div className={navStyles.user} onClick={toggle}>
          <div className={navStyles.name}>
            {/* {userName} */}.
            </div>
          {/* {info && 
          <Image
            loader={({ src, width, quality }) => {
              return `${src}`;
            }}
            src={userPic}
            alt="Profile pic"
            width={45}
            height={45}
            className={navStyles.img}
          />
          } */}
        </div>
      </nav>
      <div
        style={{ display: showMe ? "block" : "none" }}
        className={navStyles.menu}
      >
        <p className={navStyles.menuitem}>
          <Link href="/profile">View Profile</Link>
        </p>
        <p className={navStyles.menuitem}>
        <div onClick={signOut}>
          <Link href="#" >Logout</Link>
          </div>
        </p>
      </div>
    </>
  );
};
