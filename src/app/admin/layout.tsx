import Sidebar from "@/features/admin/components/Sidebar";
import AdminHeader from "@/features/admin/components/AdminHeader";

import styles from "./AdminLayout.module.scss";


export default function AdminLayout({

    children

}: {

    children: React.ReactNode

}) {


    return (

        <div className={styles.layout}>


            <Sidebar />


            <main className={styles.main}>


                <AdminHeader />


                <section className={styles.content}>

                    {children}

                </section>


            </main>


        </div>

    );

}