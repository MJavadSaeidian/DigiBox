import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import User from "@/models/User";
import { connectDB } from "@/lib/db";


const JWT_SECRET =
new TextEncoder().encode(
    process.env.JWT_SECRET
);



export async function GET(
    request:NextRequest
){

    try {


        await connectDB();



        const token =
        request.cookies
        .get("token")
        ?.value;



        if(!token){

            return NextResponse.json(
                {
                    user:null
                },
                {
                    status:401
                }
            );

        }



        const {payload} =
        await jwtVerify(
            token,
            JWT_SECRET
        );



        const user =
        await User.findById(
            payload.id
        )
        .select(
            "-password"
        );



        return NextResponse.json({

            user

        });



    }
    catch(error){


        console.log(error);


        return NextResponse.json(
            {
                user:null
            },
            {
                status:500
            }
        );


    }

}