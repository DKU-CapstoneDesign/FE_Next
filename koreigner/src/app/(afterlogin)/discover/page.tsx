import NavMenu from "../_component/NavMenu/NavMenu";
import styles from './page.module.css';
import ImageSlider from "../_component/ImageSlider/ImageSlider";
import ContentSlider from "../_component/ContentSlider/ContentSlider";

export default function Discover() {
    return (
        <>
            <NavMenu isBarVisible />
            <div className={styles.discoverBody}>
                <div>
                    <p className={styles.introText}>
                        어디로 가시나요?
                    </p>
                    <div className={styles.search}>
                        <input
                            className={styles.inputBox}
                            placeholder="서울" 
                            type="text"
                        />
                        <button className={styles.sendButton}>
                            검색
                        </button>
                    </div>
                </div>
                <ImageSlider />
                <ContentSlider title="명소" />
                <ContentSlider title="축제" />
                <ContentSlider title="쇼핑" />
                <ContentSlider title="즐길거리" />
            </div>
        </>
    )
}