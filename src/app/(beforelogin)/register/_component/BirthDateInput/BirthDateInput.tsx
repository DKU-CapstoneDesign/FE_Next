"use client";

import style from './BirthDateInput.module.css';
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  

type InputProps = {
    selected: Date | null;
    onChange: (date: Date | null) => void;
}

export default function BirthDateInput({ selected, onChange}: InputProps) { 
    return (
        <div className={style.inputForm}>
            <label className={style.label}>
                Birth
            </label>
            <DatePicker 
                className={style.input}
                selected={selected} 
                onChange={onChange} 
            />
        </div>
    )
}

