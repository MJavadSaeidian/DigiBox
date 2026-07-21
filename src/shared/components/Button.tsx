import styles from "./Button.module.scss"

type ButtonProps = {
    children: React.ReactNode
    variant?: "primary" | "secondary"
    type?: "button" | "submit" | "reset"
    onClick?: () => void
}
function Button({
    children,
    variant = "primary",
    type = "button",
    onClick,
}: ButtonProps) {
    return (
        <button
        type={type}
        onClick={onClick}
        className={`${styles.button} ${styles[variant]}`} 
        >
            {children}
        </button>
    )
}

export default Button