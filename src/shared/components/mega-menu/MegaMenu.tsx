"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { FaMobileAlt } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { IoMdLaptop } from "react-icons/io";
import { GrGamepad } from "react-icons/gr";
import { TbDeviceWatch } from "react-icons/tb";
import { IoHeadset } from "react-icons/io5";
import { BsCameraFill } from "react-icons/bs";
import { LuHardDriveDownload } from "react-icons/lu";
import { MdCategory } from "react-icons/md";
import { FiChevronLeft } from "react-icons/fi";

import styles from "./MegaMenu.module.scss";

const categoryIcons: Record<string, React.ReactNode> = {
    "موبایل": <FaMobileAlt />,
    "لپ تاپ": <IoMdLaptop />,
    "لپ‌ تاپ": <IoMdLaptop />,
    "کامپیوتر و قطعات": <FaComputer />,
    "گیمینگ": <GrGamepad />,
    "ساعت هوشمند": <TbDeviceWatch />,
    "هدفون و هندزفری": <IoHeadset />,
    "دوربین": <BsCameraFill />,
    "تجهیزات ذخیره سازی": <LuHardDriveDownload />,
};

function MegaMenu() {
    const [categories, setCategories] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(
                    "/api/products/filters"
                );

                if (!response.ok) {
                    throw new Error(
                        "خطا در دریافت دسته‌بندی‌ها"
                    );
                }

                const data = await response.json();

                const apiCategories = Array.isArray(
                    data.categories
                )
                    ? data.categories.filter(Boolean)
                    : [];

                setCategories(apiCategories);

                if (apiCategories.length > 0) {
                    setActiveCategory(apiCategories[0]);
                }
            } catch (error) {
                console.error(
                    "MegaMenu Error:",
                    error
                );
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className={styles.menu}>
            <div className={styles.header}>
                <span>دسته‌بندی محصولات</span>
                <Link href="./products" >
                    <span className={styles.count}>
                        همه محصولات : {categories.length}
                    </span>

                </Link>
            </div>

            <div className={styles.divider} />

            <div className={styles.categories}>
                {categories.map((category) => {
                    const isActive =
                        activeCategory === category;

                    return (
                        <Link
                            key={category}
                            href={{
                                pathname: "/products",
                                query: {
                                    categories: category,
                                },
                            }}
                            className={`${styles.category} ${isActive
                                    ? styles.active
                                    : ""
                                }`}
                            onMouseEnter={() =>
                                setActiveCategory(category)
                            }
                        >
                            <span className={styles.categoryContent}>
                                <span className={styles.icon}>
                                    {categoryIcons[category] ?? (
                                        <MdCategory />
                                    )}
                                </span>

                                <span className={styles.name}>
                                    {category}
                                </span>
                            </span>

                            <FiChevronLeft
                                className={styles.arrow}
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default MegaMenu;
