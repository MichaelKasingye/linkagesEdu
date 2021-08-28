import { db,storage } from '../../Firebase/firebase';

const fireBaseData = db.collection('profileApplications').onSnapshot(snapshot => {
    //    console.log(snapshot.docs.map(doc => doc.data()));
    //    console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})));

(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})));
// console.log(allData);
   })




export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })

    // res.status(200).json(fireBaseData )
  }