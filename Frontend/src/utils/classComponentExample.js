// Exemplo classComponents :

import { Component } from "react";

export default class App extends Component {
  // O constructor que define quais states vão ser utilizados
  constructor(props) {
    super(props);
    this.state = {
      nome: "Yuri Jorge",
      contador: 0,
    };
    this.aumentar = this.aumentar.bind(this); //Esse bind que permite que a func. aumentar acesse o state
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    let state = this.state;
    state.contador += 1;
    this.setState(state);
  }

  //Essa é a forma de consumir e modificar os states.
  diminuir() {
    let state = this.state;
    if (state.contador === 0) {
      alert("Não tem como ser mais fraco parceiro !");
      return;
    }

    state.contador -= 1;
    this.setState(state);
  }

  //Essa é a forma de imprimir os states
  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <text>lvl : {this.state.contador}</text>
        <div>
          <button onClick={this.aumentar}>+</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={this.diminuir}>-</button>
        </div>
      </div>
    );
  }
}
