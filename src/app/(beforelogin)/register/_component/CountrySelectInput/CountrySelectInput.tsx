"use client";

import style from './CountrySelectInput.module.css';
import Select from 'react-select';

type InputProps = {
    selected: { label: string; value: string } | null;
    options: { label: string; value: string }[];
    error: string | undefined;
    onChange: (country: { label: string; value: string } | null) => void;
}

export default function CountrySelectInput({ selected, options, error, onChange }: InputProps) {
    return (
        <div className={style.inputForm}>
            <label className={style.label}>
                Country
            </label>
            <Select 
                className={style.countryInput}
                options={options} 
                value={selected} 
                onChange={onChange} 
                placeholder="country"
            />
            <p className={style.error}>
                {error}
            </p>
        </div>
    )
}
