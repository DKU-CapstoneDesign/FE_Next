import styles from './Activity.module.css';

export default function Activity() {
    return (
        <div>
          <p className={styles.title}>
            활동
          </p>
          <div>
            <p className={styles.contentTitle}>
              내가 작성한 게시글
            </p>
          </div>
          <div>
            <p className={styles.contentTitle}>
              내가 작성한 댓글
            </p>
          </div>
        </div>
    );
};