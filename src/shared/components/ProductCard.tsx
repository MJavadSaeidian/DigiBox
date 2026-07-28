import Image from "next/image";
import Link from "next/link";

import styles from "./ProductCard.module.scss";

import Button from "./Button";
import { BRANDS } from "../constants/productFilters";


type ProductCardProps = {

    product: {

        slug: string;

        images: string[];

        title: string;

        brand: string

        price: number;

        previousPrice?: number;

        discount?: number;

    };

};




function ProductCard({

    product

}: ProductCardProps) {



    const {

        slug,

        images,

        brand,

        title,

        price,

        previousPrice,

        discount,

    } = product;





    return (


        <Link

            className={styles.link}

            href={`/products/${slug}`}

        >


            <article

                className={styles.card}

            >




                {
                    discount &&
                    discount > 0 &&

                    (

                        <span className={styles.discount}>

                            %{discount}

                        </span>

                    )

                }







                <div className={styles.imageContainer}>


                    <Image


                        className={styles.productImage}


                        src={images?.[0] || "/images/placeholder.png"}


                        width={260}


                        height={260}


                        alt={title}


                    />


                </div>






                <div className={styles.content}>

                    <h3>

                        {title}

                    </h3>

                    <span>
                        {brand}
                    </span>

                    <div className={styles.priceBox}>


                        {
                            previousPrice &&

                            (

                                <span className={styles.previousPrice}>

                                    {
                                        previousPrice
                                            .toLocaleString()
                                    }

                                    {" "}تومان

                                </span>

                            )

                        }


                        <span className={styles.price}>


                            {
                                price
                                    .toLocaleString()
                            }

                            {" "}تومان


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