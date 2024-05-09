'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../../../public/svg/logo.svg';
import styles from './NavMenu.module.css';
import { FaBars } from "react-icons/fa6";
import MobileNavMenu from "./MobileNavMenu";

export default function NavMenu() {
    const [isMenuVisible, setIsMenuVisibility] = useState<boolean>(false);
    
    function handleClick(): void {
        setIsMenuVisibility(!isMenuVisible);
    }

    return(
        <div className={styles.navMenuBody}>
            <div className={styles.menuContent}>
                <Link className={styles.logo} href="/home">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={250}
                        height={100}
                    />
                </Link>
                <div className={styles.menuList1}>
                    <Link href="/board" className={styles.menuLink}>게시판</Link>
                    <Link href="/discover" className={styles.menuLink}>살펴보기</Link>
                    <Link href="/support" className={styles.menuLink}>팀 소개</Link>    
                </div>
                <div className={styles.menuList2}>
                    <Link href="/chat" className={styles.menuLink}>채팅</Link>
                    <Link href="/mypage" className={styles.menuLink}>마이페이지</Link>
                </div>
                {!isMenuVisible && 
                    <FaBars 
                        onClick={() => handleClick()}
                        className={styles.hamburger}  
                    />
                }
                {isMenuVisible && 
                    <MobileNavMenu 
                        setIsMenuVisibility={setIsMenuVisibility}
                        handleClick={handleClick}
                    />
                }
            </div>
            <div className={styles.line} />
        </div>
    )
}