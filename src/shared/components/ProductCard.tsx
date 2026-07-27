import Image from "next/image";
import styles from "./ProductCard.module.scss"
import Button from "./Button";
import { Product } from "../types/product";
import Link from "next/link";


type ProductCardProps = Product

function ProductCard({
    id,
    images,
    title,
    price,
    previousPrice,
    discount,
}: ProductCardProps) {
    return (

        <Link className={styles.link} href={`/products/${id}`}>
            <article className={styles.card}>

                {discount && (
                    <span className={styles.discount}>
                        %{discount}
                    </span>
                )}

                <div className={styles.imageContainer}>

                    <Image
                        className={styles.productImage}
                        src={images[0]}
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
        </Link>

    );
}

export default ProductCard;