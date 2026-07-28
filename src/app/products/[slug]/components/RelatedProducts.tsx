import ProductCarousel from "@/shared/components/ProductCarousel";

import styles from "./RelatedProducts.module.scss";

import { connectDB } from "@/lib/db";
import Product from "@/models/Product";



type RelatedProductsProps = {

    currentProductSlug: string;

    category: string;

};



async function RelatedProducts({

    currentProductSlug,

    category,

}: RelatedProductsProps) {



    await connectDB();



    const relatedProducts =

        await Product.find({

            category,

            slug: {
                $ne: currentProductSlug
            }

        })

        .limit(8)

        .lean();





    if(!relatedProducts.length)

        return null;






    return (


        <section className={styles.relatedProducts}>


            <div className={styles.wrapper}>


                <div className={styles.header}>


                    <h2>

                        محصولات مرتبط

                    </h2>



                    <p>

                        محصولاتی از همین دسته که ممکن است برای شما جذاب باشند.

                    </p>


                </div>




                <ProductCarousel

                    products={
                        relatedProducts
                    }

                />



            </div>



        </section>


    );

}



export default RelatedProducts;