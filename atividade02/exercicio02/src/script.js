class Fibonacci extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sequence: [0, 1, 1, 2]
    };
  }

  adicionarElemento = () => {
    const { sequence } = this.state;
    const nextElement = sequence[sequence.length - 1] + sequence[sequence.length - 2];

    this.setState(prevState => ({
      sequence: [...prevState.sequence, nextElement]
    }));
  }

  render() {
    const { sequence } = this.state;

    return (
      <div>
        <h2>Sequência de Fibonacci</h2>
        <ul>
          {sequence.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
        <button onClick={this.adicionarElemento}>Adicionar Elemento</button>
      </div>
    );
  }
}

ReactDOM.render(<Fibonacci />, document.getElementById('root'));