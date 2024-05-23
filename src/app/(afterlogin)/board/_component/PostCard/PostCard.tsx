import styles from './PostCard.module.css';
import { IoPersonCircleOutline } from "react-icons/io5";

export default function PostCard() {
    return(
        <div className={styles.body}>
            <div className={styles.profile}>
                <IoPersonCircleOutline className={styles.image} />
                <div>
                    <p className={styles.nickname}>nickname</p>
                    <p className={styles.time}>00:00</p>
                </div>
            </div>
            <div className={styles.content}>
                <p>내용</p>
            </div>
        </div>
    )
}