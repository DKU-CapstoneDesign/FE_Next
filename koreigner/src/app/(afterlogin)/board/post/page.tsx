import styles from './page.module.css';
import NavMenu from "../../_component/NavMenu/NavMenu"
import Comment from '../_component/Comment/Comment';
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";

export default function PostPage() {
    return (
        <>
            <NavMenu isBarVisible={false} />
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.postInfo}>
                        <p>category</p>
                        <p>|</p>
                        <p>title</p>
                    </div>
                    <div className={styles.postDetail}>
                        <p>view 0</p>
                        <p>comments 0</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.userProfile}>
                        <IoPersonCircleOutline className={styles.img} />
                        <p className={styles.nickname}>nickname</p>
                    </div>
                    <div className={styles.timeInfo}>
                        <p>2024/05/15</p>
                        <p>00:00</p>
                    </div>
                </div>
                <div className={styles.content}>
                    <p>content</p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.commentHeader}>
                        <FaRegCommentDots className={styles.commentIcon} />
                        <p>comments</p>
                        <p className={styles.commentCount}>0</p>
                    </div>
                    <div>
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </div>
            </div>
        </>
    )
}