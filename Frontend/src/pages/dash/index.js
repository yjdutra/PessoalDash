import styles from "./layout.module.css";
import CardContas from "../../components/cardContas";

export default function Dash() {
  return (
    <div className={styles.CardsContas}>
      <CardContas value="150,00" type="agua" />
      <CardContas value="200,00" type="energia" />
      <CardContas value="500,00" type="condominio" />
      <CardContas value="175,00" type="internet" />
      <CardContas value="100,00" type="gas" />
    </div>
  );
}

/* Notes:

Quando estiver consumindo do banco de dados, criar função que identifica o type de conta do e já associa o icone correspondente  */
