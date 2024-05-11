import ImageCard from '../card/ImageCard';
import PostCard from '../card/PostCard';
import styles from './Like.module.css';
import MyPageSlider from '../slider/MyPageSlider';

export default function Like() {
    return (
        <div>
          <p className={styles.title}>
            좋아요
          </p>

          <div>
            <p className={styles.contentTitle}>
              게시글
            </p>
            
          </div>
          <div>
            <p className={styles.contentTitle}>
              축제
            </p>
            
          </div>
          <div>
            <p className={styles.contentTitle}>
              명소
            </p>
          </div>
          <div>
            <p className={styles.contentTitle}>
              쇼핑
            </p>
          </div>
          <div>
            <p className={styles.contentTitle}>
              즐길거리
            </p>
          </div>
        </div>
    );
};
