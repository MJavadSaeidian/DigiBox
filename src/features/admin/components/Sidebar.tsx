import Link from "next/link";
import {
    LuLayoutDashboard,
    LuPackage,
    LuUsers,
    LuShoppingCart,
    LuSettings,
} from "react-icons/lu";

import styles from "./Sidebar.module.scss";


const menuItems = [

    {
        title: "داشبورد",
        href: "/admin",
        icon: <LuLayoutDashboard />,
    },

    {
        title: "محصولات",
        href: "/admin/products",
        icon: <LuPackage />,
    },

    {
        title: "سفارش‌ها",
        href: "/admin/orders",
        icon: <LuShoppingCart />,
    },

    {
        title: "کاربران",
        href: "/admin/users",
        icon: <LuUsers />,
    },

    {
        title: "تنظیمات",
        href: "/admin/settings",
        icon: <LuSettings />,
    },

];


function Sidebar(){


    return (

        <aside className={styles.sidebar}>


            <div className={styles.logo}>

                DigiBox Admin

            </div>


            <nav>


                {
                    menuItems.map(
                        (item)=> (

                            <Link
                                key={item.href}
                                href={item.href}
                                className={styles.item}
                            >

                                <span>
                                    {item.icon}
                                </span>

                                {item.title}

                            </Link>

                        )
                    )
                }


            </nav>


        </aside>

    );

}


export default Sidebar;