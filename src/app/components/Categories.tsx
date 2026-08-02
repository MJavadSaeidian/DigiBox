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
    { title: "موبایل", icon: <FaMobileAlt /> },
    { title: "لپ تاپ", icon: <IoMdLaptop /> },
    { title: "کامپیوتر", icon: <FaComputer /> },
    { title: "گیمینگ", icon: <GrGamepad /> },
    { title: "ساعت هوشمند", icon: <TbDeviceWatch /> },
    { title: "هدفون و هندزفری", icon: <IoHeadset /> },
    { title: "دوربین", icon: <BsCameraFill /> },
    { title: "تجهیزات ذخیره سازی", icon: <LuHardDriveDownload /> }

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
                        <Link
                            key={category.title}
                            href={{
                                pathname: "/products",
                                query: {
                                    categories: category.title,
                                },
                            }}
                            className={styles.card}
                        >
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