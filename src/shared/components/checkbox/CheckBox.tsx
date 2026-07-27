"use client";

import styles from "./CheckBox.module.scss";

type CheckboxProps = {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
};

function CheckBox({
    label,
    checked,
    onChange,
}: CheckboxProps) {
    return (
        <label className={styles.checkbox}>

            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />

            <span className={styles.checkmark}></span>

            <span className={styles.label}>
                {label}
            </span>

        </label>
    );
}

export default CheckBox;