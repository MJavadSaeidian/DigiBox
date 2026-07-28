"use client";


import {
    useEffect,
    useState
} from "react";

import {
    useRouter
} from "next/navigation";
import { toast } from "react-toastify";
import styles from "./edit.module.scss";



interface User {

    name: string;

    email: string;

    avatar?: string;

}



export default function EditProfile() {


    const router = useRouter();



    const [user, setUser] =
        useState<User | null>(null);



    const [name, setName] =
        useState("");



    const [email, setEmail] =
        useState("");



    const [password, setPassword] =
        useState("");



    const [file, setFile] =
        useState<File | null>(null);



    const [avatar, setAvatar] =
        useState("");



    const [loading, setLoading] =
        useState(false);




    // دریافت اطلاعات فعلی کاربر

    useEffect(() => {


        fetch("/api/auth/me")

            .then(res => res.json())

            .then(data => {


                if (data.user) {


                    setUser(data.user);


                    setName(
                        data.user.name || ""
                    );


                    setEmail(
                        data.user.email || ""
                    );


                    setAvatar(
                        data.user.avatar || ""
                    );


                }


            });


    }, []);





    // انتخاب تصویر

    const handleAvatar = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {


        const selectedFile =
            e.target.files?.[0];



        if (selectedFile) {


            setFile(selectedFile);



            setAvatar(
                URL.createObjectURL(selectedFile)
            );


        }


    };





    // آپلود تصویر

    const uploadAvatar = async () => {


        if (!file)
            return avatar;



        const formData =
            new FormData();



        formData.append(
            "file",
            file
        );



        const res =
            await fetch(
                "/api/upload/avatar",
                {
                    method: "POST",
                    body: formData
                }
            );



        const data =
            await res.json();



        return data.url;

    };





    // ذخیره تغییرات

   const saveProfile = async () => {

    try {

        setLoading(true);


        let avatarUrl = avatar;


        if(file){

            avatarUrl =
                await uploadAvatar();

        }



        const res =
            await fetch(
                "/api/auth/profile",
                {

                    method:"PUT",

                    headers:{
                        "Content-Type":"application/json"
                    },

                    body:JSON.stringify({

                        name,

                        email,

                        password,

                        avatar:avatarUrl

                    })

                }
            );



        if(res.ok){


            toast.success(
                "اطلاعات با موفقیت ذخیره شد"
            );


            setTimeout(()=>{

                router.push("/admin");

            },1500);



        }
        else {


            toast.error(
                "خطا در ذخیره اطلاعات"
            );


        }



    }
    catch(error){


        console.log(
            error
        );


        toast.error(
            "خطای ارتباط با سرور"
        );


    }
    finally{


        setLoading(false);


    }

};





    if (!user) {


        return (

            <main className={styles.container}>

                Loading...

            </main>

        );

    }





    return (

        <main className={styles.container}>


            <section className={styles.card}>


                <h1 className={styles.title}>

                    ویرایش اطلاعات مدیر

                </h1>





                <div className={styles.avatarBox}>


                    <img

                        className={styles.avatar}

                        src={
                            avatar ||
                            "/images/default-avatar.png"
                        }

                        alt="avatar"

                    />




                    <label
                        className={styles.upload}
                    >

                        انتخاب آواتار



                        <input

                            hidden

                            type="file"

                            accept="image/*"

                            onChange={
                                handleAvatar
                            }

                        />


                    </label>


                </div>






                <div className={styles.inputGroup}>


                    <label>
                        نام
                    </label>


                    <input

                        value={name}

                        onChange={
                            e =>
                                setName(
                                    e.target.value
                                )
                        }

                        placeholder="نام شما"

                    />


                </div>







                <div className={styles.inputGroup}>


                    <label>
                        ایمیل
                    </label>


                    <input


                        value={email}


                        onChange={
                            e =>
                                setEmail(
                                    e.target.value
                                )
                        }


                        placeholder="ایمیل"


                    />


                </div>







                <div className={styles.inputGroup}>


                    <label>
                        رمز عبور جدید
                    </label>



                    <input


                        type="password"


                        value={password}


                        onChange={
                            e =>
                                setPassword(
                                    e.target.value
                                )
                        }


                        placeholder="در صورت عدم تغییر خالی بگذارید"


                    />



                </div>







                <button

                    className={styles.button}

                    onClick={saveProfile}

                    disabled={loading}

                >


                    {
                        loading
                            ?
                            "در حال ذخیره..."
                            :
                            "ذخیره تغییرات"
                    }


                </button>





            </section>



        </main>

    );

}