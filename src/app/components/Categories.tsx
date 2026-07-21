import styles from "./Categories.module.scss"
import Link from "next/link"
import { IoMdLaptop } from "react-icons/io"
import { FaMobileAlt } from "react-icons/fa"
import { FaComputer } from "react-icons/fa6"
import { GrGamepad } from "react-icons/gr"
import { TbDeviceWatch } from "react-icons/tb"
import { IoHeadset } from "react-icons/io5"
import { BsCameraFill } from "react-icons/bs"
import { LuHardDriveDownload } from "react-icons/lu"
import SectionTitle from "@/shared/components/SectionTitle"

const categories = [
    { title: "موبایل", slug: "mobile", icon: <FaMobileAlt /> },
    { title: "لپ تاپ", slug: "laptop", icon: <IoMdLaptop /> },
    { title: "کامپیوتر", slug: "computer", icon: <FaComputer /> },
    { title: "گیمینگ", slug: "gaming", icon: <GrGamepad /> },
    { title: "ساعت هوشمند", slug: "smart-watch", icon: <TbDeviceWatch /> },
    { title: "هدفون و هندزفری", slug: "audio", icon: <IoHeadset /> },
    { title: "دوربین", slug: "camera", icon: <BsCameraFill /> },
    { title: "تجهیزات ذخیره سازی", slug: "storage", icon: <LuHardDriveDownload /> }

]

function Categories() {
    return (
        <section className={styles.categories}>
            <div className={styles.container}>
               <SectionTitle 
               title="دسته بندی محصولات"
               subtitle="از میان دسته‌بندی های مختلف ، سریع تر پیدا کنید !"
               />
                <div className={styles.grid}>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`} className={styles.card}>
                            <div className={styles.icon}>
                                {category.icon}
                            </div>
                            <h3>{category.title}</h3>
                        </Link>
                    ))}
                </div>

            </div>
        </section>

    )
}

export default Categories