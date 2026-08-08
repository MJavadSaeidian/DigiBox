"use client";

import {
    useState
} from "react";

import {
    useRouter,
    useSearchParams
} from "next/navigation";

import {
    toast
} from "react-toastify";

import styles from "./login.module.scss";



export default function LoginPage() {

    const router = useRouter();

    const searchParams = useSearchParams();



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
                    ? "/api/auth/login"
                    : "/api/auth/register";



            const body =
                mode === "login"
                    ? {
                        email,
                        password
                    }
                    : {
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



            // -----------------------------
            // ثبت نام
            // -----------------------------

            if (mode === "register") {

                setMode("login");

                setPassword("");

                return;
            }



            // -----------------------------
            // اطلاع‌رسانی به بخش‌های دیگر
            // -----------------------------

            window.dispatchEvent(
                new Event("authChange")
            );



            // -----------------------------
            // بررسی محصولی که باید
            // بعد از Login به Cart اضافه شود
            // -----------------------------

            const addToBox =
                searchParams.get(
                    "addToBox"
                );


            const redirect =
                searchParams.get(
                    "redirect"
                );



            // -----------------------------
            // اگر محصولی برای افزودن
            // وجود داشته باشد
            // -----------------------------

            if (addToBox) {

                try {

                    const cartResponse =
                        await fetch(
                            "/api/cart",
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body:
                                    JSON.stringify({
                                        productId:
                                            addToBox
                                    })
                            }
                        );



                    const cartData =
                        await cartResponse.json();



                    if (!cartResponse.ok) {

                        toast.error(
                            cartData.message ||
                            "افزودن محصول به جعبه خرید انجام نشد."
                        );

                    }

                    else {

                        toast.success(
                            "محصول به جعبه خرید اضافه شد."
                        );

                    }

                }

                catch (error) {

                    console.error(
                        "Add to cart error:",
                        error
                    );

                    toast.error(
                        "خطا در افزودن محصول به جعبه خرید."
                    );

                }

            }



            // -----------------------------
            // مقصد نهایی
            // -----------------------------

            if (
                redirect
            ) {

                router.push(
                    redirect
                );

                return;
            }



            // -----------------------------
            // اگر مقصدی وجود نداشت
            // -----------------------------

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

            console.error(
                "Login error:",
                error
            );

            toast.error(
                "خطایی رخ داد"
            );

        }

        finally {

            setLoading(false);

        }

    }




    return (

        <main
            className={styles.login}
        >

            <div
                className={styles.card}
            >

                <h1>

                    {
                        mode === "login"
                            ? "ورود به DigiBox"
                            : "ثبت نام در DigiBox"
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

                                ? "در حال پردازش..."

                                : mode === "login"
                                    ? "ورود"
                                    : "ثبت نام"
                        }

                    </button>


                </form>



                <button

                    type="button"

                    className={styles.switch}

                    onClick={() =>
                        setMode(
                            mode === "login"
                                ? "register"
                                : "login"
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

