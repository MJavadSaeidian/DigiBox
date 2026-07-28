import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";


const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET
);


export async function proxy(request: NextRequest) {

    console.log("========== PROXY START ==========");


    const pathname = request.nextUrl.pathname;

    console.log("PATH:", pathname);



    // فقط مسیرهای admin
    if (pathname.startsWith("/admin")) {


        console.log("ADMIN ROUTE DETECTED");


        const token = request.cookies.get("token")?.value;


        console.log(
            "TOKEN EXISTS:",
            Boolean(token)
        );


        if (!token) {

            console.log(
                "NO TOKEN -> REDIRECT LOGIN"
            );


            return NextResponse.redirect(
                new URL("/login", request.url)
            );

        }



        try {


            const { payload } = await jwtVerify(
                token,
                JWT_SECRET
            );


            console.log(
                "JWT PAYLOAD:",
                payload
            );



            console.log(
                "USER ROLE:",
                payload.role
            );



            if (payload.role !== "admin") {


                console.log(
                    "USER IS NOT ADMIN -> REDIRECT HOME"
                );


                return NextResponse.redirect(
                    new URL("/", request.url)
                );

            }



            console.log(
                "ADMIN ACCESS GRANTED"
            );



        } catch(error) {


            console.log(
                "JWT VERIFY ERROR:",
                error
            );


            return NextResponse.redirect(
                new URL("/login", request.url)
            );

        }

    }


    console.log(
        "========== PROXY END =========="
    );


    return NextResponse.next();

}



export const config = {
    matcher: [
        "/admin/:path*"
    ],
};