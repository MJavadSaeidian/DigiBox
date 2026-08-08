import styles from "./FeaturedProducts.module.scss";

import ProductCard from "@/shared/components/ProductCard";
import SectionTitle from "@/shared/components/SectionTitle";

import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

import Carousel from "@/shared/components/carousel/Carousel";

async function FeaturedProducts() {
    await connectDB();

    const products = await Product.find({
        featured: true,
    })
        .sort({ createdAt: -1 })
        .limit(8)
        .lean();

    return (
        <section className={styles.featured}>
            <SectionTitle
                title="منتخب های DigiBox"
                subtitle="منتخب‌ترین محصولات DigiBox با بهترین قیمت"
            />

            <Carousel>
                {products.map((product: any) => (
                    <ProductCard
                        key={product.slug}
                        product={product}
                    />
                ))}
            </Carousel>
        </section>
    );
}

export default FeaturedProducts;