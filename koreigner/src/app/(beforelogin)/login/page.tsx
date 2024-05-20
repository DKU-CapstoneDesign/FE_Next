import styles from './page.module.css';
import logo from '../../../../public/svg/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
    return (
        <div className={styles.body}>
            <Image
                className={styles.logo}
                src={logo}
                alt="Logo"
                width={200}
                height={800}
            />
            <p className={styles.title}>LOGIN</p>
            <div className={styles.inputForm}>
                <label className={styles.label}>Email</label>
                <input 
                    type='email' 
                    className={styles.input}
                />
            </div>
            <div className={styles.inputForm}>
                <label className={styles.label}>Password</label>
                <input 
                    type='password' 
                    className={styles.input}
                />
            </div>
            <div className={styles.checkboxForm}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                />
                <p>remember me</p>
            </div>
            <button className={styles.submit}>
                submit
            </button>
            <Link href='/register'>
                <p className={styles.goTORegister}>
                    {'--->'} go to register
                </p>
            </Link>
        </div>
    )
}