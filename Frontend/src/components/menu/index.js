import styles from "./layout.module.css";

import { casa, apps, ap, internet, fogo } from "../../assets/icons";

export default function Menu(props) {
  return (
    <div className={styles.Container}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="http://localhost:3000/" className={styles.a}>
              <div className={styles.icon}>{casa}</div>
            </a>
          </li>
          <li className={styles.li}>
            <a href="http://localhost:3000/home" className={styles.a}>
              <div className={styles.icon}>{ap}</div>
            </a>
          </li>
          <li className={styles.li}>
            <a href="http://localhost:3000/apps" className={styles.a}>
              <div className={styles.icon}>{apps}</div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
