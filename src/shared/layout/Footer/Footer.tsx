import Image from "next/image";
import Link from "next/link";

import {
    FaInstagram,
    FaTelegramPlane,
    FaGithub,
} from "react-icons/fa";

import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>

                <div className={styles.about}>

                    <Image
                        src="/images/logo-2.png"
                        alt="DigiBox"
                        width={150}
                        height={40}
                    />

                    <p>
                        DigiBox فروشگاه تخصصی خرید لوازم دیجیتال با بهترین قیمت،
                        ضمانت اصالت کالا و ارسال سریع به سراسر کشور.
                    </p>

                </div>

                <div className={styles.links}>

                    <h3>دسترسی سریع</h3>

                    <Link href="/">خانه</Link>
                    <Link href="/products">محصولات</Link>
                    <Link href="/special-box">جعبه‌های ویژه</Link>
                    <Link href="/contactUs">تماس با ما</Link>

                </div>

                <div className={styles.links}>

                    <h3>خدمات مشتریان</h3>

                    <Link href="/orderTracking">پیگیری سفارش</Link>
                    <Link href="/FAQ">سوالات متداول</Link>
                    <Link href="/termsAndConditions">قوانین و مقررات</Link>
                    <Link href="/privacyPolicy">حریم خصوصی</Link>

                </div>

                <div className={styles.social}>

                    <h3>ما را دنبال کنید</h3>

                    <div className={styles.icons}>

                        <Link href="#">
                            <FaInstagram />
                        </Link>

                        <Link href="#">
                            <FaTelegramPlane />
                        </Link>

                        <Link href="https://github.com/MJavadSaeidian">
                            <FaGithub />
                        </Link>

                    </div>

                </div>
                

            </div>

            <div className={styles.bottom}>

                © 2026 DigiBox | تمامی حقوق محفوظ است.

            </div>

        </footer>
    );
}

export default Footer;