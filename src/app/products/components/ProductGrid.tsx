import ProductCard from "@/shared/components/ProductCard";
import { useGetProductsQuery } from "@/shared/services/productApi";

import styles from "./ProductGrid.module.scss";
import Image from "next/image";

function ProductGrid() {

    const {
        data: products = [],
        isLoading,
        error,
    } = useGetProductsQuery();

    if (isLoading) {

        return (
            <div className={styles.loading}>
                در حال بارگذاری محصولات...
            </div>
        );

    }

    if (error) {

        return (
            <div className={styles.error}>
                خطا در دریافت محصولات
            </div>
        );

    }

    if (products.length === 0) {

        return (
            <div className={styles.empty}>

                <Image
                    src="/images/no-products.png"
                    alt="no-products"
                    width={896}
                    height={597}
                    priority
                />

            </div>
        );

    }

    return (

        <section className={styles.grid}>

            {products.map((product) => (

                <ProductCard
                    key={product.slug}
                    product={product}
                />

            ))}

        </section>

    );

}

export default ProductGrid;