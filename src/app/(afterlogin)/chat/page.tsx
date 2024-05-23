import NavMenu from "../_component/NavMenu/NavMenu";
import styles from './page.module.css';
import ChatContentItem from "./_component/ChatContentItem";
import { IoPersonCircleOutline } from "react-icons/io5";
import ChatInput from "../_component/ChatInput/ChatInput";

export default function Chat() {
    return(
        <div>
            <NavMenu isBarVisible={false} />
            <div className={styles.body}>
                <div className={styles.chattingList}>
                    <ChatContentItem />
                    <ChatContentItem />
                    <ChatContentItem />
                    <ChatContentItem />
                    <ChatContentItem />
                    <ChatContentItem />
                    <ChatContentItem />
                    <ChatContentItem />
                    <ChatContentItem />
                </div>
                <div className={styles.chatting}>
                    <div className={styles.chatProfileBox}>
                        <div className={styles.chatProfile}>
                            <IoPersonCircleOutline className={styles.chatProfileImage} />
                            <p className={styles.chatNickname}>nick name</p>
                        </div>
                        <div className={styles.line} />
                    </div>
                    <div className={styles.chatWindow}>
                        {/*채팅하는 내용*/}
                    </div>
                    <div className={styles.chatInput}>
                        <ChatInput />
                    </div>
                </div>
            </div>
        </div>
    )
}