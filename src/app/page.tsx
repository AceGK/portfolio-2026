import styles from "./styles.module.scss";
import Nav from "@/components/modules/Nav";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Nav />
      </div>
    </main>
  );
}