import styles from './TodayLuckBox.module.css'

export default function TodayLuckBox() {
    return (
        <div className={styles.luckBox}>
            <p>별자리</p>
            <p>오늘의 운세 내용</p>
        </div>
    );
}