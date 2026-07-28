import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";

import Product from "@/models/Product";


 export async function GET() {

        try {

            await connectDB();


           const products =
    await Product.find({
        featured: true
    })
    .sort({
        featuredOrder: 1
    });

            return NextResponse.json(
                {
                    products
                },
                {
                    status: 200
                }
            );


        }
        catch (error) {

            return NextResponse.json(

                {
                    message:
                        "خطا در دریافت محصولات"
                },

                {
                    status: 500
                }

            );

        }

    }