import {
    FiAlertCircle,
    FiCheckCircle,
    FiCreditCard,
    FiFileText,
    FiLock,
    FiPackage,
    FiRefreshCw,
    FiShield,
    FiShoppingBag,
    FiUser,
} from "react-icons/fi";

import styles from "./termsAndConditions.module.scss";

function TermsAndConditions() {
    return (
        <main className={styles.page}>

            {/* =========================
                Hero
            ========================= */}

            <section className={styles.hero}>

                <span className={styles.badge}>
                    قوانین و مقررات
                </span>

                <h1>
                    قوانین استفاده از DigiBox
                </h1>

                <p>
                    لطفاً پیش از استفاده از خدمات و ثبت سفارش،
                    قوانین و مقررات DigiBox را با دقت مطالعه کنید.
                </p>

                <div className={styles.updated}>
                    <FiRefreshCw />

                    <span>
                        آخرین بروزرسانی: ۱۵ مرداد ۱۴۰۵
                    </span>
                </div>

            </section>


            {/* =========================
                Quick Navigation
            ========================= */}

            <section className={styles.quickNav}>

                <a href="#general">
                    <FiFileText />
                    <span>قوانین عمومی</span>
                </a>

                <a href="#account">
                    <FiUser />
                    <span>حساب کاربری</span>
                </a>

                <a href="#orders">
                    <FiShoppingBag />
                    <span>سفارش و خرید</span>
                </a>

                <a href="#payment">
                    <FiCreditCard />
                    <span>پرداخت</span>
                </a>

                <a href="#shipping">
                    <FiPackage />
                    <span>ارسال</span>
                </a>

                <a href="#privacy">
                    <FiLock />
                    <span>حریم خصوصی</span>
                </a>

            </section>


            {/* =========================
                Main Content
            ========================= */}

            <section className={styles.content}>

                {/* General */}

                <article
                    id="general"
                    className={styles.section}
                >

                    <div className={styles.sectionHeader}>

                        <div className={styles.sectionIcon}>
                            <FiFileText />
                        </div>

                        <div>
                            <span>
                                بخش ۰۱
                            </span>

                            <h2>
                                قوانین عمومی
                            </h2>
                        </div>

                    </div>

                    <div className={styles.text}>

                        <p>
                            استفاده از وب‌سایت و خدمات DigiBox به
                            منزله پذیرش کامل قوانین و مقررات این
                            مجموعه است. کاربران موظف هستند پیش از
                            استفاده از خدمات، این قوانین را مطالعه کنند.
                        </p>

                        <p>
                            DigiBox حق دارد در صورت نیاز، قوانین و
                            مقررات خود را بروزرسانی کند. ادامه استفاده
                            از خدمات پس از اعمال تغییرات به منزله
                            پذیرش نسخه جدید قوانین خواهد بود.
                        </p>

                    </div>

                </article>


                {/* Account */}

                <article
                    id="account"
                    className={styles.section}
                >

                    <div className={styles.sectionHeader}>

                        <div className={styles.sectionIcon}>
                            <FiUser />
                        </div>

                        <div>
                            <span>
                                بخش ۰۲
                            </span>

                            <h2>
                                حساب کاربری
                            </h2>
                        </div>

                    </div>

                    <div className={styles.text}>

                        <p>
                            هر کاربر مسئول حفظ امنیت اطلاعات حساب
                            کاربری خود است و نباید اطلاعات ورود خود
                            را در اختیار افراد دیگر قرار دهد.
                        </p>

                        <ul>
                            <li>
                                <FiCheckCircle />
                                <span>
                                    اطلاعات حساب کاربری باید صحیح و
                                    به‌روز باشد.
                                </span>
                            </li>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    مسئولیت فعالیت‌های انجام شده با
                                    حساب کاربری بر عهده صاحب حساب است.
                                </span>
                            </li>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    ایجاد حساب‌های کاربری متعدد با
                                    هدف سوءاستفاده مجاز نیست.
                                </span>
                            </li>
                        </ul>

                    </div>

                </article>


                {/* Orders */}

                <article
                    id="orders"
                    className={styles.section}
                >

                    <div className={styles.sectionHeader}>

                        <div className={styles.sectionIcon}>
                            <FiShoppingBag />
                        </div>

                        <div>
                            <span>
                                بخش ۰۳
                            </span>

                            <h2>
                                سفارش و خرید
                            </h2>
                        </div>

                    </div>

                    <div className={styles.text}>

                        <p>
                            ثبت سفارش در DigiBox پس از انتخاب محصول،
                            تکمیل اطلاعات مورد نیاز و تأیید نهایی
                            سفارش انجام می‌شود.
                        </p>

                        <ul>
                            <li>
                                <FiCheckCircle />
                                <span>
                                    مسئولیت صحت اطلاعات ثبت شده بر عهده
                                    کاربر است.
                                </span>
                            </li>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    قیمت نهایی سفارش پیش از پرداخت به
                                    کاربر نمایش داده می‌شود.
                                </span>
                            </li>

                            <li>
                                <FiCheckCircle />
                                <span>
                                    ثبت سفارش به منزله تأیید اطلاعات
                                    سفارش توسط کاربر است.
                                </span>
                            </li>
                        </ul>

                    </div>

                </article>


                {/* Payment */}

                <article
                    id="payment"
                    className={styles.section}
                >

                    <div className={styles.sectionHeader}>

                        <div className={styles.sectionIcon}>
                            <FiCreditCard />
                        </div>

                        <div>
                            <span>
                                بخش ۰۴
                            </span>

                            <h2>
                                پرداخت
                            </h2>
                        </div>

                    </div>

                    <div className={styles.text}>

                        <p>
                            پرداخت سفارش از طریق روش‌های پرداختی
                            ارائه شده در وب‌سایت انجام می‌شود.
                        </p>

                        <div className={styles.notice}>
                            <FiAlertCircle />

                            <p>
                                در صورت بروز خطا در پرداخت، مبلغ کسر
                                شده مطابق رویه بانکی به حساب کاربر
                                بازگردانده خواهد شد.
                            </p>
                        </div>

                    </div>

                </article>


                {/* Shipping */}

                <article
                    id="shipping"
                    className={styles.section}
                >

                    <div className={styles.sectionHeader}>

                        <div className={styles.sectionIcon}>
                            <FiPackage />
                        </div>

                        <div>
                            <span>
                                بخش ۰۵
                            </span>

                            <h2>
                                ارسال و تحویل
                            </h2>
                        </div>

                    </div>

                    <div className={styles.text}>

                        <p>
                            سفارش‌ها پس از تأیید پرداخت و آماده‌سازی،
                            مطابق روش ارسال انتخاب شده برای کاربر
                            ارسال خواهند شد.
                        </p>

                        <p>
                            زمان تقریبی ارسال در هنگام ثبت سفارش
                            نمایش داده می‌شود و ممکن است با توجه به
                            شرایط شرکت حمل‌ونقل تغییر کند.
                        </p>

                    </div>

                </article>


                {/* Privacy */}

                <article
                    id="privacy"
                    className={styles.section}
                >

                    <div className={styles.sectionHeader}>

                        <div className={styles.sectionIcon}>
                            <FiShield />
                        </div>

                        <div>
                            <span>
                                بخش ۰۶
                            </span>

                            <h2>
                                حریم خصوصی
                            </h2>
                        </div>

                    </div>

                    <div className={styles.text}>

                        <p>
                            اطلاعات کاربران تنها در چارچوب ارائه خدمات،
                            پردازش سفارش‌ها و بهبود تجربه استفاده از
                            DigiBox مورد استفاده قرار می‌گیرد.
                        </p>

                        <p>
                            DigiBox متعهد است از اطلاعات شخصی کاربران
                            در برابر دسترسی غیرمجاز محافظت کند.
                        </p>

                    </div>

                </article>


                {/* Important */}

                <div className={styles.important}>

                    <div className={styles.importantIcon}>
                        <FiAlertCircle />
                    </div>

                    <div>
                        <h3>
                            نکته مهم
                        </h3>

                        <p>
                            در صورت وجود هرگونه ابهام درباره قوانین،
                            پیش از ثبت سفارش با تیم پشتیبانی DigiBox
                            تماس بگیرید.
                        </p>
                    </div>

                </div>

            </section>

        </main>
    );
}

export default TermsAndConditions;