import Link from "next/link";
import Image from "next/image";
import logo from '../../../../../public/svg/logo.svg';
import styles from './NavMenu.module.css';
import { FaBars } from "react-icons/fa6";

export default function NavMenu() {

    function handleClick() {
        console.log('a');
    }

    return(
        <div className={styles.navMenuBody}>
            <Link href="/home">
                <Image
                    src={logo}
                    alt="Logo"
                    width={300}
                    height={150}
                />
            </Link>
            <div className={styles.menuList1}>
                <Link href="/board" className={styles.menuLink}>게시판</Link>
                <Link href="/discover" className={styles.menuLink}>살펴보기</Link>
                <Link href="/support" className={styles.menuLink}>문의사항</Link>    
            </div>
            <div className={styles.menuList2}>
                <Link href="/chat" className={styles.menuLink}>채팅</Link>
                <Link href="/mypage" className={styles.menuLink}>마이페이지</Link>
            </div>
            <FaBars className={styles.hamburger}  />
        </div>
    )
}