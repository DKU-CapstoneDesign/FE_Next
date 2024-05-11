import NavMenu from "../_component/NavMenu/NavMenu";
import Image from "next/image";
import styles from './page.module.css';

export default function Support() {
    return(
        <div>
            <NavMenu isBarVisible={true} />
            <div className={styles.body}>
                <Image 
                    src="/img/hamsters.jpg"
                    alt="image"
                    width={2000}
                    height={1000}
                />
                <div className={styles.content}>
                    <p className={styles.title}>
                        Koreigner Vision
                    </p>
                    <p>내용</p>
                </div>
                <div className={styles.content}>
                    <p className={styles.title}>
                        About
                    </p>
                    <p>내용</p>
                </div>
            </div>
            
        </div>
    )
}