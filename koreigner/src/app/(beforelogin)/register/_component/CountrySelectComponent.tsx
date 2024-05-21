import React, { useState, useMemo } from 'react';
import countryList from 'react-select-country-list'; // 타입 임포트
import Select from 'react-select';

export default function CountrySelectComponent() {
    const [value, setValue] = useState<{ label: string; value: string } | null>(null); 

    const options = useMemo(() => countryList().getData(), []);
    
    const changeHandler = (selectedOption: { label: string; value: string } | null) => { 
        setValue(selectedOption);
    };

    const countryName: string = value? value.label : '';
    
    return (
        <Select 
            options={options} 
            value={value} 
            onChange={changeHandler} 
            placeholder="country"
        />
    );
}
