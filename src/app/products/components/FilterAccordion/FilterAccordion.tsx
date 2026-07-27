"use client"
import { useState } from "react"
import styles from "./FilterAccordion.module.scss"
import { IoChevronDown } from "react-icons/io5"

type FilterAccordionProps = {
    title: string
    children: React.ReactNode
    defaultOpen?: boolean
}

function FilterAccordion({
    title,
    children,
    defaultOpen = false
}: FilterAccordionProps) {

    const [open, setOpen] = useState(defaultOpen)

    return (
        <div className={styles.accordion}>
            <button
                type="button"
                className={styles.header}
                onClick={() => setOpen(!open)}
            >
                <span>{title}</span>

                <IoChevronDown
                    className={`${styles.icon} ${open ? styles.rotate : ""
                        }`}
                />
            </button>
            {open && (
                <div className={styles.content}>
                    {children}
                </div>
            )}
        </div>
    )
}

export default FilterAccordion