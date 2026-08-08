import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);

        const categories =
            searchParams.get("categories");

        const brands =
            searchParams.get("brands");

        const search =
            searchParams.get("search");

        const sort =
            searchParams.get("sort") || "newest";


        const filter: any = {};


        // -------------------------
        // Categories
        // -------------------------

        if (categories) {
            filter.category = {
                $in: categories.split(","),
            };
        }


        // -------------------------
        // Brands
        // -------------------------

        if (brands) {
            filter.brand = {
                $in: brands.split(","),
            };
        }


        // -------------------------
        // Search
        // -------------------------

        if (search) {
            filter.title = {
                $regex: search,
                $options: "i",
            };
        }


        // -------------------------
        // Sort
        // -------------------------

        let sortOption: Record<string, 1 | -1> = {
            createdAt: -1,
        };

        switch (sort) {
            case "price-asc":
                sortOption = {
                    price: 1,
                };
                break;

            case "price-desc":
                sortOption = {
                    price: -1,
                };
                break;

            case "available":
                filter.stock = {
                    $gt: 0,
                };
                break;

            case "newest":
            default:
                sortOption = {
                    createdAt: -1,
                };
                break;
        }

        // -------------------------
        // Query
        // -------------------------

        const products = await Product.find(filter)
            .sort(sortOption);


        return NextResponse.json({
            success: true,
            count: products.length,
            products,
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch products",
            },
            {
                status: 500,
            }
        );
    }
}