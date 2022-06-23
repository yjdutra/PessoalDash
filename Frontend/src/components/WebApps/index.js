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
        <tr>
          <td>
            <div className={styles.Icon}>{github}</div>
          </td>
          <td>
            <div className={styles.Icon}>{whats}</div>
          </td>
          <td>
            <div className={styles.Icon}>{insta}</div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={styles.Icon}>{youtube}</div>
          </td>
          <td>
            <div className={styles.Icon}>{tt}</div>
          </td>
          <td>
            <div className={styles.Icon}>{email}</div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={styles.Icon}>{gitlab}</div>
          </td>
          <td>
            <div className={styles.Icon}>{drive}</div>
          </td>
          <td>
            <div className={styles.Icon}>{amazon}</div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={styles.Icon}>{ponto}</div>
          </td>
          <td>
            <div className={styles.Icon}>{linkedin}</div>
          </td>
        </tr>
      </table>
    </div>
  );
}
