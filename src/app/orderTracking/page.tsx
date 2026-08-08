import {
    FiArrowLeft,
    FiCheck,
    FiClock,
    FiPackage,
    FiSearch,
    FiTruck,
} from "react-icons/fi";

import styles from "./orderTracking.module.scss";

function OrderTracking() {
    return (
        <main className={styles.page}>

            <section className={styles.hero}>

                <div className={styles.heroContent}>

                    <span className={styles.badge}>
                        پیگیری سفارش
                    </span>

                    <h1>
                        سفارش خود را پیگیری کنید
                    </h1>

                    <p>
                        شماره سفارش یا کد رهگیری خود را وارد کنید
                        تا آخرین وضعیت سفارش خود را مشاهده کنید.
                    </p>

                </div>

            </section>


            <section className={styles.trackingSection}>

                <div className={styles.trackingCard}>

                    <div className={styles.cardHeader}>

                        <div className={styles.cardIcon}>
                            <FiPackage />
                        </div>

                        <div>
                            <span>
                                پیگیری سفارش
                            </span>

                            <h2>
                                اطلاعات سفارش را وارد کنید
                            </h2>
                        </div>

                    </div>


                    <form className={styles.trackingForm}>

                        <div className={styles.field}>

                            <label htmlFor="orderNumber">
                                شماره سفارش
                            </label>

                            <div className={styles.inputWrapper}>

                                <FiPackage />

                                <input
                                    id="orderNumber"
                                    type="text"
                                    placeholder="مثلاً DG-10245"
                                />

                            </div>

                        </div>


                        <button
                            type="submit"
                            className={styles.submitButton}
                        >
                            <FiSearch />

                            <span>
                                پیگیری سفارش
                            </span>

                            <FiArrowLeft />

                        </button>

                    </form>

                </div>


                <div className={styles.visual}>

                    <div className={styles.visualGlow} />

                    <div className={styles.visualOrb}>

                        <div className={styles.visualIcon}>
                            <FiTruck />
                        </div>

                    </div>

                    <span className={styles.visualDot}></span>
                    <span className={styles.visualDot}></span>
                    <span className={styles.visualDot}></span>

                </div>

            </section>


            <section className={styles.orderSection}>

                <div className={styles.orderHeader}>

                    <div>

                        <span className={styles.orderLabel}>
                            وضعیت سفارش
                        </span>

                        <h2>
                            سفارش #DG-10245
                        </h2>

                    </div>

                    <span className={styles.status}>
                        در حال ارسال
                    </span>

                </div>


                <div className={styles.orderInfo}>

                    <div className={styles.infoItem}>
                        <span>
                            تاریخ ثبت سفارش
                        </span>

                        <strong>
                            ۱۴ مرداد ۱۴۰۵
                        </strong>
                    </div>

                    <div className={styles.infoItem}>
                        <span>
                            مبلغ سفارش
                        </span>

                        <strong>
                            ۱۲,۵۰۰,۰۰۰ تومان
                        </strong>
                    </div>

                    <div className={styles.infoItem}>
                        <span>
                            روش ارسال
                        </span>

                        <strong>
                            ارسال پیشتاز
                        </strong>
                    </div>

                    <div className={styles.infoItem}>
                        <span>
                            کد رهگیری
                        </span>

                        <strong>
                            123456789012
                        </strong>
                    </div>

                </div>


                <div className={styles.timeline}>

                    <div className={`${styles.timelineItem} ${styles.completed}`}>

                        <div className={styles.timelineIcon}>
                            <FiCheck />
                        </div>

                        <div className={styles.timelineContent}>
                            <strong>
                                ثبت سفارش
                            </strong>

                            <span>
                                سفارش شما با موفقیت ثبت شد.
                            </span>

                            <small>
                                ۱۴ مرداد، ۱۰:۲۴
                            </small>
                        </div>

                    </div>


                    <div className={`${styles.timelineItem} ${styles.completed}`}>

                        <div className={styles.timelineIcon}>
                            <FiCheck />
                        </div>

                        <div className={styles.timelineContent}>
                            <strong>
                                تأیید پرداخت
                            </strong>

                            <span>
                                پرداخت سفارش با موفقیت تأیید شد.
                            </span>

                            <small>
                                ۱۴ مرداد، ۱۰:۲۶
                            </small>
                        </div>

                    </div>


                    <div className={`${styles.timelineItem} ${styles.completed}`}>

                        <div className={styles.timelineIcon}>
                            <FiCheck />
                        </div>

                        <div className={styles.timelineContent}>
                            <strong>
                                آماده‌سازی سفارش
                            </strong>

                            <span>
                                سفارش شما در حال آماده‌سازی است.
                            </span>

                            <small>
                                ۱۴ مرداد، ۱۲:۴۰
                            </small>
                        </div>

                    </div>


                    <div className={`${styles.timelineItem} ${styles.active}`}>

                        <div className={styles.timelineIcon}>
                            <FiTruck />
                        </div>

                        <div className={styles.timelineContent}>
                            <strong>
                                ارسال شده
                            </strong>

                            <span>
                                سفارش شما تحویل شرکت حمل‌ونقل شده است.
                            </span>

                            <small>
                                امروز، ۰۸:۱۵
                            </small>
                        </div>

                    </div>


                    <div className={styles.timelineItem}>

                        <div className={styles.timelineIcon}>
                            <FiClock />
                        </div>

                        <div className={styles.timelineContent}>
                            <strong>
                                تحویل داده شده
                            </strong>

                            <span>
                                سفارش هنوز تحویل شما نشده است.
                            </span>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default OrderTracking;