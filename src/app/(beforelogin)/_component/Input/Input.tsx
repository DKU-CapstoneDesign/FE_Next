import style from './Input.module.css';

type InputProps = {
    type: string;
    value: string;
    label: string;
    error: string | undefined;
    onChange: (...event: any[]) => void;
};

export default function Input({ type, value, label, error, onChange }: InputProps) {
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
            <p className={style.error}>
                {error}
            </p>
        </div>
    )
}