"use client";

import Image from "next/image";
import Link from "next/link";

import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";


import styles from "./ProductTable.module.scss";
import { useGetProductsQuery } from "@/shared/services/productApi";

export default function ProductTable() {

    const {

        data: products = [],

        isLoading,

    } = useGetProductsQuery();


    if (isLoading) {

        return <p>در حال دریافت محصولات...</p>;

    }


    return (
        <>

            <div className={styles.header}>

                <div>

                    <h1 className={styles.title}>
                        مدیریت محصولات
                    </h1>

                    <p className={styles.count}>
                        {products.length} محصول
                    </p>

                </div>

                <Link
                    href="/admin/products/add"
                    className={styles.addButton}
                >
                    + افزودن محصول
                </Link>

            </div>
            <div className={styles.tableWrapper}>

                <table className={styles.table}>

                    <thead>

                        <tr>

                            <th>تصویر</th>

                            <th>نام محصول</th>

                            <th>برند</th>
                            <th>دسته بندی</th>

                            <th>قیمت</th>

                            <th>موجودی</th>

                            <th>ویژه</th>

                            <th>عملیات</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            products.map((product) => (

                                <tr key={product._id}>

                                    <td>

                                        <Image

                                            src={product.images[0]}

                                            alt={product.title}

                                            width={60}

                                            height={60}

                                        />

                                    </td>

                                    <td>

                                        {product.title}

                                    </td>

                                    <td>

                                        {product.brand}

                                    </td>

                                    <td>
                                        {product.category}
                                    </td>

                                    <td>

                                        {Number(product.price).toLocaleString()}

                                    </td>

                                    <td>

                                        {product.stock}

                                    </td>

                                    <td>

                                        {

                                            product.featured

                                                ?

                                                <BsCheckCircleFill className={styles.success} />

                                                :

                                                <BsXCircleFill className={styles.danger} />

                                        }

                                    </td>

                                    <td>

                                        <div className={styles.actions}>

                                            <Link

                                                href={`/admin/products/edit/${product._id}`}

                                                className={styles.edit}

                                            >

                                                <FiEdit2 />

                                            </Link>

                                            <button

                                                className={styles.delete}

                                            >

                                                <FiTrash2 />

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>
        </>
    );

}