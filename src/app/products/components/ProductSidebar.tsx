"use client";

import { useEffect, useState } from "react";

import styles from "./ProductSidebar.module.scss";

import FilterAccordion from "./FilterAccordion";
import FilterGroup from "@/shared/components/filterGroup";


type ProductSidebarProps = {
    categories: string[];
    setCategories: (value: string[]) => void;

    brands: string[];
    setBrands: (value: string[]) => void;
};


function ProductSidebar({
    categories,
    setCategories,
    brands,
    setBrands,
}: ProductSidebarProps) {

    const [availableCategories, setAvailableCategories] =
        useState<string[]>([]);

    const [availableBrands, setAvailableBrands] =
        useState<string[]>([]);

    const [loading, setLoading] =
        useState(true);


    useEffect(() => {

        async function loadFilters() {

            try {

                const res = await fetch(
                    "/api/products/filters"
                );

                if (!res.ok) {
                    throw new Error(
                        "خطا در دریافت فیلترها"
                    );
                }

                const data = await res.json();

                setAvailableCategories(
                    data.categories ?? []
                );

                setAvailableBrands(
                    data.brands ?? []
                );

            } catch (error) {

                console.error(
                    "خطا در دریافت فیلترها:",
                    error
                );

            } finally {

                setLoading(false);

            }
        }

        loadFilters();

    }, []);


    return (

        <aside className={styles.sidebar}>

            <div className={styles.title}>

                <h2>
                    فیلترها
                </h2>

            </div>


            <div className={styles.divider} />


            <FilterAccordion
                title="دسته‌بندی"
                defaultOpen
            >

                {loading ? (

                    <p>
                        در حال دریافت دسته‌بندی‌ها...
                    </p>

                ) : (

                    <FilterGroup
                        items={availableCategories}
                        selected={categories}
                        onChange={setCategories}
                    />

                )}

            </FilterAccordion>


            <FilterAccordion
                title="برند"
            >

                {loading ? (

                    <p>
                        در حال دریافت برندها...
                    </p>

                ) : (

                    <FilterGroup
                        items={availableBrands}
                        selected={brands}
                        onChange={setBrands}
                    />

                )}

            </FilterAccordion>

        </aside>

    );
}


export default ProductSidebar;