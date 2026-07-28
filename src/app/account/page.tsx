"use client";


import {
    useEffect,
    useState
} from "react";


import {
    useRouter
} from "next/navigation";


import {
    toast
} from "react-toastify";


import styles from "./Account.module.scss";



export default function AccountPage() {


    const router = useRouter();


    const [user, setUser] =
        useState<any>(null);



    useEffect(() => {


        async function getUser() {


            const res =
                await fetch(
                    "/api/auth/me"
                );


            const data =
                await res.json();



            if (!data.user) {

                router.push("/login");

                return;

            }


            setUser(data.user);

            console.log(data.user);
        }


        getUser();


    }, [router]);





    async function logout() {

        await fetch(
            "/api/auth/logout",
            {
                method: "POST"
            }
        );


        window.dispatchEvent(
            new Event("authChange")
        );


        window.location.href = "/";

    }





    if (!user) {

        return null;

    }



    return (

        <main className={styles.account}>


            <section className={styles.card}>


                <div className={styles.avatar}>

                    <span>
                        {user.email[0].toUpperCase()}
                    </span>

                </div>


                <p>
                    سطح دسترسی : {user.role}
                </p>

                <p>
                    نام :  {user.name}
                </p>

                <p>
                    ایمیل : {user.email}
                </p>




            </section>



            <section className={styles.menu}>


                <button>

                    👤 اطلاعات شخصی

                </button>


                <button>

                    📦 سفارش‌های من

                </button>


                <button>

                    ❤️ علاقه‌مندی‌ها

                </button>


                <button>

                    📍 آدرس‌ها

                </button>



                <button
                    className={styles.logout}
                    onClick={logout}
                >

                    🚪 خروج از حساب

                </button>


            </section>


        </main>

    );

}