import {
    FiCheckCircle,
    FiChevronLeft,
    FiDatabase,
    FiGlobe,
    FiInfo,
    FiLock,
    FiMail,
    FiRefreshCw,
    FiShield,
    FiUser,
} from "react-icons/fi";

import styles from "./privacyPolicy.module.scss";

function PrivacyPolicy() {
    return (
        <main className={styles.page}>

            {/* =========================
                Hero
            ========================= */}

            <section className={styles.hero}>

                <div className={styles.heroIcon}>
                    <FiShield />
                </div>

                <span className={styles.badge}>
                    حریم خصوصی
                </span>

                <h1>
                    حریم خصوصی شما برای ما مهم است
                </h1>

                <p>
                    در DigiBox تلاش می‌کنیم اطلاعات شخصی شما را
                    با بالاترین سطح امنیت و شفافیت محافظت کنیم.
                </p>

                <div className={styles.updated}>
                    <FiRefreshCw />

                    <span>
                        آخرین بروزرسانی: ۱۵ مرداد ۱۴۰۵
                    </span>
                </div>

            </section>


            {/* =========================
                Privacy Summary
            ========================= */}

            <section className={styles.summary}>

                <div className={styles.summaryItem}>

                    <div className={styles.summaryIcon}>
                        <FiLock />
                    </div>

                    <div>
                        <strong>
                            امنیت اطلاعات
                        </strong>

                        <span>
                            محافظت از اطلاعات شخصی شما
                        </span>
                    </div>

                </div>


                <div className={styles.summaryItem}>

                    <div className={styles.summaryIcon}>
                        <FiDatabase />
                    </div>

                    <div>
                        <strong>
                            جمع‌آوری محدود
                        </strong>

                        <span>
                            فقط اطلاعات مورد نیاز
                        </span>
                    </div>

                </div>


                <div className={styles.summaryItem}>

                    <div className={styles.summaryIcon}>
                        <FiUser />
                    </div>

                    <div>
                        <strong>
                            کنترل اطلاعات
                        </strong>

                        <span>
                            مدیریت اطلاعات توسط شما
                        </span>
                    </div>

                </div>

            </section>


            {/* =========================
                Quick Navigation
            ========================= */}

            <nav className={styles.navigation}>

                <a href="#collection">
                    <FiDatabase />
                    اطلاعاتی که جمع‌آوری می‌کنیم
                    <FiChevronLeft />
                </a>

                <a href="#usage">
                    <FiInfo />
                    نحوه استفاده از اطلاعات
                    <FiChevronLeft />
                </a>

                <a href="#security">
                    <FiLock />
                    امنیت اطلاعات
                    <FiChevronLeft />
                </a>

                <a href="#cookies">
                    <FiGlobe />
                    کوکی‌ها
                    <FiChevronLeft />
                </a>

                <a href="#rights">
                    <FiCheckCircle />
                    حقوق کاربران
                    <FiChevronLeft />
                </a>

                <a href="#contact">
                    <FiMail />
                    ارتباط با ما
                    <FiChevronLeft />
                </a>

            </nav>


            {/* =========================
                Content
            ========================= */}

            <section className={styles.content}>

                {/* Collection */}

                <article
                    id="collection"
                    className={styles.section}
                >

                    <div className={styles.sectionHeader}>

                        <div className={styles.sectionIcon}>
                            <FiDatabase />
                        </div>

                        <div>
                            <span>
                                بخش ۰۱
                            </span>

                            <h2>
                                اطلاعاتی که جمع‌آوری می‌کنیم
                            </h2>
                        </div>

                    </div>

                    <div className={styles.text}>

                        <p>
                            هنگام استفاده از خدمات DigiBox ممکن است
                            برخی اطلاعات مورد نیاز برای ایجاد حساب،
                            ثبت سفارش و ارائه خدمات از شما دریافت شود.
                        </p>

                        <ul>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    نام و نام خانوادگی
                                </span>
                            </li>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    آدرس ایمیل و شماره تماس
                                </span>
                            </li>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    اطلاعات مربوط به سفارش‌ها و خریدها
                                </span>
                            </li>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    اطلاعات مورد نیاز برای ارسال سفارش
                                </span>
                            </li>

                        </ul>

                    </div>

                </article>


                {/* Usage */}

                <article
                    id="usage"
                    className={styles.section}
                >

                    <div className={styles.sectionHeader}>

                        <div className={styles.sectionIcon}>
                            <FiInfo />
                        </div>

                        <div>
                            <span>
                                بخش ۰۲
                            </span>

                            <h2>
                                نحوه استفاده از اطلاعات
                            </h2>
                        </div>

                    </div>

                    <div className={styles.text}>

                        <p>
                            اطلاعات جمع‌آوری شده صرفاً برای ارائه و
                            بهبود خدمات DigiBox استفاده می‌شوند.
                        </p>

                        <ul>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    ایجاد و مدیریت حساب کاربری
                                </span>
                            </li>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    پردازش و پیگیری سفارش‌ها
                                </span>
                            </li>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    ارتباط با کاربران درباره سفارش‌ها
                                    و خدمات
                                </span>
                            </li>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    بهبود عملکرد و تجربه کاربری وب‌سایت
                                </span>
                            </li>

                        </ul>

                    </div>

                </article>


                {/* Security */}

                <article
                    id="security"
                    className={styles.section}
                >

                    <div className={styles.sectionHeader}>

                        <div className={styles.sectionIcon}>
                            <FiLock />
                        </div>

                        <div>
                            <span>
                                بخش ۰۳
                            </span>

                            <h2>
                                امنیت اطلاعات
                            </h2>
                        </div>

                    </div>

                    <div className={styles.text}>

                        <p>
                            امنیت اطلاعات کاربران یکی از اولویت‌های
                            DigiBox است. ما تلاش می‌کنیم با استفاده از
                            روش‌های مناسب فنی و امنیتی از اطلاعات شما
                            در برابر دسترسی غیرمجاز محافظت کنیم.
                        </p>

                        <div className={styles.securityBox}>

                            <FiShield />

                            <div>
                                <strong>
                                    محافظت از اطلاعات شما
                                </strong>

                                <span>
                                    اطلاعات حساس کاربران با استفاده از
                                    روش‌های امنیتی مناسب محافظت می‌شوند.
                                </span>
                            </div>

                        </div>

                    </div>

                </article>


                {/* Cookies */}

                <article
                    id="cookies"
                    className={styles.section}
                >

                    <div className={styles.sectionHeader}>

                        <div className={styles.sectionIcon}>
                            <FiGlobe />
                        </div>

                        <div>
                            <span>
                                بخش ۰۴
                            </span>

                            <h2>
                                کوکی‌ها و فناوری‌های مشابه
                            </h2>
                        </div>

                    </div>

                    <div className={styles.text}>

                        <p>
                            DigiBox ممکن است برای حفظ تنظیمات کاربر،
                            بهبود عملکرد وب‌سایت و ارائه تجربه بهتر از
                            کوکی‌ها و فناوری‌های مشابه استفاده کند.
                        </p>

                        <p>
                            شما می‌توانید تنظیمات مربوط به کوکی‌ها را
                            از طریق تنظیمات مرورگر خود مدیریت کنید.
                        </p>

                    </div>

                </article>


                {/* Rights */}

                <article
                    id="rights"
                    className={styles.section}
                >

                    <div className={styles.sectionHeader}>

                        <div className={styles.sectionIcon}>
                            <FiUser />
                        </div>

                        <div>
                            <span>
                                بخش ۰۵
                            </span>

                            <h2>
                                حقوق کاربران
                            </h2>
                        </div>

                    </div>

                    <div className={styles.text}>

                        <p>
                            کاربران می‌توانند در چارچوب قوانین مربوطه
                            درخواست بررسی، اصلاح یا حذف اطلاعات شخصی
                            خود را ثبت کنند.
                        </p>

                        <ul>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    درخواست مشاهده اطلاعات شخصی
                                </span>
                            </li>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    درخواست اصلاح اطلاعات نادرست
                                </span>
                            </li>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    درخواست حذف اطلاعات در صورت امکان
                                </span>
                            </li>

                        </ul>

                    </div>

                </article>


                {/* Contact */}

                <article
                    id="contact"
                    className={styles.section}
                >

                    <div className={styles.sectionHeader}>

                        <div className={styles.sectionIcon}>
                            <FiMail />
                        </div>

                        <div>
                            <span>
                                بخش ۰۶
                            </span>

                            <h2>
                                ارتباط با ما
                            </h2>
                        </div>

                    </div>

                    <div className={styles.text}>

                        <p>
                            اگر درباره نحوه جمع‌آوری یا استفاده از
                            اطلاعات خود سوالی دارید، می‌توانید از طریق
                            راه‌های ارتباطی DigiBox با ما در تماس باشید.
                        </p>

                        <div className={styles.contactCard}>

                            <FiMail />

                            <div>
                                <span>
                                    ایمیل پشتیبانی
                                </span>

                                <strong>
                                    support@digibox.ir
                                </strong>
                            </div>

                        </div>

                    </div>

                </article>


                {/* Final Notice */}

                <div className={styles.finalNotice}>

                    <div className={styles.finalIcon}>
                        <FiShield />
                    </div>

                    <div>

                        <h3>
                            حریم خصوصی شما برای ما اهمیت دارد
                        </h3>

                        <p>
                            با استفاده از DigiBox، شما تأیید می‌کنید
                            که این سیاست حفظ حریم خصوصی را مطالعه
                            کرده‌اید و با آن موافق هستید.
                        </p>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default PrivacyPolicy;