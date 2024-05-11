import NavMenu from "../_component/NavMenu/NavMenu";
import styles from './page.module.css';
import { TbHttpConnect } from "react-icons/tb";
import ChatInput from "../_component/ChatInput/ChatInput";

export default function Chatbot() {
    return (
        <div>
          <NavMenu />
          <div className={styles.line} />
          <div className={styles.chatbotProfile}>
            <TbHttpConnect className={styles.profileImage} />
            <p className={styles.profileNickname}>
              코리너 챗봇 코넥이
            </p>
          </div>
          <div className={styles.line} />
          <div className={styles.chatbotInputAria}>
            <ChatInput />
          </div>
        </div>
      );
}
