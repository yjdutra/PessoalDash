import styles from "./layout.module.css";

import { gota, raio, predio, internet, fogo } from "../../assets/icons";

export default function CardContas(props) {
  const bill = props.type;

  if (bill == "agua") {
    return (
      <>
        <div className={styles.cardAgua}>
          <p className={styles.card__title}>
            R$ {props.value}
            <span className={styles.icon}>{gota}</span>
          </p>
          <p className={styles.card__apply}>Água</p>
        </div>
      </>
    );
  }

  if (bill == "energia") {
    return (
      <>
        <div className={styles.cardEnergia}>
          <p className={styles.card__title}>
            R$ {props.value}
            <span className={styles.icon}>{raio}</span>
          </p>
          <p className={styles.card__apply}>Energia</p>
        </div>
      </>
    );
  }

  if (bill == "condominio") {
    return (
      <>
        <div className={styles.cardCondominio}>
          <p className={styles.card__title}>
            R$ {props.value}
            <span className={styles.icon}>{predio}</span>
          </p>
          <p className={styles.card__apply}>Condomínio</p>
        </div>
      </>
    );
  }

  if (bill == "internet") {
    return (
      <>
        <div className={styles.cardInternet}>
          <p className={styles.card__title}>
            R$ {props.value}
            <span className={styles.icon}>{internet}</span>
          </p>
          <p className={styles.card__apply}>Internet</p>
        </div>
      </>
    );
  }

  if (bill == "gas") {
    return (
      <>
        <div className={styles.cardGas}>
          <p className={styles.card__title}>
            R$ {props.value}
            <span className={styles.icon}>{fogo}</span>
          </p>
          <p className={styles.card__apply}>Gás</p>
        </div>
      </>
    );
  }
}
