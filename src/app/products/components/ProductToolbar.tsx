"use client";

import {
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";

import styles from "./ProductToolbar.module.scss";
import Select from "@/shared/components/select";

type ProductToolbarProps = {
    totalProducts: number;
};

const SORT_OPTIONS = [
    "جدید ترین",
    "ارزان ترین",
    "گران ترین",
    "فقط موجود",
];

const SORT_VALUES: Record<string, string> = {
    "جدید ترین": "newest",
    "ارزان ترین": "price-asc",
    "گران ترین": "price-desc",
    "فقط موجود": "available",
};

const SORT_LABELS: Record<string, string> = {
    newest: "جدید ترین",
    "price-asc": "ارزان ترین",
    "price-desc": "گران ترین",
    available: "فقط موجود",
};

function ProductToolbar({
    totalProducts,
}: ProductToolbarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentSort =
        searchParams.get("sort") || "newest";

    const handleSortChange = (label: string) => {
        const value = SORT_VALUES[label];

        if (!value) return;

        const params = new URLSearchParams(
            searchParams.toString()
        );

        params.set("sort", value);

        router.push(
            `${pathname}?${params.toString()}`,
            {
                scroll: false,
            }
        );
    };

    return (
        <div className={styles.toolbar}>

            <div className={styles.info}>
                <h1>همه محصولات</h1>

                <span>
                    {totalProducts} محصول
                </span>
            </div>

            <div className={styles.sort}>

                <span>مرتب سازی:</span>

                <Select
                    value={
                        SORT_LABELS[currentSort] ||
                        SORT_LABELS.newest
                    }
                    onChange={handleSortChange}
                    options={SORT_OPTIONS}
                />

            </div>

        </div>
    );
}

export default ProductToolbar;