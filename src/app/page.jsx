import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";
export default function Home() {
  return (
    <div>
      <Image src={Hero} className={styles.img} />
    </div>
  );
}
