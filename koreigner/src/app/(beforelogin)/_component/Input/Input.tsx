import style from './Input.module.css';

type InputProps = {
    type: string;
    value: string;
    label: string;
    onChange: (...event: any[]) => void;
};

export default function Input({ type, value, label, onChange }: InputProps) {
    return (
        <div className={style.inputForm}>
            <label className={style.label}>
                {label}
            </label>
            <input 
                className={style.input}
                type={type} 
                value={value} 
                onChange={onChange}
            />
        </div>
    )
}