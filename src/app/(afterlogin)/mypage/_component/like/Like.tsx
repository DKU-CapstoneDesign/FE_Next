import styles from './Like.module.css';
import MyPageSlider from '../slider/MyPageSlider';
import Card from '../card/Card';

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
            <MyPageSlider 
              cardComponent={
                <Card 
                  type='image'
                  title='title'
                  src='https://a.cdn-hotels.com/gdcs/production155/d1970/076d9188-3e19-423e-aa30-853f14ba9262.jpg' 
                />
              }
            />
          </div>
          <div>
            <p className={styles.contentTitle}>
              축제
            </p>
            <MyPageSlider 
              cardComponent={
                <Card 
                  type='image'
                  title='title'
                  src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/23/f0/0b/jeju-yangtte-farm-pension.jpg?w=700&h=-1&s=1' 
                />
              }
            />
          </div>
          <div>
            <p className={styles.contentTitle}>
              명소
            </p>
            <MyPageSlider 
              cardComponent={
                <Card 
                  type='image'
                  title='title'
                  src='https://tong.visitkorea.or.kr/cms/resource/38/1883538_image2_1.jpg' 
                />
              }
            />
          </div>
          <div>
            <p className={styles.contentTitle}>
              쇼핑
            </p>
            <MyPageSlider 
              cardComponent={
                <Card 
                  type='image'
                  title='title'
                  src='https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/729e9473-9590-4923-aec0-e72a3fe7d18d.jpg' 
                />
              }
            />
          </div>
          <div>
            <p className={styles.contentTitle}>
              즐길거리
            </p>
            <MyPageSlider 
              cardComponent={
                <Card 
                  type='image'
                  title='title'
                  src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ae/f9/65/caption.jpg?w=1200&h=1200&s=1' 
                />
              }
            />
          </div>
        </div>
    );
};
