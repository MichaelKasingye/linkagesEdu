import React from 'react'
import Link from 'next/link'
import listItems from './ListItems.module.css';

function ListItems() {
  
    return (
        <div className={listItems.list}>
           <ul>
               <li><Link href="/">Full Stack</Link></li> 
               </ul> 
        </div>
    )
}

export default ListItems
