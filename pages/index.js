import Link from "next/link";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <h1>Home</h1>
<button>  <Link href='/course'>course</Link> </button>
    </div>
  )
}
