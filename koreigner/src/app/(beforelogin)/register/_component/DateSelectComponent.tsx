"use client";

import { useState } from 'react';
import DatePicker from "react-datepicker";  
import style from './component.module.css';
import "react-datepicker/dist/react-datepicker.css";  

export default function DateSelectComponent() {
    const [startDate, setStartDate] = useState<Date | null>(new Date());  
    
    const ymd: string = !startDate 
        ? '' 
        : startDate.getFullYear() +'-'
        + (startDate.getMonth() + 1).toString().padStart(2, '0')
        + '-'
        + startDate.getDate().toString().padStart(2, '0');
    
    return (
        <DatePicker 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            className={style.input}
        />  
    );
}
