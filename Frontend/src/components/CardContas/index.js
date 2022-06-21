import styles from "./layout.module.css";

export default function CardContas() {
  return (
    <div className={styles.container}>
      <div className={styles.contant}>
        <p>R$ 100,00</p>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M406.043 316c24.11 96.443-50.59 180-150 180s-174.405-82.38-150-180c15-60 90-150 150-300 60 150 135 240 150 300z"></path>
        </svg>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}