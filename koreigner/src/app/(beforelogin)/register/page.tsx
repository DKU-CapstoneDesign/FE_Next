"use client";
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/svg/logo.svg';
import CountrySelect from './_component/CountrySelectComponent';
import DateSelect from './_component/DateSelectComponent';
import InputForm from '../_component/InputForm/InputForm';
import {DashedButton, ArrowLink} from '../_component/AuthStylingComponents/AuthStylingComponents';

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
            <p className={styles.title}>
                REGISTER
            </p>
            <InputForm label='Email' inputType='email' isInput={false} selectComponent='' />
            <InputForm label='Password' inputType='password' isInput={false} selectComponent='' />
            <InputForm label='Check Password' inputType='password' isInput={false} selectComponent='' />
            <InputForm label='Nickname' inputType='text' isInput={false} selectComponent='' />
            <InputForm label='Birth' inputType='' isInput={true} selectComponent={<DateSelect />} />
            <InputForm label='Country' inputType='' isInput={true} selectComponent={<CountrySelect />} />
            <DashedButton />
            <ArrowLink hrefLink='/login' pageName='Login' />
        </div>
    )
}