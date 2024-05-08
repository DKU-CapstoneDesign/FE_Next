import { IoChatbubbleOutline } from "react-icons/io5";
import styles from './ChatbotButton.module.css'
import Link from "next/link";

export default function ChatbotButton() {
    return (
        <div className={styles.chatBotAria}>
            <Link href="/chatbot">
                <IoChatbubbleOutline className={styles.chatBot} />
            </Link>
        </div>
      );
}
