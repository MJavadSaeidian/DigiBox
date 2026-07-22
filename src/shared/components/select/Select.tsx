"use client";

import { useEffect, useRef, useState } from "react"
import styles from "./Select.module.scss"
import { IoChevronDown } from "react-icons/io5"

type SelectProps = {
  options: string[]
  value: string
  onChange: (value: string) => void
}

function Select({
  options,
  value,
  onChange
}: SelectProps) {

  const [open, setOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }

    }
    document.addEventListener("mousedown", handleClickOutside)
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      )
  }, [])

  return (
    <div
      className={styles.select}
      ref={selectRef}
    >

      <button
        className={styles.trigger}
        onClick={() => setOpen(!open)}
        type="button"
      >

        <span>{value}</span>

        <IoChevronDown
          className={`${styles.icon} ${open ? styles.rotate : ""}`}
        />

      </button>

      {open && (

        <ul className={styles.menu}>

          {options.map((option) => (

            <li
              key={option}
              onClick={() => {

                onChange(option);

                setOpen(false);

              }}
            >

              {option}

            </li>

          ))}

        </ul>

      )}

    </div>

  )
}

export default Select