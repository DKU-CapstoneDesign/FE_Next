import styles from './Profile.module.css';
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Profile() {
    return (
        <div className={styles.myProfile}>
          <p className={styles.title}>
            프로필 수정
          </p>
          <div>
            <p className={styles.contentTitle}>
              프로필 사진
            </p>
            <IoPersonCircleOutline className={styles.profileImage} />
            <div className={styles.buttonAria}>
              <button className={styles.button}>
                사진 변경
              </button>
              <button className={styles.button}>
                사진 삭제
              </button>
            </div>
          </div>
          <br /><br />
          <div>
            <p className={styles.contentTitle}>
              별명
            </p>
            <div className={styles.inputBox}>
              <input 
                className={styles.input}
                placeholder='nickname' 
              />
            </div>
          </div>
          <br />
          <br />
          <div className={styles.lastButtonAria}>
            <button className={styles.lastButton}>
              적용
            </button>
            <button className={styles.lastButton}>
              취소
            </button>
          </div>
        </div>
    );
};
