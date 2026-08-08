import { FiClock, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi"
import styles from "./contactUs.module.scss"

function ContactUs() {
    return (
        <main className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.info}>

                    <div className={styles.infoHeader}>
                        <span className={styles.badge}>
                            تماس با ما
                        </span>

                        <h1>
                            با ما در ارتباط باشید
                        </h1>

                        <p>
                            برای دریافت اطلاعات بیشتر، پیگیری سفارش یا
                            هرگونه سؤال درباره محصولات، با ما در ارتباط باشید.
                        </p>
                    </div>

                    <div className={styles.contactVisual}>
                        <div className={styles.orbGlow} />

                        <div className={styles.orb}>
                            <div className={styles.orbRing}>
                                <FiSend />
                            </div>
                        </div>

                        <span className={styles.orbDot}></span>
                        <span className={styles.orbDot}></span>
                        <span className={styles.orbDot}></span>
                    </div>

                    <div className={styles.contactList}>

                        <div className={styles.contactItem}>
                            <div className={styles.icon}>
                                <FiPhone />
                            </div>

                            <div>
                                <span>تلفن</span>
                                <strong>021-12345678</strong>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.icon}>
                                <FiMail />
                            </div>

                            <div>
                                <span>ایمیل</span>
                                <strong>support@digibox.ir</strong>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.icon}>
                                <FiMapPin />
                            </div>

                            <div>
                                <span>آدرس دفتر مرکزی</span>
                                <strong>
                                    تهران، خیابان نمونه، پلاک ۱۲
                                </strong>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.icon}>
                                <FiClock />
                            </div>
                            <div>
                                <span>ساعات پاسخگویی</span>
                                <strong>
                                    شنبه تا پنجشنبه
                                    <br />
                                    ۹ تا ۱۸
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.form}>
                    <div className={styles.formHeader}>
                        <span className={styles.formLabel}>
                            پیام شما
                        </span>

                        <h2>
                            چطور می‌توانیم کمکتان کنیم؟
                        </h2>

                        <p>
                            فرم زیر را تکمیل کنید تا در سریع‌ترین زمان
                            با شما تماس بگیریم.
                        </p>

                    </div>

                    <form className={styles.contactForm}>

                        <div className={styles.formRow}>

                            <div className={styles.field}>
                                <label htmlFor="name">
                                    نام و نام خانوادگی
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    placeholder="نام خود را وارد کنید"
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="email">
                                    ایمیل
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="example@email.com"
                                />
                            </div>

                        </div>

                        <div className={styles.field}>

                            <label htmlFor="subject">
                                موضوع
                            </label>

                            <input
                                id="subject"
                                type="text"
                                placeholder="موضوع پیام"
                            />

                        </div>

                        <div className={styles.field}>

                            <label htmlFor="message">
                                پیام
                            </label>

                            <textarea
                                id="message"
                                rows={6}
                                placeholder="پیام خود را بنویسید..."
                            />

                        </div>

                        <button type="submit">
                            ارسال پیام
                        </button>

                    </form>

                </div>
            </div>

        </main >
    )
}

export default ContactUs