import SectionTitle from "@/shared/components/SectionTitle";
import styles from "./FeaturedProducts.module.scss";
import ProductCard from "@/shared/components/ProductCard";

const products = [
    {
        id: 1,
        image: "/images/products/iPhone 16 Pro Max.jpg",
        title: "Apple iPhone 16 Pro Max",
        price: 89900000,
        previousPrice: 94900000,
        discount: 5,
    },
    {
        id: 2,
        image: "/images/products/MacBook Air M4.jpg",
        title: "MacBook Air M4",
        price: 114900000,
        previousPrice: 122900000,
        discount: 7,
    },
    {
        id: 3,
        image: "/images/products/Sony WH-1000XM6.webp",
        title: "Sony WH-1000XM6",
        price: 18900000,
        previousPrice: 21400000,
        discount: 12,
    },
    {
        id: 4,
        image: "/images/products/Galaxy Watch 8.jpg",
        title: "Galaxy Watch 8",
        price: 15900000,
        previousPrice: 17400000,
        discount: 8,
    },
];

function FeaturedProducts() {
    return (
        <section className={styles.featured}>

            <SectionTitle
                title="محصولات ویژه"
                subtitle="منتخب‌ترین محصولات DigiBox با بهترین قیمت"
            />

            <div className={styles.grid}>

                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        previousPrice={product.previousPrice}
                        discount={product.discount}
                    />
                ))}

            </div>

        </section>
    );
}

export default FeaturedProducts;