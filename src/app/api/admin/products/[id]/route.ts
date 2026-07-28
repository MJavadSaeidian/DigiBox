import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

type Props = {

    params: Promise<{

        id: string;

    }>;

};

export async function GET(

    request: Request,

    { params }: Props

) {

    try {

        await connectDB();

        const { id } =
            await params;

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

export async function PUT(

    request: Request,

    { params }: Props

) {

    try {

        await connectDB();

        const { id } =
            await params;

        const body =
            await request.json();

        const product =
            await Product.findByIdAndUpdate(

                id,

                body,

                {

                    new: true,

                    runValidators: true,

                }

            );

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

        return NextResponse.json(

            {

                message: "محصول با موفقیت ویرایش شد",

                product,

            }

        );

    }

    catch (error) {

        console.log(error);

        return NextResponse.json(

            {

                message: "خطا در ویرایش محصول"

            },

            {

                status: 500

            }

        );

    }

}