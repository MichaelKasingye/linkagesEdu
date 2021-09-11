import React, { useEffect } from 'react'

function ProfileId() {

    useEffect(() => {
        db.collection('jobs').onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === JobId));
    setInfo(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})).filter(filterData => filterData.id === JobId));
        })
      
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default ProfileId
