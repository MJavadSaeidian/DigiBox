import ProductCarousel from "@/shared/components/ProductCarousel";
import { PRODUCTS } from "@/shared/constants/products";

import styles from "./RelatedProducts.module.scss";

type RelatedProductsProps = {
    currentProductId: number;
    category: string;
};

function RelatedProducts({
    currentProductId,
    category,
}: RelatedProductsProps) {

    const relatedProducts = PRODUCTS.filter(

        product =>

            product.category === category &&
            product.id !== currentProductId

    );

    if (!relatedProducts.length) return null;

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
                    products={relatedProducts}
                />

            </div>

        </section>

    );

}

export default RelatedProducts;