"use client";

import styles from "./ProductSidebar.module.scss";
import FilterAccordion from "./FilterAccordion";
import FilterGroup from "@/shared/components/filterGroup";
import { BRANDS, CATEGORIES, } from "@/shared/constants/productFilters";


function ProductSidebar({
    categories,
    setCategories,
    brands,
    setBrands,
}: {
    categories: string[];
    setCategories: (value: string[]) => void;
    brands: string[];
    setBrands: (value: string[]) => void;
})  {


    return (

        <aside className={styles.sidebar}>

            <div className={styles.title}>

                <h2>فیلترها</h2>

            </div>

            <div className={styles.divider}></div>

            <FilterAccordion
                title="دسته‌بندی"
                defaultOpen
            >

                <FilterGroup
                    items={CATEGORIES}
                    selected={categories}
                    onChange={setCategories}
                />

            </FilterAccordion>

            <FilterAccordion title="برند">

                <FilterGroup
                    items={BRANDS}
                    selected={brands}
                    onChange={setBrands}
                />

            </FilterAccordion>

        </aside>

    );

}

export default ProductSidebar;