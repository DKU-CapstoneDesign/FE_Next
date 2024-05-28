"use client";

import { useState, useMemo } from 'react';
import * as z from "zod";
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller, SubmitHandler } from "react-hook-form"; 
import countryList from 'react-select-country-list';
import styles from './page.module.css';
import Image from 'next/image';
import logo from '../../../../public/svg/logo.svg';
import axios from 'axios';
import Input from '../_component/Input/Input';
import BirthDateInput from './_component/BirthDateInput/BirthDateInput';
import CountrySelectInput from './_component/CountrySelectInput/CountrySelectInput';
import Submit from './../_component/Submit/Submit';
import { MovePage } from '../_component/MovePage/MovePage';

type Inputs = {
    email: string;
    password: string;
    checkPassword: string;
    nickname: string;
    birth: Date | null;
    country: { label: string; value: string } | null;
}

export default function Register() {
    const defaultBirthDate = new Date('2000-01-01');

    const { 
        control, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: '',
            password: '',
            checkPassword: '',
            nickname: '',
            birth: defaultBirthDate,
            country: null,
        },
        mode: 'onChange',
    });

    const [startDate, setStartDate] = useState<Inputs['birth']>(defaultBirthDate);
    const [country, setCountry] = useState<Inputs['country']>(null);
    const countryLists = useMemo(() => countryList().getData(), []);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('nickname', data.nickname);
        formData.append('country', data.country ? data.country.label : '');
        formData.append('birthDate', data.birth ? data.birth.toISOString().split('T')[0] : '');
        
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`, formData, {
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
            <p className={styles.title}>
                REGISTER
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller 
                    name="email"
                    control={control}
                    render={({ field }) => {
                        const { value, onChange } = field;
                        return (
                            <>
                                <Input
                                    type="email"
                                    label="Email"
                                    value={value}
                                    error={errors.email?.message}
                                    onChange={onChange} 
                                />
                            </>
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
                <Controller 
                    name="checkPassword"
                    control={control}
                    render={({ field }) => {
                        const { value, onChange } = field;
                        return (
                            <Input
                                type="password"
                                label="Check Password"
                                value={value}
                                error={errors.checkPassword?.message}
                                onChange={onChange}
                            />
                        )
                    }}
                />
                <Controller 
                    name="nickname"
                    control={control}
                    render={({ field }) => {
                        const { value, onChange } = field;
                        return (
                            <Input
                                type="text"
                                label="Nickname"
                                value={value}
                                error={errors.nickname?.message}
                                onChange={onChange}
                            />
                        )
                    }}
                />
                <Controller
                    name="birth"
                    control={control}
                    defaultValue={startDate}
                    render={({ field }) => {
                        const { value, onChange } = field;
                        return (
                            <BirthDateInput 
                                selected={value}
                                error={errors.birth?.message}
                                onChange={(date) => {
                                    onChange(date);
                                    setStartDate(date);
                                }}
                            />
                        );
                    }}
                />
                <Controller
                    name="country"
                    control={control}
                    defaultValue={country}
                    render={({ field }) => {
                        const { value, onChange } = field;
                        return (
                            <CountrySelectInput 
                                selected={value}
                                options={countryLists}
                                error={errors.country?.message}
                                onChange={(value) => {
                                    onChange(value)
                                    setCountry(value)
                                }}
                            />
                        )
                    }}
                />
                <Submit />
            </form>
            <MovePage href="login" />
        </div>
    )
}