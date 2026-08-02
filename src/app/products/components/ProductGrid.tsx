import Image from "next/image";

import ProductCard from "@/shared/components/ProductCard";
import { Product } from "@/shared/types/product";

import styles from "./ProductGrid.module.scss";

type ProductGridProps = {
    products: Product[];
    isLoading: boolean;
    error: unknown;
};

function ProductGrid({
    products,
    isLoading,
    error,
}: ProductGridProps) {

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