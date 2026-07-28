import { NextResponse } from "next/server";

import connectDB from "@/lib/db";
import Product from "@/models/Product";

import { PRODUCTS } from "@/seed/products";

export async function GET() {

    try {

        await connectDB();

        await Product.deleteMany({});

        await Product.insertMany(PRODUCTS);

        return NextResponse.json({

            success: true,

            message: "Products inserted successfully",

        });

    } catch (error) {

        console.error(error);

        return NextResponse.json(

            {

                success: false,

                message: "Seed failed",

            },

            {

                status: 500,

            }

        );

    }

}