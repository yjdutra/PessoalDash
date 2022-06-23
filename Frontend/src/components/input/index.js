import styles from "./layout.module.css";

import { gota, raio, predio, internet, fogo } from "../../assets/icons";

export default function InputCard(props) {
  return (
    <>
      <div className={styles.Card}>
        <input
          className={styles.Input}
          type="text"
          placeholder="R$ 00,00"
          required=""
        />
        <div className={styles.SelectBill}>
          <table className={styles.Table}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <button className={styles.button}>{gota}</button>
              </td>
              <td className={styles.td}>
                <button className={styles.button}>{raio}</button>
              </td>
              <td className={styles.td}>
                <button className={styles.button}>{predio}</button>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <button className={styles.button}>{internet}</button>
              </td>
              <td className={styles.td}>
                <button className={styles.button}>{fogo}</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
