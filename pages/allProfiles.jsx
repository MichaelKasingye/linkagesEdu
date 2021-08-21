import LeftSide from "../components/AllProfiles/Left/LeftSide";
import RightSide from "../components/AllProfiles/Right/RightSide";
import styles from "../styles/body/AllProfiles.module.css";


export default function allProfiles() {
    return (
      <div className={styles.container}>
            <LeftSide/>
            <RightSide/> 
        </div>
    )
}
