import Button from "@/shared/components/Button";
import styles from "./Hero.module.scss"
import Image from "next/image";
import { LuMoveLeft } from "react-icons/lu";
import { TbReplace } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Link from "next/link";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.textSection}>
                    <span className={styles.badge}>
                        DidiBox | فروشگاه اینترنتی لوازم دیجیتال
                    </span>
                    <h1>
                        جدید ترین محصولات دیجیتال
                        <br />
                        در یک قدمی شما
                    </h1>
                    <p>
                        از گوشی موبایل و لپ‌تاپ تا ساعت هوشمند و لوازم جانبی،
                        همه را با ضمانت اصالت کالا و بهترین قیمت در <span>DigiBox</span> پیدا کنید و به جعبه خرید خود اضافه کنید
                    </p>
                    
                    <div className={styles.buttons}>
                        <Link href="/products">
                        <Button>
                            مشاهده محصولات
                            <LuMoveLeft />
                        </Button>
                        </Link>
                        
                        <Button variant="secondary">
                            جعبه های ویژه
                            <LuMoveLeft />
                        </Button>
                    </div>

                   
                </div>
                <div className={styles.imageSection}>
                    <Image
                        className={styles.heroImage}
                        src="/images/hero-1.png"
                        alt="DigiBox Hero"
                        width={1536}
                        height={1024}
                        priority
                    />
                </div>
                

            </div>
        </section>
    )
}

export default Hero