'use client';
import { useState } from "react";
import NavMenu from "../_component/NavMenu/NavMenu"
import Activity from "./_component/activity/Activity";
import Like from "./_component/like/Like";
import Profile from "./_component/profile/Profile";
import styles from "./page.module.css";

export default function myPage() {
  type ContentType = 'Profile' | 'Like' | 'Activity';
  
  const [content, setContent] = useState<ContentType>('Profile');

  function handleClick( pageContent: ContentType) {
    setContent(pageContent);
  }

  return (
    <div>
      <NavMenu />
      <div className={styles.line} />
      <div className={styles.myPageContentMenu}>
        <div>
          <button 
            onClick={() => handleClick('Profile')}
            className={styles.contentMenuItem}
          >
            {content === 'Profile' ? 
              <p className={styles.pickedMenu}>
                내 프로필
              </p> 
              : 
              '내 프로필'
            }
          </button> 
        </div>
        <div>
          <button 
            onClick={() => handleClick('Activity')}
            className={styles.contentMenuItem}
          >
            {content === 'Activity' ? 
              <p className={styles.pickedMenu}>
                활동
              </p> 
              : 
              '활동'
            }
          </button> 
        </div>
        <div>
          <button 
            onClick={() => handleClick('Like')}
            className={styles.contentMenuItem}
          >
            {content === 'Like' ? 
              <p className={styles.pickedMenu}>
                좋아요
              </p> 
              : 
              '좋아요'
            }
          </button>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.mypageContent}>
        {content === 'Profile' && <Profile />}
        {content === 'Like' && <Like />}
        {content === 'Activity' && <Activity />}
      </div>
    </div>
  );
}