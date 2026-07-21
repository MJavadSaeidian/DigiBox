import styles from "./SectionTitle.module.scss"

type SectionTitleProps = {
    title: string
    subtitle?: string
}
function SectionTitle({
    title,
    subtitle
}: SectionTitleProps) {

    return (
        <div className={styles.sectionTitle}>
            <h2>{title}</h2>
            {subtitle && (
                <p>{subtitle}</p>
            )}
        </div>
    )
}

export default SectionTitle