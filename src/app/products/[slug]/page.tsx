import styles from "./ProductDetails.module.scss"

import { notFound } from "next/navigation"

import ProductGallery from "./components/ProductGallery"
import ProductSpecifications from "./components/ProductSpecifications"
import ProductReviews from "./components/ProductReviews"
import RelatedProducts from "./components/RelatedProducts"

import { connectDB } from "@/lib/db"
import Product from "@/models/Product"
import Button from "@/shared/components/Button"



type ProductsDetailsPageProps = {
    params: Promise<{
        slug: string
    }>
}



async function ProductsDetailsPage({

    params

}: ProductsDetailsPageProps) {



    const { slug } =
        await params



    await connectDB();



    const product =
        await Product.findOne({
            slug
        }).lean();




    if (!product) {

        notFound();

    }






    return (

        <main className={styles.product}>


            <div className={styles.container}>


                <section className={styles.gallery}>


                    <ProductGallery

                        images={product.images}

                    />


                </section>





                <section className={styles.info}>


                    <span className={styles.brand}>

                        {product.brand}

                    </span>




                    <h1>

                        {product.title}

                    </h1>





                    <div className={styles.rating}>


                        ⭐ {product.rating || 0}


                        <span>

                            ({product.reviewCount || 0} نظر)

                        </span>


                    </div>






                    <div className={
                        product.stock > 0 ? styles.stock
                            : `${styles.stock} ${styles.outOfStock}`

                    }>

                        {product.stock > 0
                            ? "موجود در انبار"
                            : "ناموجود"
                        }

                    </div>







                    <div className={styles.priceBox}>


                        {
                            product.previousPrice &&

                            (

                                <span className={styles.previousPrice}>

                                    {
                                        product.previousPrice
                                            .toLocaleString()
                                    }

                                    {" "}تومان

                                </span>

                            )

                        }





                        <span className={styles.price}>


                            {
                                product.price
                                    .toLocaleString()
                            }


                            {" "}تومان


                        </span>


                    </div>


                     <Button disabled={product.stock === 0}>
                        افزودن به جعبه خرید
                    </Button>






                    <div className={styles.description}>


                        <h3>

                            معرفی محصول

                        </h3>


                        <p>

                            {product.description}

                        </p>


                    </div>




                </section>



            </div>


            <div className={styles.bottomSection}>


                <ProductSpecifications

                    product={product}

                />



                <ProductReviews />


            </div>





            <RelatedProducts

                currentProductSlug={product.slug}

                category={product.category}

            />




        </main>

    )

}



export default ProductsDetailsPage