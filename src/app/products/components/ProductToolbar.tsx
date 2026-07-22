"use client";
import { useState } from "react"
import styles from "./ProductToolbar.module.scss"
import Select from "@/shared/components/select"


type ProductToolbarProps = {
    totalProducts: number
}

function ProductToolbar({
    totalProducts
}: ProductToolbarProps) {

    const [sort,setSort]=useState("جدید ترین")

    return (

        <div className={styles.toolbar}>

            <div className={styles.info}>
                <h1>همه محصولات</h1>
                <span>{totalProducts} محصول</span>
            </div>

            <div className={styles.sort}>

                <span>مرتب سازی:</span>

                <Select
                value={sort}
                onChange={setSort}
                options={[
                    "جدید ترین",
                    "پرفروش ترین",
                    "ارزان ترین",
                    "گران ترین"
                ]}
                />

            </div>

        </div>
    )
}

export default ProductToolbar