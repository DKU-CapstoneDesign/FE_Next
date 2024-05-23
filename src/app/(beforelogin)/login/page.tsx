"use client";

import { useForm, Controller, SubmitHandler } from "react-hook-form"; 
import styles from './page.module.css';
import logo from '../../../../public/svg/logo.svg';
import Image from 'next/image';
import Input from '../_component/Input/Input';
import Submit from '../_component/Submit/Submit';
import { MovePage } from "../_component/MovePage/MovePage";

type Inputs = {
    email: string;
    password: string;
}

export default function Login() {
    const { control, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {};

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller 
                        name="email"
                        control={control}
                        render={({ field }) => {
                            const { value, onChange } = field;
                            return (
                                <Input
                                    type="email"
                                    label="Email"
                                    value={value}
                                    onChange={onChange}
                                />
                            )
                        }}
                    />
                    <Controller 
                        name="password"
                        control={control}
                        render={({ field }) => {
                            const { value, onChange } = field;
                            return (
                                <Input
                                    type="password"
                                    label="Password"
                                    value={value}
                                    onChange={onChange}
                                />
                            )
                        }}
                    />
                    <Submit />
                </form>
            <div className={styles.checkboxForm}>
                <input className={styles.checkbox} type="checkbox" />
                <p>remember me</p>
            </div>
            <MovePage href="register" />
        </div>
    )
}