import Button from "@/shared/components/Button"
import styles from "./Sletter.module.scss"

function Sletter() {
  return (
    <section className={styles.newsletter}>

            <div className={styles.container}>

                <h2>از جدیدترین تخفیف‌ها جا نمانید</h2>

                <p>
                    اولین نفری باشید که از جعبه‌های ویژه، محصولات جدید و جشنواره‌های
                    DigiBox باخبر می‌شود.
                </p>

                <form className={styles.form}>

                    <input
                        type="email"
                        placeholder="ایمیل خود را وارد کنید..."
                    />

                    <Button>
                        عضویت در خبرنامه
                    </Button>

                </form>

            </div>

        </section>
  )
}

export default Sletter