import styles from "./layout.module.css";

export default function CardContas() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contant}>
          <p className={styles.value}>R$ 100,00</p>
          <img
            src="https://img.icons8.com/ios/50/000000/water.png"
            className={styles.logo}
          />
        </div>
      <div className={styles.footer}>
        <p className={styles.title}>Conta de Água</p>
      </div>
      </div>

    </>
  );
}
