import { connectDB } from "@/lib/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function POST(
    request: Request
) {

    try {


        await connectDB();



        const body =
            await request.json();



        const product =
            await Product.create(body);



        return NextResponse.json(

            {
                message:
                    "محصول با موفقیت ایجاد شد",

                product

            },

            {
                status: 201
            }

        );


    }
    catch (error) {


        console.log(
            "CREATE_PRODUCT_ERROR:",
            error
        );


        return NextResponse.json(

            {
                message:
                    "خطا در ایجاد محصول"
            },

            {
                status: 500
            }

        );

    }



}