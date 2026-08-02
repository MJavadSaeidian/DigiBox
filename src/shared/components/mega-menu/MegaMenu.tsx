"use client";

import { useState } from "react";

import styles from "./MegaMenu.module.scss";
import { MENU_CATEGORIES } from "@/shared/constants/menuCategories";
import Link from "next/link";



function MegaMenu() {


    const [activeCategory, setActiveCategory] = useState(
        MENU_CATEGORIES[0]
    );


    return (

        <div className={styles.menu}>


            <div className={styles.categories}>


                {
                    MENU_CATEGORIES.map((category) => (
                        <div
                         key={category.title}
                            className={`
                                ${styles.category}
                                ${activeCategory.title === category.title
                                    ?
                                    styles.active
                                    :
                                    ""
                                }
                            `}>


                            <Link
                                key={category.title}

                                onMouseEnter={() =>
                                    setActiveCategory(category)
                                }

                                href={{
                                    pathname: "/products",
                                    query: {
                                        categories: category.title,
                                    },
                                }}
                            >

                                {category.title}

                            </Link>
                        </div>
                    ))
                }


            </div>


        </div>

    );
}


export default MegaMenu;