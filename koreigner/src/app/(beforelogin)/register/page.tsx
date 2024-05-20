import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/svg/logo.svg';

export default function Register() {
    return (
        <div className={styles.body}>
            <Image
                className={styles.logo}
                src={logo}
                alt="Logo"
                width={200}
                height={800}
            />
            <p className={styles.title}>REGISTER</p>
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
            <div className={styles.inputForm}>
                <label className={styles.label}>Check Password</label>
                <input 
                    type='password' 
                    className={styles.input}
                />
            </div>
            <div className={styles.inputForm}>
                <label className={styles.label}>Nickname</label>
                <input 
                    type='text' 
                    className={styles.input}
                />
            </div>
            <div className={styles.selectForm}>
                <label className={styles.label}>Birth</label>
                <div>
                    <select id='birth-year'>
                        <option disabled selected>year</option>
                    </select>
                    <select id='birth-month'>
                        <option disabled selected>month</option>
                    </select>
                    <select id='birth-day'>
                        <option disabled selected>day</option>
                    </select>
                </div>
            </div>
            <div className={styles.selectForm}>
                <label className={styles.label}>Country</label>
                <div> 
                    <select id='country'>
                        <option disabled selected>country</option>
                    </select>
                </div>
            </div>
            <button className={styles.submit}>
                submit
            </button>
            <Link href='/login'>
                <p className={styles.goTORegister}>
                    {'--->'} go to Login
                </p>
            </Link>
        </div>
    )
}