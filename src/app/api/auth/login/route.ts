import {
    NextResponse
} from "next/server";


import bcrypt from "bcryptjs";


import User from "@/models/User";

import {
    connectDB
} from "@/lib/db";


import {
    generateToken
} from "@/lib/jwt";



export async function POST(
    request: Request
) {


    try {


        await connectDB();



        const {
            email,
            password

        } = await request.json();




        if(
            !email ||
            !password
        ){

            return NextResponse.json(

                {
                    message:
                    "ایمیل و رمز عبور الزامی است"
                },

                {
                    status:400
                }

            );

        }




        const user =
            await User.findOne({
                email
            });



        if(!user){

            return NextResponse.json(

                {
                    message:
                    "کاربری با این ایمیل وجود ندارد"
                },

                {
                    status:404
                }

            );

        }




        const isPasswordValid =
            await bcrypt.compare(

                password,

                user.password

            );



        if(!isPasswordValid){

            return NextResponse.json(

                {
                    message:
                    "رمز عبور اشتباه است"
                },

                {
                    status:401
                }

            );

        }




        const token =
            generateToken({

                id:
                user._id.toString(),

                email:
                user.email,

                role:
                user.role,

                name:
                user.name

            });





        const response =
            NextResponse.json(

                {

                    message:
                    "ورود موفق بود",

                    user:{

                        id:
                        user._id.toString(),

                        name:
                        user.name,

                        email:
                        user.email,

                        role:
                        user.role

                    }

                },

                {

                    status:200

                } ,
                

            );





        response.cookies.set(

            "token",

            token,

            {

                httpOnly:true,

                secure:
                    process.env.NODE_ENV === "production",

                sameSite:"lax",

                maxAge:
                    60 * 60 * 24 * 7,

                path:"/",

            }

        );
        
        return response;



    }

    catch(error){


        console.error(
            "LOGIN_ERROR:",
            error
        );


        return NextResponse.json(

            {

                message:
                "خطایی در ورود رخ داد"

            },

            {

                status:500

            }

        );

    }

}