import ProductCard from "@/shared/components/ProductCard";
import { Product } from "@/shared/types/product";

import styles from "./ProductGrid.module.scss";
import Image from "next/image";

type ProductGridProps = {
    products: Product[];
};

function ProductGrid({
    products,
}: ProductGridProps) {

    if (products.length === 0) {
        return <div className={styles.empty}>
            <Image
                src="/images/no-products.png"
                alt="no-products"
                width={896}
                height={597}
                priority
            />
        </div>
    }
    return (

        <section className={styles.grid}>

            {products.map((product) => (

                <ProductCard
                    id={product.id}
                    key={product.id}
                    images={product.images}
                    title={product.title}
                    slug={product.slug}
                    description={product.description}
                    stock={product.stock}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    price={product.price}
                    previousPrice={product.previousPrice}
                    discount={product.discount}
                    category={product.category}
                    brand={product.brand}
                    specifications={product.specifications}
                />

            ))}

        </section>

    );

}

export default ProductGrid;