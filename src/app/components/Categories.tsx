"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
    IoMdLaptop,
} from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { GrGamepad } from "react-icons/gr";
import { TbDeviceWatch } from "react-icons/tb";
import { IoHeadset } from "react-icons/io5";
import { BsCameraFill } from "react-icons/bs";
import { LuHardDriveDownload } from "react-icons/lu";
import { MdCategory } from "react-icons/md";

import styles from "./Categories.module.scss";

const categoryIcons: Record<string, React.ReactNode> = {
    "موبایل": <FaMobileAlt />,
    "لپ تاپ": <IoMdLaptop />,
    "کامپیوتر": <FaComputer />,
    "گیمینگ": <GrGamepad />,
    "ساعت هوشمند": <TbDeviceWatch />,
    "هدفون و هندزفری": <IoHeadset />,
    "دوربین": <BsCameraFill />,
    "تجهیزات ذخیره سازی": <LuHardDriveDownload />,
};

function Categories() {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("/api/products/filters");

                if (!response.ok) {
                    throw new Error("خطا در دریافت دسته‌بندی‌ها");
                }

                const data = await response.json();

                if (Array.isArray(data.categories)) {
                    setCategories(
                        data.categories.filter(Boolean)
                    );
                }
            } catch (error) {
                console.error(
                    "Failed to fetch categories:",
                    error
                );
            }
        };

        fetchCategories();
    }, []);

    return (
        <section className={styles.categories}>
            <div className={styles.container}>

                <h2 className={styles.title}>
                    دسته بندی محصولات
                </h2>

                <div className={styles.grid}>
                    {categories.map((category) => (
                        <Link
                            key={category}
                            href={{
                                pathname: "/products",
                                query: {
                                    categories: category,
                                },
                            }}
                            className={styles.card}
                        >
                            <div className={styles.icon}>
                                {categoryIcons[category] ?? (
                                    <MdCategory />
                                )}
                            </div>

                            <h3>{category}</h3>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Categories;
