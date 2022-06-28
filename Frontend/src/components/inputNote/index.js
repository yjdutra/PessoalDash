import styles from "./layout.module.css";

import { send, apps, predio, internet, fogo } from "../../assets/icons";

export default function InputNotes(props) {
  return (
    <>
      <form className={styles.Card}>
        <input
          type="text"
          className={styles.Input}
          placeholder="Oque você quer lembrar ?"
        />
        <button type="submit" className={styles.Button}>
          {send}
        </button>
      </form>
    </>
  );
}
