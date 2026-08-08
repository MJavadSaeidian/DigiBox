import {
    NextRequest,
    NextResponse
} from "next/server";


export async function GET(
    request: NextRequest
) {

    try {

        const searchParams =
            request.nextUrl.searchParams;


        const lat =
            searchParams.get("lat");


        const lon =
            searchParams.get("lon");


        if (!lat || !lon) {

            return NextResponse.json(
                {
                    message:
                        "مختصات ارسال نشده است."
                },
                {
                    status: 400
                }
            );

        }


        const response =
            await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&format=json&accept-language=fa`,
                {
                    headers: {
                        "User-Agent":
                            "DigiBox/1.0"
                    },

                    cache: "no-store"
                }
            );


        if (!response.ok) {

            return NextResponse.json(
                {
                    message:
                        "دریافت آدرس انجام نشد."
                },
                {
                    status: 500
                }
            );

        }


        const data =
            await response.json();


        const address =
            data.address || {};


        return NextResponse.json({

            city:
                address.city ||
                address.town ||
                address.village ||
                address.municipality ||
                "",


            province:
                address.state ||
                "",


            road:
                address.road ||
                "",


            neighbourhood:
                address.neighbourhood ||
                address.suburb ||
                "",


            houseNumber:
                address.house_number ||
                "",


            displayName:
                data.display_name ||
                "",

        });


    } catch (error) {

        console.error(
            "Reverse geocoding error:",
            error
        );


        return NextResponse.json(
            {
                message:
                    "خطا در دریافت آدرس."
            },
            {
                status: 500
            }
        );

    }

}

