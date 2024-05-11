import styles from './TodayWeatherBox.module.css';

export default function TodayWeatherBox() {
    return(
        <div className={styles.weatherBox}>
            <p>오늘의 날씨</p>
            <p>몇도</p>
            <p>흐림</p>
            <p>몇시</p>
            <p>무슨동</p>
        </div>
    )
}