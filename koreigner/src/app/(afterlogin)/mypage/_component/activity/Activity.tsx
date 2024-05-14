import styles from './Activity.module.css';
import MyPageSlider from '../slider/MyPageSlider';
import Card from '../card/Card';

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
            <MyPageSlider
              cardComponent={
                <Card 
                  type="post" 
                  title="title"
                  content="content"
                />
              }
            />
          </div>
          <div>
            <p className={styles.contentTitle}>
              내가 작성한 댓글
            </p>
            <MyPageSlider
              cardComponent={
                <Card 
                  type="post" 
                  title="title"
                  content="content"
                />
              }
            />
          </div>
        </div>
    );
};