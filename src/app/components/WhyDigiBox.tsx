import { FaShieldAlt, FaShippingFast } from "react-icons/fa";
import styles from "./WhyDigiBox.module.scss"
import { FaCreditCard, FaHeadset } from "react-icons/fa6";
import SectionTitle from "@/shared/components/SectionTitle";

const features = [
    {
        icon: <FaShippingFast />,
        title: "ارسال سریع",
        description: "تحویل سریع و مطمئن سفارش‌ها در سراسر کشور",
    },
    {
        icon: <FaShieldAlt />,
        title: "ضمانت اصالت کالا",
        description: "تمامی محصولات با تضمین اصالت و کیفیت عرضه می‌شوند",
    },
    {
        icon: <FaCreditCard />,
        title: "پرداخت امن",
        description: "پرداخت آنلاین از طریق درگاه‌های بانکی معتبر",
    },
    {
        icon: <FaHeadset />,
        title: "پشتیبانی حرفه‌ای",
        description: "همراه شما قبل و بعد از خرید، در تمام مراحل",
    },
];

function WhyDigiBox() {
    return (
        <section className={styles.why}>

            <SectionTitle
                title="تجربه‌ای متفاوت از خرید دیجیتال"
                subtitle="ما فقط محصول نمی‌فروشیم؛ تجربه‌ای سریع، مطمئن و لذت‌بخش از خرید آنلاین را برای شما فراهم می‌کنیم."
            />

            <div className={styles.grid}>

                {features.map((feature) => (

                    <div
                        key={feature.title}
                        className={styles.card}
                    >

                        <div className={styles.icon}>
                            {feature.icon}
                        </div>

                        <h3>{feature.title}</h3>

                        <p>{feature.description}</p>

                    </div>

                ))}

            </div>

        </section>
    )
}

export default WhyDigiBox