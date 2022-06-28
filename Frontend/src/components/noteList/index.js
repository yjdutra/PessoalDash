import styles from "./layout.module.css";

import { send, apps, predio, internet, fogo } from "../../assets/icons";

export default function NotesList(props) {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Card}>
          <p className={styles.nota}>{props.note}</p>
        </div>
      </div>
    </>
  );
}
