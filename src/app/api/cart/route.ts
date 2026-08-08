
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

import { connectDB } from "@/lib/db";
import Cart from "@/models/Cart";
import Product from "@/models/Product";

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET
);


/*
|--------------------------------------------------------------------------
| GET CART
|--------------------------------------------------------------------------
*/

export async function GET(
    request: NextRequest
) {

    try {

        await connectDB();


        // دریافت JWT

        const token =
            request.cookies
                .get("token")
                ?.value;


        if (!token) {

            return NextResponse.json(
                {
                    message:
                        "برای مشاهده جعبه خرید باید وارد حساب کاربری شوید."
                },
                {
                    status: 401
                }
            );

        }


        // اعتبارسنجی JWT

        const { payload } =
            await jwtVerify(
                token,
                JWT_SECRET
            );


        const userId =
            payload.id;


        if (!userId) {

            return NextResponse.json(
                {
                    message:
                        "توکن کاربر معتبر نیست."
                },
                {
                    status: 401
                }
            );

        }


        // پیدا کردن Cart

        const cart =
            await Cart
                .findOne({
                    user: userId
                })
                .populate({
                    path: "items.product",
                    select:
                        "title brand price previousPrice images stock"
                });


        // اگر Cart وجود نداشت

        if (!cart) {

            return NextResponse.json({

                cart: {
                    items: []
                }

            });

        }


        return NextResponse.json({

            cart

        });

    }

    catch (error) {

        console.error(
            "Get cart error:",
            error
        );


        return NextResponse.json(
            {
                message:
                    "خطا در دریافت جعبه خرید."
            },
            {
                status: 500
            }
        );

    }

}


/*
|--------------------------------------------------------------------------
| ADD TO CART
|--------------------------------------------------------------------------
*/

export async function POST(
    request: NextRequest
) {

    try {

        await connectDB();


        // دریافت JWT

        const token =
            request.cookies
                .get("token")
                ?.value;


        if (!token) {

            return NextResponse.json(
                {
                    message:
                        "برای افزودن محصول باید وارد حساب کاربری شوید."
                },
                {
                    status: 401
                }
            );

        }


        // اعتبارسنجی JWT

        const { payload } =
            await jwtVerify(
                token,
                JWT_SECRET
            );


        const userId =
            payload.id;


        if (!userId) {

            return NextResponse.json(
                {
                    message:
                        "توکن کاربر معتبر نیست."
                },
                {
                    status: 401
                }
            );

        }


        // دریافت productId

        const body =
            await request.json();


        const {
            productId
        } = body;


        if (!productId) {

            return NextResponse.json(
                {
                    message:
                        "شناسه محصول الزامی است."
                },
                {
                    status: 400
                }
            );

        }


        // بررسی وجود محصول

        const product =
            await Product.findById(
                productId
            );


        if (!product) {

            return NextResponse.json(
                {
                    message:
                        "محصول پیدا نشد."
                },
                {
                    status: 404
                }
            );

        }


        // بررسی موجودی

        if (product.stock <= 0) {

            return NextResponse.json(
                {
                    message:
                        "این محصول موجود نیست."
                },
                {
                    status: 400
                }
            );

        }


        // پیدا کردن Cart

        let cart =
            await Cart.findOne({
                user: userId
            });


        // ساخت Cart جدید

        if (!cart) {

            cart =
                await Cart.create({

                    user: userId,

                    items: [

                        {
                            product:
                                productId,

                            quantity:
                                1
                        }

                    ]

                });


            return NextResponse.json(
                {
                    message:
                        "محصول به جعبه خرید اضافه شد.",

                    cart

                },
                {
                    status: 201
                }
            );

        }


        // بررسی وجود محصول

        const existingItem =
            cart.items.find(
                (item) =>
                    item.product.toString() ===
                    productId
            );


        if (existingItem) {

            /*
             * محصول قبلاً داخل جعبه خرید است
             * فقط تعداد را افزایش می‌دهیم
             */

            existingItem.quantity += 1;

        }

        else {

            /*
             * محصول جدید
             */

            cart.items.push({

                product:
                    productId,

                quantity:
                    1

            });

        }


        await cart.save();


        return NextResponse.json(
            {
                message:
                    "محصول به جعبه خرید اضافه شد.",

                cart

            },
            {
                status: 200
            }
        );

    }

    catch (error) {

        console.error(
            "Add to cart error:",
            error
        );


        return NextResponse.json(
            {
                message:
                    "خطا در افزودن محصول به جعبه خرید."
            },
            {
                status: 500
            }
        );

    }

}

