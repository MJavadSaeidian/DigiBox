import {
    FiArrowLeft,
    FiChevronDown,
    FiHelpCircle,
    FiMessageCircle,
    FiSearch,
} from "react-icons/fi";

import styles from "./faq.module.scss";
import Link from "next/link";

function FAQ() {
    return (
        <main className={styles.page}>

            {/* =========================
                Header
            ========================= */}

            <section className={styles.hero}>

                <div className={styles.heroContent}>

                    <span className={styles.badge}>
                        سوالات متداول
                    </span>

                    <h1>
                        چطور می‌توانیم کمکتان کنیم؟
                    </h1>

                    <p>
                        پاسخ سوالات متداول درباره محصولات،
                        سفارش، پرداخت و ارسال را در اینجا پیدا کنید.
                    </p>

                </div>

            </section>


            {/* =========================
                Search
            ========================= */}

            <section className={styles.searchSection}>

                <div className={styles.searchBox}>

                    <FiSearch />

                    <input
                        type="text"
                        placeholder="سوال خود را جستجو کنید..."
                    />

                    <button type="button">
                        جستجو
                    </button>

                </div>

            </section>


            {/* =========================
                Categories
            ========================= */}

            <section className={styles.categories}>

                <button
                    type="button"
                    className={`${styles.category} ${styles.activeCategory}`}
                >
                    <FiHelpCircle />

                    <span>
                        سوالات عمومی
                    </span>
                </button>

                <button
                    type="button"
                    className={styles.category}
                >
                    <FiMessageCircle />

                    <span>
                        سفارش و خرید
                    </span>
                </button>

                <button
                    type="button"
                    className={styles.category}
                >
                    <FiHelpCircle />

                    <span>
                        پرداخت
                    </span>
                </button>

                <button
                    type="button"
                    className={styles.category}
                >
                    <FiMessageCircle />

                    <span>
                        ارسال و تحویل
                    </span>
                </button>

            </section>


            {/* =========================
                FAQ List
            ========================= */}

            <section className={styles.faqSection}>

                <div className={styles.sectionHeader}>

                    <div>
                        <span>
                            سوالات عمومی
                        </span>

                        <h2>
                            پاسخ سوالات شما
                        </h2>
                    </div>

                    <p>
                        سوال خود را پیدا نکردید؟
                        می‌توانید با پشتیبانی تماس بگیرید.
                    </p>

                </div>


                <div className={styles.faqList}>

                    <div className={`${styles.faqItem} ${styles.open}`}>

                        <button
                            type="button"
                            className={styles.question}
                        >
                            <div className={styles.questionTitle}>

                                <span className={styles.questionNumber}>
                                    01
                                </span>

                                <span>
                                    چگونه می‌توانم از DigiBox خرید کنم؟
                                </span>

                            </div>

                            <FiChevronDown />

                        </button>

                        <div className={styles.answer}>

                            <p>
                                ابتدا محصول مورد نظر خود را انتخاب کنید
                                و آن را به سبد خرید اضافه کنید. سپس وارد
                                سبد خرید شده و مراحل ثبت سفارش و پرداخت
                                را تکمیل کنید.
                            </p>

                        </div>

                    </div>


                    <div className={styles.faqItem}>

                        <button
                            type="button"
                            className={styles.question}
                        >
                            <div className={styles.questionTitle}>

                                <span className={styles.questionNumber}>
                                    02
                                </span>

                                <span>
                                    آیا برای خرید باید حساب کاربری داشته باشم؟
                                </span>

                            </div>

                            <FiChevronDown />

                        </button>

                    </div>


                    <div className={styles.faqItem}>

                        <button
                            type="button"
                            className={styles.question}
                        >
                            <div className={styles.questionTitle}>

                                <span className={styles.questionNumber}>
                                    03
                                </span>

                                <span>
                                    چه روش‌هایی برای پرداخت وجود دارد؟
                                </span>

                            </div>

                            <FiChevronDown />

                        </button>

                    </div>


                    <div className={styles.faqItem}>

                        <button
                            type="button"
                            className={styles.question}
                        >
                            <div className={styles.questionTitle}>

                                <span className={styles.questionNumber}>
                                    04
                                </span>

                                <span>
                                    سفارش من چه زمانی ارسال می‌شود؟
                                </span>

                            </div>

                            <FiChevronDown />

                        </button>

                    </div>


                    <div className={styles.faqItem}>

                        <button
                            type="button"
                            className={styles.question}
                        >
                            <div className={styles.questionTitle}>

                                <span className={styles.questionNumber}>
                                    05
                                </span>

                                <span>
                                    چگونه می‌توانم وضعیت سفارش خود را پیگیری کنم؟
                                </span>

                            </div>

                            <FiChevronDown />

                        </button>

                    </div>


                    <div className={styles.faqItem}>

                        <button
                            type="button"
                            className={styles.question}
                        >
                            <div className={styles.questionTitle}>

                                <span className={styles.questionNumber}>
                                    06
                                </span>

                                <span>
                                    آیا امکان لغو یا مرجوع کردن سفارش وجود دارد؟
                                </span>

                            </div>

                            <FiChevronDown />

                        </button>

                    </div>

                </div>

            </section>


            {/* =========================
                Support
            ========================= */}

            <section className={styles.support}>

                <div className={styles.supportIcon}>
                    <FiMessageCircle />
                </div>

                <div className={styles.supportContent}>

                    <span>
                        هنوز سوالی دارید؟
                    </span>

                    <h2>
                        ما اینجا هستیم تا کمکتان کنیم.
                    </h2>

                    <p>
                        اگر پاسخ سوال خود را پیدا نکردید،
                        با تیم پشتیبانی DigiBox در ارتباط باشید.
                    </p>

                </div>

                <Link href="./contactUs">
                    <button
                        type="button"
                        className={styles.supportButton}
                    >
                        تماس با پشتیبانی

                        <FiArrowLeft />

                    </button>

                </Link>

            </section>

        </main>
    );
}

export default FAQ;