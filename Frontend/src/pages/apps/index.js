import styles from "./layout.module.css";
import WebApps from "../../components/WebApps";
import Menu from "../../components/menu";

export default function Dash() {
  return (
    <div className={styles.pagina}>
      <div className={styles.left}>
        <Menu />
      </div>
      <div className={styles.right}>
        <div className={styles.rightContent}>
          <WebApps />
        </div>
      </div>
    </div>
  );
}

/* Notes:

Quando estiver consumindo do banco de dados, criar função que identifica o type de conta do e já associa o icone correspondente  */
