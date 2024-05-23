import styles from './Footer.module.css';

export default function Footer() {
    return(
        <>
            <div className={styles.dottedLine} />
            <div className={styles.body}>
                <p className={styles.text}><b>팀 코리너</b></p>
                <br />
                <p className={styles.text}>단국대학교 소프트웨어학과</p>
                <p className={styles.text}>조성범 정규원 주세연 천은유 허연재</p>
                <p className={styles.text}> Copyright © 2024 Team Koreigner. All rights reserved. </p>
            </div>
        </>
    )
}