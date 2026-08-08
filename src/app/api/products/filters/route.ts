import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

const CATEGORY_ORDER = [
    "موبایل",
    "لپ تاپ",
    "کامپیوتر",
    "گیمینگ",
    "ساعت هوشمند",
    "هدفون و هندزفری",
    "دوربین",
    "تجهیزات ذخیره سازی",
];

export async function GET() {
    try {
        await connectDB();

        const [brands, categories] = await Promise.all([
            Product.distinct("brand"),
            Product.distinct("category"),
        ]);

        const sortedBrands = brands
            .filter(Boolean)
            .sort((a, b) =>
                a.localeCompare(b, "en")
            );

        const availableCategories = categories.filter(Boolean);

        const sortedCategories = [
            ...CATEGORY_ORDER.filter((category) =>
                availableCategories.includes(category)
            ),

            ...availableCategories
                .filter(
                    (category) =>
                        !CATEGORY_ORDER.includes(category)
                )
                .sort((a, b) =>
                    a.localeCompare(b, "fa")
                ),
        ];

        return NextResponse.json({
            brands: sortedBrands,
            categories: sortedCategories,
        });

    } catch (error) {
        console.error(
            "Filters API Error:",
            error
        );

        return NextResponse.json(
            {
                message: "خطا در دریافت فیلترها",
            },
            {
                status: 500,
            }
        );
    }
}

