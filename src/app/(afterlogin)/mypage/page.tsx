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
      <NavMenu isBarVisible={false} />
      <div className={styles.line} />
      <div className={styles.myPageContentMenu}>
        {['Profile', 'Activity', 'Like'].map((item) => (
          <div key={item}>
            <button 
              onClick={() => handleClick(item as ContentType)}
              className={styles.contentMenuItem}
            >
              {content === item ? 
                <p className={styles.pickedMenu}>
                  {item === 'Profile' ? '내 프로필' : item === 'Activity' ? '활동' : '좋아요'}
                </p> 
                : 
                item === 'Profile' ? '내 프로필' : item === 'Activity' ? '활동' : '좋아요'
              }
            </button> 
          </div>
        ))}
      </div>
      <div className={styles.line} />
      <div className={styles.content}>
        {content === 'Profile' && <Profile />}
        {content === 'Like' && <Like />}
        {content === 'Activity' && <Activity />}
      </div>
    </div>
  );
}