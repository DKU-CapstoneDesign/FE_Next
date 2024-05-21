import styles from './InputForm.module.css';

type InputFormProps = {
    label: string;
    inputType: string;
    isInput: boolean;
    selectComponent: JSX.Element | '';
};

export default function InputForm({ label, inputType, isInput, selectComponent}: InputFormProps) {
    return (
        <div className={styles.inputForm}>
            <label className={styles.label}>{label}</label>
            {!isInput && 
                <input 
                    type={inputType} 
                    className={styles.input}
                />
            }
            {isInput && (
                <div className={styles.input}>
                    {selectComponent}
                </div>
            )
            }
        </div>
    )
}