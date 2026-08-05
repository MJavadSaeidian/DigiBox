import SpecialBoxCard from "../components/SpecialBox/SpecialBoxCard";
import styles from "./specialBox.module.scss";

const specialBox = {
  id: "1",
  title: "Gaming Ultimate Box",
  description: "بهترین تجهیزات گیمینگ در یک پکیج ویژه",
  image: "/images/box.png",
  boxPrice: 15900000,
  products: [
    {
      id: "1",
      title: "Galaxy S25",
      image: "/images/products/s25.png",
      price: 7000000,
    },
    {
      id: "2",
      title: "Gaming Mouse",
      image: "/images/products/mouse.png",
      price: 3000000,
    },
    {
      id: "3",
      title: "Headset",
      image: "/images/products/headset.png",
      price: 8700000,
    },
  ],
};

export default function SpecialBoxPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <SpecialBoxCard box={specialBox} />
      </div>
    </main>
  );
}