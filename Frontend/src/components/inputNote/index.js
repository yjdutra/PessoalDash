import styles from "./layout.module.css";

import { casa, apps, predio, internet, fogo } from "../../assets/icons";

export default function InputNotes(props) {
  return (
    <div className={styles.Card}>
      <input
        type="text"
        className={styles.Input}
        placeholder="Oque você quuer lembrar ?"
      />
    </div>
  );
}
