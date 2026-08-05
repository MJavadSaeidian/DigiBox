"use client";

import Image from "next/image";
import Link from "next/link";

import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

import { useGetSpecialBoxesQuery } from "@/shared/services/specialBoxApi";

import styles from "./SpecialBoxTable.module.scss";

export default function SpecialBoxTable() {

    const {

        data: boxes = [],

        isLoading,

    } = useGetSpecialBoxesQuery();


    if (isLoading) {

        return <p>در حال دریافت جعبه‌های ویژه...</p>;

    }


    return (

        <>

            <div className={styles.header}>

                <div>

                    <h1 className={styles.title}>
                        مدیریت جعبه‌های ویژه
                    </h1>

                    <p className={styles.count}>
                        {boxes.length} جعبه
                    </p>

                </div>

                <Link
                    href="/admin/special-boxes/add"
                    className={styles.addButton}
                >
                    + افزودن جعبه
                </Link>

            </div>

            <div className={styles.tableWrapper}>

                <table className={styles.table}>

                    <thead>

                        <tr>

                            <th>تصویر</th>

                            <th>نام جعبه</th>

                            <th>تعداد محصولات</th>

                            <th>قیمت جعبه</th>

                            <th>وضعیت</th>

                            <th>عملیات</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            boxes.map((box) => (

                                <tr key={box._id}>

                                    <td>

                                        <Image
                                            src={box.image}
                                            alt={box.title}
                                            width={60}
                                            height={60}
                                        />

                                    </td>

                                    <td>

                                        {box.title}

                                    </td>

                                    <td>

                                        {box.products.length}

                                    </td>

                                    <td>

                                        {Number(box.boxPrice).toLocaleString()}

                                    </td>

                                    <td>

                                        {

                                            box.active

                                                ?

                                                <BsCheckCircleFill className={styles.success} />

                                                :

                                                <BsXCircleFill className={styles.danger} />

                                        }

                                    </td>

                                    <td>

                                        <div className={styles.actions}>

                                            <Link
                                                href={`/admin/special-boxes/edit/${box._id}`}
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