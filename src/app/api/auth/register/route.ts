import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import User from "@/models/User";
import { connectDB } from "@/lib/db";


export async function POST(
    request: Request
) {

    try {

        await connectDB();


        const {
            name,
            email,
            password,

        } = await request.json();



        if (
            !name ||
            !email ||
            !password
        ) {

            return NextResponse.json(

                {
                    message:
                        "لطفاً تمام فیلدها را وارد کنید",
                },

                {
                    status: 400,
                }

            );

        }



        const existingUser =
            await User.findOne({
                email,
            });



        if (existingUser) {

            return NextResponse.json(

                {
                    message:
                        "این ایمیل قبلاً ثبت شده است",
                },

                {
                    status: 400,
                }

            );

        }



        const hashedPassword =
            await bcrypt.hash(
                password,
                10
            );



        const user =
            await User.create({

                name,

                email,

                password:
                    hashedPassword,

            });



        return NextResponse.json(

            {

                message:
                    "ثبت نام با موفقیت انجام شد",

                user: {

                    id:
                        user._id.toString(),

                    name:
                        user.name,

                    email:
                        user.email,

                    role:
                        user.role,

                },

            },

            {

                status: 201,

            }

        );



    } catch (error) {


        console.error(
            "REGISTER_ERROR:",
            error
        );


        return NextResponse.json(

            {

                message:
                    "خطایی در ثبت نام رخ داد",

            },

            {

                status: 500,

            }

        );

    }

}