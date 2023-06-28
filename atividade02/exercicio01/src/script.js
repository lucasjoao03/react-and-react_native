class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  incrementarContador = () => {
    this.setState(prevState => ({
      contador: prevState.contador + 1
    }));
  }

  render() {
    const { contador } = this.state;

    return (
      <div>
        <h2>Contador</h2>
        <p>Quantidade de cliques: {contador}</p>
        <button onClick={this.incrementarContador}>Contar</button>
      </div>
    );
  }
}

ReactDOM.render(<Contador />, document.getElementById('root'));