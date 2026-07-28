"use client";


import {
    useState
} from "react";


import {
    useRouter
} from "next/navigation";


import {
    toast
} from "react-toastify";


import styles from "./login.module.scss";



export default function LoginPage() {


    const router = useRouter();



    const [name, setName] =
        useState("");


    const [email, setEmail] =
        useState("");


    const [password, setPassword] =
        useState("");



    const [mode, setMode] =
        useState<"login" | "register">(
            "login"
        );



    const [loading, setLoading] =
        useState(false);




    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();



        try {


            setLoading(true);



            const endpoint =
                mode === "login"

                    ?

                    "/api/auth/login"

                    :

                    "/api/auth/register";





            const body =

                mode === "login"

                    ?

                    {
                        email,
                        password
                    }

                    :

                    {
                        name,
                        email,
                        password
                    };






            const res =

                await fetch(

                    endpoint,

                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },


                        body:
                            JSON.stringify(body)

                    }

                );






            const data =
                await res.json();






            if (!res.ok) {


                toast.error(
                    data.message
                );


                return;


            }






            toast.success(
                data.message
            );







            if (mode === "register") {


                setMode("login");


                setPassword("");

                return;


            }







            window.dispatchEvent(
                new Event("authChange")
            );








            if (
                data.user.role === "admin"
            ) {


                router.push(
                    "/admin"
                );


            }

            else {


                router.push(
                    "/"
                );


            }







        }

        catch (error) {


            toast.error(
                "خطایی رخ داد"
            );


        }


        finally {


            setLoading(false);


        }


    }







    return (


        <main className={styles.login}>


            <div className={styles.card}>


                <h1>

                    {
                        mode === "login"

                            ?

                            "ورود به DigiBox"

                            :

                            "ثبت نام در DigiBox"
                    }


                </h1>





                <form
                    onSubmit={handleSubmit}
                >




                    {
                        mode === "register" && (


                            <input

                                type="text"

                                placeholder="نام"

                                value={name}


                                onChange={
                                    (e) =>
                                        setName(
                                            e.target.value
                                        )
                                }


                            />


                        )
                    }







                    <input

                        type="email"

                        placeholder="ایمیل"


                        value={email}


                        onChange={
                            (e) =>
                                setEmail(
                                    e.target.value
                                )
                        }


                    />








                    <input

                        type="password"

                        placeholder="رمز عبور"


                        value={password}


                        onChange={
                            (e) =>
                                setPassword(
                                    e.target.value
                                )
                        }


                    />








                    <button

                        disabled={loading}

                    >


                        {

                            loading

                                ?

                                "در حال پردازش..."

                                :

                                mode === "login"

                                    ?

                                    "ورود"

                                    :

                                    "ثبت نام"

                        }



                    </button>





                </form>








                <button

                    type="button"

                    className={styles.switch}

                    onClick={() =>

                        setMode(

                            mode === "login"

                                ?

                                "register"

                                :

                                "login"

                        )

                    }

                >
                    {
                        mode === "login"

                            ?

                            <>
                                حساب ندارید؟
                                <span>
                                    {" "}
                                    ثبت نام کنید
                                </span>
                            </>

                            :

                            <>
                                قبلاً ثبت نام کرده‌اید؟
                                <span>
                                    {" "}
                                    وارد شوید
                                </span>
                            </>

                    }



                </button>

            </div>

        </main>


    );


}