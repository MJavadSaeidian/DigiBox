"use client";
import styles from "@/shared/layout/Header/Header.module.scss"
import Image from "next/image"
import Link from "next/link"
import { BsBox2HeartFill, BsPersonFillExclamation } from "react-icons/bs"
import { FaBoxOpen } from "react-icons/fa6"
import { FiShoppingCart, FiUser } from "react-icons/fi"
import { IoIosArrowDown, IoIosSearch, IoMdHome } from "react-icons/io"
import { TbCategoryFilled, TbShoppingCartQuestion } from "react-icons/tb"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import {
    useEffect,
    useRef,
    useState
} from "react";
import { RxAvatar } from "react-icons/rx";
import MegaMenu from "@/shared/components/mega-menu/MegaMenu";

export default function Header() {

    const [user, setUser] =
        useState<any>(null);

    async function checkUser() {

        const res =
            await fetch(
                "/api/auth/me",
                {
                    cache: "no-store"
                }
            );


        const data =
            await res.json();


        setUser(data.user);

    }

    useEffect(() => {


        checkUser();


        window.addEventListener(
            "authChange",
            checkUser
        );


        return () => {

            window.removeEventListener(
                "authChange",
                checkUser
            );

        };


    }, []);

    const [showMegaMenu, setShowMegaMenu] = useState(false);

    const menuTimeout = useRef<NodeJS.Timeout | null>(null);

    const openMenu = () => {

        if (menuTimeout.current) {
            clearTimeout(menuTimeout.current);
        }

        setShowMegaMenu(true);
    };



    const closeMenu = () => {

        menuTimeout.current = setTimeout(() => {

            setShowMegaMenu(false);

        }, 200);

    };

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
                        <IoIosSearch className={styles.searchIcon} />
                        <input type="text" placeholder="جست و جو" />
                    </div>
                </div>
                <div className={styles.leftSection}>
                    {
                        user ?

                            (

                                <Link

                                    href={
                                        user.role === "admin"
                                            ?
                                            "/admin"
                                            :
                                            "/account"
                                    }


                                    className={styles.loginButton}

                                >

                                    <span>

                                        {
                                            user.role === "admin"

                                                ?

                                                "پنل مدیریت"

                                                :

                                                "حساب کاربری"

                                        }

                                    </span>

                                    <div className={styles.avatarWrapper}>
                                        {
                                            user.role === "admin" ?
                                                <Image

                                                    src={
                                                        user.avatar

                                                    }

                                                    alt="user avatar"

                                                    width={45}

                                                    height={45}

                                                    className={styles.userAvatar}

                                                /> :
                                                <RxAvatar />
                                        }


                                    </div>




                                </Link>

                            )

                            :

                            (

                                <Link

                                    href="/login"

                                    className={styles.loginButton}

                                >

                                    <span>
                                        ورود / ثبت‌نام
                                    </span>


                                    <FiUser />

                                </Link>

                            )

                    }

                    <Link href="/cart" className={styles.cartButton}>
                        <FaBoxOpen />
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

                    <li
                        className={styles.categoryWrapper}
                        onMouseEnter={openMenu}
                        onMouseLeave={closeMenu}
                    >
                        <Link href="/products">
                            <IoIosArrowDown 
                            className={
                                showMegaMenu
                                    ?
                                    styles.rotate
                                    :
                                    ""
                            } />
                            دسته بندی
                        </Link>


                        {
                            showMegaMenu &&
                            <MegaMenu />
                        }

                    </li>

                    <li>
                        <Link href="/specialBox">
                            <BsBox2HeartFill />
                            جعبه های ویژه
                        </Link>
                    </li>

                    <li>
                        <Link href="/contactUs">
                            <TfiHeadphoneAlt />
                            تماس با ما
                        </Link>
                    </li>

                    <li>
                        <Link href="/orderTracking">
                            <TbShoppingCartQuestion />
                             پیگیری سفارش
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

