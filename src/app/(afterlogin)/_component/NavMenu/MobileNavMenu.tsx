import styles from './MobileNavMenu.module.css';
import Link from 'next/link';
import { HiOutlineXMark } from "react-icons/hi2";
import { useWindowSize } from '@/app/_hooks/useWindowSize';
import { useEffect } from 'react';

interface MobileNavMenuProps {
    setIsMenuVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    handleClick: () => void;
}

export default function MobileNavMenu({ setIsMenuVisibility, handleClick }: MobileNavMenuProps) {
    const { width } = useWindowSize();
    const windowWidth = width > 992;

    useEffect(() => {
        if (windowWidth) {
            setIsMenuVisibility(false);
        }
    }, [windowWidth]);
    
    return(
        <div className={styles.mobileNavMenuBar}>
            <HiOutlineXMark 
                onClick={() => handleClick()}
                className={styles.xMark} 
            />
            <div className={styles.menuButtonAria}>
                <Link href="/board" className={styles.menuButtonItem}>게시판</Link>
                <Link href="/discover" className={styles.menuButtonItem}>살펴보기</Link>
                <Link href="/support" className={styles.menuButtonItem}>팀 소개</Link>
                <Link href="/chat" className={styles.menuButtonItem}>채팅</Link>
                <Link href="/mypage" className={styles.menuButtonItem}>마이페이지</Link>
            </div>
        </div>
    )
}