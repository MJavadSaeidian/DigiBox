import styles from "./FeaturedProducts.module.scss";

import ProductCard from "@/shared/components/ProductCard";
import SectionTitle from "@/shared/components/SectionTitle";

import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

async function FeaturedProducts() {

    await connectDB();

    const products = await Product.find()
        .sort({ createdAt: -1 })
        .limit(8)
        .lean();

    return (

        <section className={styles.featured}>

            <SectionTitle
                title="محصولات ویژه"
                subtitle="منتخب‌ترین محصولات DigiBox با بهترین قیمت"
            />

            <div className={styles.grid}>

                {products.map((product: any) => (

                    <ProductCard
                        key={product.slug}
                        product={product}
                    />

                ))}

            </div>

        </section>

    );

}

export default FeaturedProducts;