import { useState } from "react";

export default function Contato() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  const onChangeInput = (e) =>
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });

  const sendContato = async e => {
      alert(dataForm.name)
  }

  return (
    <form onSubmit={sendContato}>
      <input
        type="text"
        name="name"
        placeholder="Digite o nome"
        onChange={onChangeInput}
        value={dataForm.name}
      />
      <br />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Digite seu melhor e-mail"
        onChange={onChangeInput}
        value={dataForm.email}
      />
      <br />
      <br />
      <input
        type="text"
        name="subject"
        placeholder="Digite o motivo do contato"
        onChange={onChangeInput}
        value={dataForm.subject}
      />
      <br />
      <br />
      <input
        type="text"
        name="content"
        placeholder="Digite conteudo "
        onChange={onChangeInput}
        value={dataForm.content}
      />
      <br />
      <br />

      <button type="submit">Send</button>
    </form>
  );
}
