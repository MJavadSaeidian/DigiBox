import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export async function GET() {
    try {
        await connectDB();

        const brands = await Product.distinct("brand");

        const sortedBrands = brands
            .filter(
                (brand): brand is string =>
                    typeof brand === "string" &&
                    brand.trim().length > 0
            )
            .sort((a, b) =>
                a.localeCompare(b, "fa")
            );

        return NextResponse.json(sortedBrands);

    } catch (error) {

        console.error(
            "GET /api/admin/products/brands ERROR:",
            error
        );

        return NextResponse.json(
            {
                message:
                    error instanceof Error
                        ? error.message
                        : "خطا در دریافت برندها",
            },
            {
                status: 500,
            }
        );
    }
}