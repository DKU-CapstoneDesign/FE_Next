import styles from './HotPostList.module.css'

export default function HotPostList() {
    return (
        <div>
            <p className={styles.title}>Hot 게시글</p>
            <div className={styles.line} />
        </div>
    )
}