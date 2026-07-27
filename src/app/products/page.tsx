"use client"
import { PRODUCTS } from "@/shared/constants/products"
import ProductGrid from "./components/ProductGrid"
import ProductSidebar from "./components/ProductSidebar"
import ProductToolbar from "./components/ProductToolbar"
import styles from "./productsPage.module.scss"
import { useState } from "react"

function ProductsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const filteredProducts = PRODUCTS.filter((product) => {

    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);


    const brandMatch =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand);


    return categoryMatch && brandMatch;

  });

  return (
    <main className={styles.products}>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <ProductSidebar
            categories={selectedCategories}
            setCategories={setSelectedCategories}
            brands={selectedBrands}
            setBrands={setSelectedBrands}
          />
        </aside>

        <section className={styles.content}>
          <div className={styles.toolbar}>
            <ProductToolbar totalProducts={248} />
          </div>
          <div className={styles.grid}>
            <ProductGrid
              products={filteredProducts}
            />
          </div>
          <div className={styles.pagination}>
            pagination
          </div>
        </section>
      </div>

    </main>
  )
}

export default ProductsPage