import Image from "next/image";
import styles from "./PopularBrands.module.scss"
import Link from "next/link";
import SectionTitle from "@/shared/components/SectionTitle";
const brands = [
    {
        name: "Apple",
        image: "/images/brands/apple.png",
    },
    {
        name: "Samsung",
        image: "/images/brands/samsung.png",
    },
    {
        name: "Sony",
        image: "/images/brands/sony.png",
    },
    {
        name: "Xiaomi",
        image: "/images/brands/xiaomi.png",
    },
    {
        name: "ASUS",
        image: "/images/brands/asus.png",
    },
    {
        name: "Lenovo",
        image: "/images/brands/lenovo.png",
    },
    {
        name: "JBL",
        image: "/images/brands/jbl.png",
    },
    {
        name: "Logitech",
        image: "/images/brands/logitech.png",
    },
];
function PopularBrands() {
  return (
     <section className={styles.brands}>

            <SectionTitle
                title="برندهای محبوب"
                subtitle="بهترین برندهای دنیای تکنولوژی را در DigiBox پیدا کنید."
            />

            <div className={styles.grid}>

                {brands.map((brand) => (

                    <Link
                        href={`/brand/${brand.name.toLowerCase()}`}
                        key={brand.name}
                        className={styles.card}
                    >

                        <Image
                            src={brand.image}
                            alt={brand.name}
                            width={120}
                            height={60}
                        />

                    </Link>

                ))}

            </div>

        </section>
  )
}

export default PopularBrands