import styles from "./layout.module.css";

import Menu from "../../components/menu";
import InputNotes from "../../components/inputNote";
import NotesList from "../../components/noteList";

export default function Notes() {
  return (
    <div className={styles.pagina}>
      <div className={styles.left}>
        <Menu />
      </div>
      <div className={styles.right}>
        <InputNotes />
        <div className={styles.rightContent}></div>
        <NotesList note="texto01"/>

        <NotesList note="texto02"/>
      </div>
    </div>
  );
}
