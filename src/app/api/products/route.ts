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



        const filter: any = {};



        if (categories) {

            filter.category = {

                $in: categories.split(",")

            };

        }



        if (brands) {

            filter.brand = {

                $in: brands.split(",")

            };

        }



        if (search) {

            filter.title = {

                $regex: search,

                $options: "i",

            };

        }




        const products = await Product.find(filter)
            .sort({

                createdAt: -1

            });




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

                message: "Failed to fetch products"

            },

            {

                status: 500

            }

        );


    }

}