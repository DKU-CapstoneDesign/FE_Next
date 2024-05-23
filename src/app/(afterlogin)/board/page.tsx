import NavMenu from "../_component/NavMenu/NavMenu"
import CategoryBar from "./_component/CategoryBar/CategoryBar";
import PostCard from "./_component/PostCard/PostCard";
import styles from './page.module.css';
import SearchBar from "./_component/SearchBar/SearchBar";

export default function Board() {
    return (
        <>
            <NavMenu isBarVisible={false} />
            <div className={styles.body}>
                <div>
                    <p className={styles.title}>게시판</p>
                    <p>koreigner에서 이야기합시다!</p>
                </div>
                <br />
                <CategoryBar />
                <SearchBar />
                <div className={styles.content}>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </div>
        </>
    )
}