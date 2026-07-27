import { NextResponse } from "next/server";

import connectDB from "@/lib/db";
import Product from "@/models/Product";

export async function GET() {

    try {

        await connectDB();

        const products = await Product.find().lean();

        return NextResponse.json(products);

    } catch (error) {

        console.error("API ERROR:", error);

        return NextResponse.json(
            {
                error: String(error),
            },
            {
                status: 500,
            }

        );

    }

}