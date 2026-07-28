"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./admin.module.scss";
import { useGetProductsQuery } from "@/shared/services/productApi";


interface User {

    name?: string;

    email?: string;

    role?: string;

    avatar?: string;

}



export default function AdminPage() {

    const {

        data: products = [],

        isLoading,

    } = useGetProductsQuery();

    const [user, setUser] = useState<User | null>(null);

    const router = useRouter();



    useEffect(() => {


        fetch("/api/auth/me")

            .then(res => res.json())

            .then(data => {


                if (data.user) {

                    setUser(data.user);

                }
                else {

                    router.push("/login");

                }


            })

            .catch(() => {

                router.push("/login");

            });



    }, [router]);




    const logout = async () => {


        await fetch(
            "/api/auth/logout",
            {
                method: "POST"
            }
        );


        router.push("/login");


    };



    if (!user) {

        return (
            <div className={styles.container}>
                Loading...
            </div>
        )

    }



    return (

        <main className={styles.container}>


            <div className={styles.wrapper}>


                <header className={styles.header}>

                    <h1>
                        DigiBox Admin Panel
                    </h1>

                    <p>
                        مدیریت فروشگاه دیجیتال دیجی باکس
                    </p>

                </header>



                <section className={styles.dashboard}>


                    <div className={styles.profile}>


                        <div className={styles.avatar}>

                            {
                                user.avatar ?

                                    <img
                                        src={user.avatar}
                                        alt="avatar"
                                    />

                                    :

                                    "👤"
                            }

                        </div>



                        <div className={styles.info}>


                            <h2>
                                اطلاعات مدیر
                            </h2>


                            <p>
                                ایمیل: {user.email}
                            </p>


                            <p>
                                نقش: {user.role}
                            </p>


                            <p>
                                وضعیت: فعال
                            </p>


                        </div>




                        <div className={styles.actions}>


                            <button
                                className={styles.edit}
                                onClick={() =>
                                    router.push("/admin/profile/edit")
                                }
                            >
                                ویرایش اطلاعات
                            </button>



                            <button
                                className={styles.logout}
                                onClick={logout}
                            >
                                خروج از حساب
                            </button>


                        </div>



                    </div>



                    <div className={styles.stats}>


                        <div className={styles.stat}>

                            <h3>
                                {products.length}
                            </h3>

                            <p>
                                محصولات
                            </p>

                        </div>



                        <div className={styles.stat}>

                            <h3>
                                در دست تعمیر
                            </h3>

                            <p>
                                سفارشات
                            </p>

                        </div>



                        <div className={styles.stat}>

                            <h3>
                                در دست تعمیر
                            </h3>

                            <p>
                                کاربران
                            </p>

                        </div>


                    </div>



                </section>



            </div>


        </main>

    )
}