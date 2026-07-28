import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

type RouteParams = {
    params: Promise<{
        id: string;
    }>;
};

export async function GET(
    request: Request,
    { params }: RouteParams
) {

    try {

        await connectDB();

        const { id } = await params;

        const product =
            await Product.findById(id);

        if (!product) {

            return NextResponse.json(
                {
                    message: "محصول پیدا نشد"
                },
                {
                    status: 404
                }
            );

        }

        return NextResponse.json(product);

    }

    catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                message: "خطا"
            },
            {
                status: 500
            }
        );

    }

}