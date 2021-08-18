import Link from "next/link";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <h1>All Opportunities</h1>
<button>  <Link href='/profile'>create profile</Link> </button>
    </div>
  )
}
