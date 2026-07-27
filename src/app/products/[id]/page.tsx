import styles from "./ProductDetails.module.scss"
import { PRODUCTS } from "@/shared/constants/products"
import Image from "next/image"
import { notFound } from "next/navigation"
import ProductGallery from "./components/ProductGallery"
import ProductSpecifications from "./components/ProductSpecifications"
import ProductReviews from "./components/ProductReviews"
import RelatedProducts from "./components/RelatedProducts"

type ProductsDetailsPageProps = {
    params: Promise<{
        id: string
    }>
}

async function ProductsDetailsPage({
    params
}: ProductsDetailsPageProps) {

    const { id } = await params
    const product = PRODUCTS.find(
        (item) => item.id === Number(id)
    )

    if (!product) {
        notFound()
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

                        ⭐ {product.rating}

                        <span>

                            ({product.reviewCount} نظر)

                        </span>

                    </div>

                    <div className={styles.stock}>

                        {product.stock > 0
                            ? "موجود در انبار"
                            : "ناموجود"}

                    </div>

                    <div className={styles.priceBox}>

                        {product.previousPrice && (

                            <span className={styles.previousPrice}>

                                {product.previousPrice.toLocaleString()} تومان

                            </span>

                        )}

                        <span className={styles.price}>

                            {product.price.toLocaleString()} تومان

                        </span>

                    </div>

                    <button className={styles.addToCart}>

                        افزودن به جعبه خرید

                    </button>

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
                currentProductId={product.id}
                category={product.category}
            />

        </main>
    )
}

export default ProductsDetailsPage