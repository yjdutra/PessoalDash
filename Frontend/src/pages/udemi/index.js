import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hora: "00:00:00" };
  }

  // Roda 1 vez, assim que o componente é carregado, o timer atualiza por conta do setInterval
  componentDidMount() {
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  }

  // Roda toda vez que o state do componente é atualizado.
  componentDidUpdate() {
    console.log('Componente foi atualizado');
  }

  // Retorna um true or false
  shouldComponentUpdate(){

  }

  render() {
    return (
      <div>
        <h1>The End in : {this.state.hora}</h1>
      </div>
    );
  }
}
