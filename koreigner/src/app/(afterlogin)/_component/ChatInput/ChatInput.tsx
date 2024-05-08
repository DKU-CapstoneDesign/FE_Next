import styles from './ChatInput.module.css';

export default function ChatInput() {
    return (
        <div className={styles.chatInputAria}>
            <input 
                className={styles.chatInput} 
                type="text" 
                placeholder="내용을 입력하세요."
            />
            <button
                className={styles.sendButton}
            >
                전송
            </button>
        </div>
      );
};
