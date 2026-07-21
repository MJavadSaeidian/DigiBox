import Image from "next/image"
import styles from "./Banner.module.scss"
import Link from "next/link"

function Banner() {
    return (
        <section className={styles.container}>
            <div className={styles.banner}>
                <Link href="/specialBox">
                    <Image
                        src="/images/banner.png"
                        alt="banner"
                        width={1080}
                        height={365}
                        priority
                    />
                </Link>

            </div>
        </section>

    )
}

export default Banner