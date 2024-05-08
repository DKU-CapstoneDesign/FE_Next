import NavMenu from "../_component/NavMenu/NavMenu";
import HomeSlider from "./_component/HomeSlider/HomeSlider";
import styles from './page.module.css'
import TodayWeatherBox from "./_component/TodayWeatherBox/TodayWeatherBox";
import TodayLuck from "./_component/TodayLuckBox/TodayLuckBox";
import HotPostList from "./_component/HotPostList/HotPostList";
import AdsBox from "../_component/AdsBox/AdsBox";
import FestivalAria from "./_component/FestivalContent/FestivalAria";
import ChatbotButton from "../_component/ChatbotButton/ChatbotButton";

export default function Home() {
  return (
    <div className={styles.homeBody}>
      <NavMenu />
      <div className={styles.homeContent}>
        <div>
          <HomeSlider />
          <div className={styles.todayBox}>
            <TodayWeatherBox />
            <TodayLuck />
          </div>
        </div>
        <div className={styles.ContentAria}>
          <HotPostList />
          <AdsBox />
        </div>
        <FestivalAria />
      </div>
      <ChatbotButton />
    </div>
  );
}
