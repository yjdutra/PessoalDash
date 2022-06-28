import styles from "./layout.module.css";

import Menu from "../../components/menu";
import InputNotes from "../../components/inputNote";

export default function Dash() {
  return (
    <div className={styles.pagina}>
      <div className={styles.left}>
        <Menu />
      </div>
      <div className={styles.right}>
        <InputNotes />
        <div className={styles.rightContent}></div>
      </div>

      {/*  <WebApps /> */}
    </div>
  );
}
