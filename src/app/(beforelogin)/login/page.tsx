"use client";

import { useForm, Controller, SubmitHandler } from "react-hook-form"; 
import * as z from 'zod';
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';
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
    const { 
        control, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onChange',
    });
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            const result = response.data;
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

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
                                    error={errors.email?.message}
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
                                    error={errors.password?.message}
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