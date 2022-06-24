import styles from "./layout.module.css";

import {
  github,
  whats,
  insta,
  youtube,
  tt,
  email,
  gitlab,
  drive,
  amazon,
  ponto,
  linkedin,
} from "../../assets/icons";

export default function WebApps() {
  return (
    <div className={styles.Card}>
      <div className={styles.title}>
        <p>Apps</p>
      </div>
      <table className={styles.Table}>
        <div className={styles.Icon}>{github}</div>

        <div className={styles.Icon}>{whats}</div>

        <div className={styles.Icon}>{insta}</div>

        <div className={styles.Icon}>{youtube}</div>

        <div className={styles.Icon}>{tt}</div>

        <div className={styles.Icon}>{email}</div>

        <div className={styles.Icon}>{gitlab}</div>

        <div className={styles.Icon}>{drive}</div>

        <div className={styles.Icon}>{amazon}</div>

        <div className={styles.Icon}>{ponto}</div>

        <div className={styles.Icon}>{linkedin}</div>
      </table>
    </div>
  );
}
