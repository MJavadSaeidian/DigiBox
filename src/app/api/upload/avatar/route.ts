import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";



export async function POST(
    request: NextRequest
) {

    try {


        const formData =
            await request.formData();



        const file =
            formData.get("file") as File;



        if(!file){

            return NextResponse.json(
                {
                    message:"File not found"
                },
                {
                    status:400
                }
            );

        }



        // فقط تصویر قبول کن
        if(!file.type.startsWith("image/")){

            return NextResponse.json(
                {
                    message:"Only images allowed"
                },
                {
                    status:400
                }
            );

        }



        const bytes =
            await file.arrayBuffer();


        const buffer =
            Buffer.from(bytes);



        const uploadDir =
            path.join(
                process.cwd(),
                "public/uploads/avatar"
            );



        await mkdir(
            uploadDir,
            {
                recursive:true
            }
        );



        const filename =
            `${Date.now()}-${file.name}`;



        const filepath =
            path.join(
                uploadDir,
                filename
            );



        await writeFile(
            filepath,
            buffer
        );



        return NextResponse.json({

            url:
            `/uploads/avatar/${filename}`

        });



    }
    catch(error){


        console.log(
            "UPLOAD ERROR:",
            error
        );


        return NextResponse.json(
            {
                message:"Upload failed"
            },
            {
                status:500
            }
        );

    }

}