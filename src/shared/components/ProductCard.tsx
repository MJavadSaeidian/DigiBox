import Image from "next/image";
import styles from "./ProductCard.module.scss"
import Button from "./Button";


type ProductCardProps = {
    image: string;
    title: string;
    price: number;
    previousPrice?: number;
    discount?: number;
};

function ProductCard({
    image,
    title,
    price,
    previousPrice,
    discount,
}: ProductCardProps) {
    return (
        <article className={styles.card}>

            {discount && (
                <span className={styles.discount}>
                    %{discount}
                </span>
            )}

            <div className={styles.imageContainer}>

                <Image
                    className={styles.productImage}
                    src={image}
                    width={260}
                    height={260}
                    alt={title}
                />

            </div>

            <div className={styles.content}>

                <h3>{title}</h3>

                <div className={styles.priceBox}>

                    {previousPrice && (
                        <span className={styles.previousPrice}>
                            {previousPrice.toLocaleString()} تومان
                        </span>
                    )}

                    <span className={styles.price}>
                        {price.toLocaleString()} تومان
                    </span>

                </div>

                <Button>
                    افزودن به جعبه خرید
                </Button>

            </div>

        </article>
    );
}

export default ProductCard;