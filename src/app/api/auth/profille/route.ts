import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import bcrypt from "bcryptjs";

import User from "@/models/User";
import { connectDB } from "@/lib/db";


const JWT_SECRET =
    new TextEncoder().encode(
        process.env.JWT_SECRET
    );



export async function PUT(
    request: NextRequest
) {

    try {


        await connectDB();



        const token =
            request.cookies
                .get("token")
                ?.value;



        if(!token){

            return NextResponse.json(
                {
                    message:"Unauthorized"
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



        const userId = payload.id;



        const body =
            await request.json();



        const {
            name,
            email,
            password,
            avatar
        } = body;



        const updateData:any = {};



        if(name){

            updateData.name = name;

        }



        if(email){

            updateData.email = email;

        }



        if(avatar){

            updateData.avatar = avatar;

        }



        if(password){

            updateData.password =
                await bcrypt.hash(
                    password,
                    10
                );

        }



        const updatedUser =
            await User.findByIdAndUpdate(

                userId,

                updateData,

                {
                    new:true
                }

            )
            .select("-password");




        return NextResponse.json({

            user:updatedUser

        });



    }
    catch(error){


        console.log(
            "UPDATE PROFILE ERROR:",
            error
        );


        return NextResponse.json(
            {
                message:"Server error"
            },
            {
                status:500
            }
        );


    }

}