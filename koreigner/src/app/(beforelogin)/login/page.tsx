import styles from './page.module.css';
import logo from '../../../../public/svg/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import InputForm from '../_component/InputForm/InputForm';
import { DashedButton, ArrowLink } from '../_component/AuthStylingComponents/AuthStylingComponents';

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
            <InputForm label='Email' inputType='email' isInput={false} selectComponent='' />
            <InputForm label='Password' inputType='password' isInput={false} selectComponent='' />
            <div className={styles.checkboxForm}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                />
                <p>remember me</p>
            </div>
            <DashedButton />
            <ArrowLink hrefLink='/register' pageName='register' />
        </div>
    )
}