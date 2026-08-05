import styles from "./SpecialBox.module.scss";
import ProductMiniCard from "./ProductMiniCard";
import { SpecialBoxType } from "./types";


interface Props {
    box: SpecialBoxType;
}


export default function SpecialBoxCard({ box }: Props) {


    const totalPrice = box.products.reduce(
        (sum, item) => sum + item.price,
        0
    );


    const saving = totalPrice - box.boxPrice;



    return (

        <article className={styles.card}>

            <section className={styles.imageSection}>

                <span className={styles.badge}>
                    ⭐ پیشنهاد ویژه
                </span>


                <div className={styles.boxWrapper}>


                    <img
                        src={box.image}
                        alt={box.title}
                        className={styles.boxImage}
                    />


                </div>


            </section>




            <section className={styles.contentSection}>


                <h2>
                    {box.title}
                </h2>



                <p className={styles.description}>
                    {box.description}
                </p>




                <h3>
                    محصولات داخل جعبه
                </h3>



                <div className={styles.products}>

                    {
                        box.products.map(product => (

                            <ProductMiniCard

                                key={product.id}

                                title={product.title}

                                image={product.image}

                            />

                        ))
                    }

                </div>




                <div className={styles.priceBox}>


                    <div className={styles.priceRow}>
                        <span>
                            مجموع محصولات
                        </span>

                        <strong>
                            {totalPrice.toLocaleString()}
                        </strong>
                    </div>



                    <div className={styles.priceRow}>
                        <span>
                            قیمت جعبه
                        </span>

                        <strong>
                            {box.boxPrice.toLocaleString()}
                        </strong>
                    </div>



                    <div className={styles.saving}>
                        <span>
                            💚 صرفه‌جویی شما
                        </span>

                        <strong>
                            {saving.toLocaleString()}
                        </strong>

                    </div>
                </div>
                <button className={styles.button}>
                    خرید جعبه
                </button>

            </section>
        </article>
    );
}