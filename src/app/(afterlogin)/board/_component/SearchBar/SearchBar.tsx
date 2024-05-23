import styles from './SearchBar.module.css';
import { IoSearch } from "react-icons/io5";


export default function SearchBar() {
    return (
        <div className={styles.body}>
            <input 
                className={styles.input} 
            />
            <button>
                <IoSearch className={styles.search} />
            </button>
        </div>
    )
}