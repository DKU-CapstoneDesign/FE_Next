import styles from './Card.module.css';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { useState } from 'react';

interface CardProps {
  type: 'post' | 'image';
  title: string;
  content?: string;
  src?: string;
}

export default function Card(props: CardProps) {
  const [clickHeart, setClickHeart] = useState<boolean>(true);

  function handleClick() {
    setClickHeart(false);
  }

  return (
    <div 
      className={styles.card}
      style={props.type === 'image' ? { backgroundImage: `url(${props.src})`, backgroundSize: 'cover' } : undefined}
    >
      {clickHeart && 
        <IoIosHeart 
          className={styles.heart} 
          onClick={() => handleClick()}
        />
      }
      {props.type == "post" && (
        <>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.content}>{props.content}</p>
        </>
      )}
      {props.type == "image" && (
        <>
          <p className={styles.title}>{props.title}</p>
        </>
      )}
    </div>
  );
};
