import Image from "next/image";
import Link from "next/link";

import styles from "./not-found.module.scss";

export default function NotFound() {
    return (
        <main className={styles.container}>

            <Image
                src="/images/404.png"
                alt="404"
                width={1080}
                height={365}
                priority
            />

            <Link href="/" className={styles.button}>
                بازگشت به صفحه اصلی
            </Link>

        </main>
    );
}