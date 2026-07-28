"use client";


import dynamic from "next/dynamic";


const UploadcareUploader = dynamic(

    () =>

        import(
            "@uploadcare/react-uploader"
        )
        .then(
            (mod) =>
                mod.FileUploaderRegular
        ),

    {
        ssr:false
    }

);


import "@uploadcare/react-uploader/core.css";



type ImageUploaderProps = {

    onChange:
        (images:string[])=>void;

};



export default function ImageUploader({

    onChange

}:ImageUploaderProps){



    return (

        <UploadcareUploader


            pubkey={
                process.env
                .NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY!
            }


            multiple={true}



            onChange={(fileList)=>{


                const urls:string[] =

                    fileList.allEntries

                    .filter(
                        file =>
                            file.status === "success"
                    )

                    .map(
                        file =>
                            file.cdnUrl ?? ""
                    )

                    .filter(
                        url =>
                            url !== ""
                    );


                onChange(urls);


            }}


        />

    );

}