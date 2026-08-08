import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonProps =
    ButtonHTMLAttributes<HTMLButtonElement> & {
        children: React.ReactNode;
        variant?: "primary" | "secondary";
    };

function Button({
    children,
    variant = "primary",
    type = "button",
    className = "",
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            className={`${styles.button} ${styles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;