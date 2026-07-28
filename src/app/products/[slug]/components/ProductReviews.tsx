import styles from "./ProductReviews.module.scss"

function ProductReviews() {
    return (
        <section className={styles.reviews}>
            <h2>
                نظرت کاربران
            </h2>

            <div className={styles.summary}>
                <div className={styles.score}>
                    <span className={styles.number}>
                        4.9
                    </span>

                    <span className={styles.star}>
                        ⭐⭐⭐⭐⭐
                    </span>
                    <span className={styles.count}>
                        248 دیدگاه
                    </span>

                </div>

            </div>

            <div className={styles.comment}>
                <h4>
                    علی قاسمی
                </h4>
                <p>
                    کیفیت فوق العاده و عملکرد بی نظیر
                </p>

            </div>

             <div className={styles.comment}>
                <h4>
                   محمد هاشمی
                </h4>
                <p>
                    کیفیت فوق العاده و عملکرد خیلی بی نظیر
                </p>

            </div>

            

        </section>
    )
}

export default ProductReviews