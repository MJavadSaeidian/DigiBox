"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useGetProductsQuery } from "@/shared/services/productApi";

import ProductGrid from "./components/ProductGrid";
import ProductSidebar from "./components/ProductSidebar";
import ProductToolbar from "./components/ProductToolbar";

import styles from "./productsPage.module.scss";

function ProductsPage() {
    const searchParams = useSearchParams();

    const [selectedCategories, setSelectedCategories] =
        useState<string[]>([]);

    const [selectedBrands, setSelectedBrands] =
        useState<string[]>([]);

    const sort =
        searchParams.get("sort") || "newest";


    useEffect(() => {
        const categories =
            searchParams
                .get("categories")
                ?.split(",")
                .filter(Boolean) ?? [];

        const brands =
            searchParams
                .get("brands")
                ?.split(",")
                .filter(Boolean) ?? [];

        setSelectedCategories(categories);
        setSelectedBrands(brands);
    }, [searchParams]);


    const {
        data: products = [],
        isLoading,
        error,
    } = useGetProductsQuery({
        categories: selectedCategories,
        brands: selectedBrands,
        sort,
    });


    return (
        <main className={styles.products}>
            <div className={styles.container}>

                <aside className={styles.sidebar}>
                    <ProductSidebar
                        categories={selectedCategories}
                        setCategories={
                            setSelectedCategories
                        }
                        brands={selectedBrands}
                        setBrands={setSelectedBrands}
                    />
                </aside>


                <section className={styles.content}>

                    <div className={styles.toolbar}>
                        <ProductToolbar
                            totalProducts={
                                products.length
                            }
                        />
                    </div>


                    <div className={styles.grid}>

                        {isLoading ? (
                            <p>
                                Loading...
                            </p>
                        ) : error ? (
                            <p>
                                خطا در دریافت محصولات
                            </p>
                        ) : (
                            <ProductGrid
                                products={products}
                            />
                        )}

                    </div>

                </section>

            </div>
        </main>
    );
}

export default ProductsPage;