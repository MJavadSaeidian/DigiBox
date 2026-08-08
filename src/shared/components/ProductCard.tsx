"use client";

import Image from "next/image";
import Link from "next/link";

import { toast } from "react-toastify";

import styles from "./ProductCard.module.scss";

import Button from "./Button";
import {
    useRouter
} from "next/navigation";
type ProductCardProps = {
    product: {
        _id: string;
        id?: string;
        slug: string;
        images: string[];
        title: string;
        brand: string;
        price: number;
        previousPrice?: number;
        discount?: number;
        stock: number;
    };
};



function ProductCard({
    product
}: ProductCardProps) {

    const {
        _id,
        slug,
        images,
        brand,
        title,
        price,
        previousPrice,
        discount,
        stock
    } = product;



    async function handleAddToCart(
        e: React.MouseEvent
    ) {

        // جلوگیری از باز شدن Link کارت
        e.preventDefault();

        e.stopPropagation();



        // محصول ناموجود
        if (stock === 0) {
            return;
        }



        try {

            const response =
                await fetch(
                    "/api/cart",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            productId: _id
                        })
                    }
                );



            const data =
                await response.json();



            // -------------------------
            // کاربر لاگین نیست
            // -------------------------

            if (
                response.status === 401
            ) {

                const currentPath =
                    window.location.pathname +
                    window.location.search;



                router.push(
                    `/login?addToBox=${encodeURIComponent(_id)}&redirect=${encodeURIComponent(currentPath)}`
                );

                return;
            }



            // -------------------------
            // خطای API
            // -------------------------

            if (!response.ok) {

                toast.error(
                    data.message ||
                    "افزودن محصول به جعبه خرید انجام نشد."
                );

                return;
            }



            // -------------------------
            // موفقیت
            // -------------------------

            toast.success(
                "محصول به جعبه خرید اضافه شد."
            );



            // اطلاع‌رسانی به Header
            // برای بروزرسانی تعداد Cart
            window.dispatchEvent(
                new Event("cartChange")
            );

        }

        catch (error) {

            console.error(
                "Add to cart error:",
                error
            );

            toast.error(
                "خطایی در افزودن محصول رخ داد."
            );

        }

    }

    const router = useRouter();

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
                        <span
                            className={styles.discount}
                        >
                            %{discount}
                        </span>
                    )
                }



                <div
                    className={styles.imageContainer}
                >

                    <Image
                        className={styles.productImage}
                        src={
                            images?.[0] ||
                            "/images/placeholder.png"
                        }
                        width={260}
                        height={260}
                        alt={title}
                    />



                    {stock === 0 && (

                        <span
                            className={styles.outOfStock}
                        >
                            ناموجود
                        </span>

                    )}

                </div>



                <div
                    className={styles.content}
                >

                    <span
                        className={styles.brand}
                    >
                        {brand}
                    </span>



                    <h3>
                        {title}
                    </h3>



                    <div
                        className={styles.priceBox}
                    >

                        {
                            previousPrice &&

                            (
                                <span
                                    className={
                                        styles.previousPrice
                                    }
                                >
                                    {
                                        previousPrice
                                            .toLocaleString()
                                    }

                                    {" "}تومان
                                </span>
                            )
                        }



                        <span
                            className={styles.price}
                        >
                            {
                                price
                                    .toLocaleString()
                            }

                            {" "}تومان
                        </span>

                    </div>



                    <Button
                        disabled={
                            stock === 0
                        }
                        onClick={
                            handleAddToCart
                        }
                    >
                        افزودن به جعبه خرید
                    </Button>

                </div>

            </article>

        </Link>

    );
}



export default ProductCard;