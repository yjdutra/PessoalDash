import styles from "./layout.module.css";

import Menu from "../../components/menu";

export default function Dash() {
  return (
    <div className={styles.pagina}>
      <div className={styles.left}>
        <Menu />
      </div>
      <div className={styles.right}>
        <input type="text" />
        <div className={styles.rightContent}></div>
      </div>

      {/*  <WebApps /> */}
    </div>
  );
}
