import ProductToolbar from "./components/ProductToolbar"
import styles from "./productsPage.module.scss"

function ProductsPage() {
  return (
    <main className={styles.products}>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          Sidebar
        </aside>

        <section className={styles.content}>
          <div className={styles.toolbar}>
            <ProductToolbar totalProducts={248}/>
          </div>
          <div className={styles.grid}>
            Product Grid
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