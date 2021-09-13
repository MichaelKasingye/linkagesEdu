import '../styles/globals.css';
import Layout from '../components/Layout';
import {StateProvider} from "../ContextAPI/StateProvider";
import reducer,{initialState} from "../ContextAPI/Reducer";
import React, { useEffect, useState } from 'react'
import { db, } from '../Firebase/firebase';

import Router from "next/router";


function MyApp({ Component, pageProps }) { 
  const [info, setInfo] = useState('');

//       useEffect(() => {
//     db.collection('P&L_UserProfile').onSnapshot(snapshot => {
//         // console.log(snapshot.docs.map(doc => doc.data()));
//         // console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === localStorage.getItem("Id")));
// setInfo(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === localStorage.getItem("Id")));
//     })

// const dataId =  typeof info[0] !=='undefined'?info[0].data.Id : "no Data yet" ;
// console.log(dataId);

//      if (dataId) {
//         console.log("user logged");
//         // Router.push("/");

//       } else {
//         Router.push( "/");
//       }

// }, []);
    return (
      <Layout>
        <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
        </StateProvider>
      </Layout>
    );
 
}

export default MyApp
