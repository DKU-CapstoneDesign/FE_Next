import styles from './ChatContentItem.module.css';
import { IoPersonCircleOutline } from "react-icons/io5";

export default function ChatContentItem() {
    return (
        <div className={styles.content}>
            <IoPersonCircleOutline className={styles.profileImage}/>
            <div className={styles.chatContent}>
                <p className={styles.nickname}>
                    nickname
                </p>
                <p className={styles.message}>
                    message
                </p>
            </div>
        </div>
    );
};
