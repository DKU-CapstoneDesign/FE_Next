import NavMenu from "../_component/NavMenu/NavMenu";
import styles from './page.module.css';
import ChatContentItem from "./_component/ChatContentItem";
import { IoPersonCircleOutline } from "react-icons/io5";
import ChatInput from "../_component/ChatInput/ChatInput";

export default function Chat() {
    return(
        <div>
            <NavMenu />
            <div className={styles.line} />
            <div className={styles.chatPageContent}>
                <div className={styles.chattingFriendsList}>
                    <ChatContentItem />
                    <ChatContentItem />
                    <ChatContentItem />
                    <ChatContentItem />
                    <ChatContentItem />
                </div>
                <div className={styles.verticalLine} />
                <div className={styles.chattingPage}>
                    <div className={styles.chattingPartnerProfileItem}>
                        <IoPersonCircleOutline className={styles.chattingPartnerImage} />
                        <p className={styles.chattingPartnerNickname}> nick name</p>
                    </div>
                    <div className={styles.line} />
                    <div className={styles.chattingAria}>
                        {/*채팅하는 내용*/}
                    </div>
                    <div className={styles.chattingInputAria}>
                        <ChatInput />
                    </div>
                </div>
            </div>
        </div>
    )
}