'use client';

import styles from './CategoryBar.module.css';
import { useState } from 'react';

export default function CategoryBar() {
    type btnType = '모든' | 'Hot' | '자유' | '여행' | '도움';
    const [clickedBtn, setClickedBtn] = useState<btnType>('모든');

    function handleClick(item: btnType) {
        setClickedBtn(item);
    }
    
    return (
        <div className={styles.body}>
            <div>
                <button 
                    className={styles.btn}
                    onClick={() => handleClick('모든')}
                >
                    모든
                </button>
                {clickedBtn === '모든' && <div className={styles.line} />}
            </div>
            <div>
                <button 
                    className={styles.btn}
                    onClick={() => handleClick('Hot')}
                >
                    Hot!
                </button>
                {clickedBtn === 'Hot' && <div className={styles.line} />}
            </div>
            <div>
                <button 
                    className={styles.btn}
                    onClick={() => handleClick('자유')}
                >
                    자유
                </button>
                {clickedBtn === '자유' && <div className={styles.line} />}
            </div>
            <div>
                <button 
                    className={styles.btn}
                    onClick={() => handleClick('여행')}
                >
                    여행
                </button>
                {clickedBtn === '여행' && <div className={styles.line} />}
            </div>
            <div>
                <button 
                    className={styles.btn}
                    onClick={() => handleClick('도움')}
                >
                    도움
                </button>
                {clickedBtn === '도움' && <div className={styles.line} />}
            </div>
        </div>
    )
}