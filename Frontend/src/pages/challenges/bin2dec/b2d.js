import styles from "./layout.module.css";
import { useState } from "react";


//👨‍💻 http://localhost:3000/challenges/bin2dec/b2d?

export default function Bin2Dec() {
  const [dataForm, setDataForm] = useState({
    binNumber: "",
  });

  const onChangeInput = (e) =>
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });

  const convertNumber = async (e) => {
    const binario = parseInt(dataForm.binNumber);
    let decimal = 0,
      i = 1,
      resto;

    e.preventDefault();

    while (binario !== 0) {
      resto = binario % 10;
      binario = Number.parseInt(binario / 10);
      decimal = decimal + resto * Math.pow(2, i);
      i++;
    }

    decimal = decimal / 2;

    console.log(decimal);

    setResultado(decimal);

    
  };

  function criarParagrafo() {
    const p = document.createElement("p");
    return p;
  }

  function setResultado(msg) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";

    const p = criarParagrafo();

    p.innerHTML = msg;
    resultado.appendChild(p);
  }

  return (
    <>
      <div className={styles.contant}>
        <div className={styles.container}>
          <div className={styles.titleContent}>
            <t1 className={styles.title}>
              Converta Numeros Binarios em Decimais
            </t1>
          </div>
          <form onSubmit={convertNumber}>
            <input
              className={styles.inputBinNumber}
              type="number"
              name="binNumber"
              placeholder="Digite o numero binario"
              onChange={onChangeInput}
              value={dataForm.binNumber}
            />

            <button className={styles.button} type="submit">
              Send
            </button>
            <br />
            <br />
          </form>

          <div className={styles.resposta} id="resultado"></div>
        </div>
      </div>

    </>
  );
}
