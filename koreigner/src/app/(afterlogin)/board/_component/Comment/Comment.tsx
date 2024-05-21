import styles from './Comment.module.css';
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Comment() {
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div className={styles.userProfile}>
                    <IoPersonCircleOutline className={styles.img} />
                    <p className={styles.nickname}>nickname</p>
                </div>
                <div className={styles.timeInfo}>
                    <p>2024/05/14</p>
                    <p>10:00</p>
                </div>
            </div>
            <div className={styles.content}>
                <p>comment</p>
            </div>
        </div>
    )
}