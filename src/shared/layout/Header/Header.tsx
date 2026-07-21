import styles from "@/shared/layout/Header/Header.module.scss"
import Image from "next/image"
import Link from "next/link"
import { BsBox2HeartFill, BsPersonFillExclamation } from "react-icons/bs"
import { FaBoxOpen } from "react-icons/fa6"
import { FiShoppingCart, FiUser } from "react-icons/fi"
import { IoIosSearch, IoMdHome } from "react-icons/io"
import { TbCategoryFilled } from "react-icons/tb"
import { TfiHeadphoneAlt } from "react-icons/tfi"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.topHeader}>
                <div className={styles.rightSection}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/images/logo-2.png"
                            alt="logo"
                            width={150}
                            height={40}
                        />
                    </Link>
                    <div className={styles.searchBox}>
                        <IoIosSearch  className={styles.searchIcon} />
                        <input type="text" placeholder="جست و جو" />
                    </div>
                </div>
                <div className={styles.leftSection}>
                    <Link href="/login" className={styles.loginButton}>
                        <span>ورود / ثبت‌نام</span>
                        <FiUser />
                    </Link>

                    <Link href="/cart" className={styles.cartButton}>
                        <FaBoxOpen/>
                    </Link>
                </div>
            </div>

            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link href="/">
                        <IoMdHome />
                        خانه
                        </Link>
                    </li>

                    <li>
                        <Link href="/categories">
                        <TbCategoryFilled />
                        دسته بندی
                        </Link>
                    </li>

                     <li>
                        <Link href="/specialBox">
                        <BsBox2HeartFill /> 
                         جعبه های ویژه
                        </Link>
                    </li>

                    <li>
                        <Link href="/about">
                        <TfiHeadphoneAlt />
                        تماس با ما
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact">
                        <BsPersonFillExclamation />
                        درباره ما
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

