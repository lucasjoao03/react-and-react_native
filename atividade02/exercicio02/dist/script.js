function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Fibonacci extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "adicionarElemento",





    () => {
      const { sequence } = this.state;
      const nextElement = sequence[sequence.length - 1] + sequence[sequence.length - 2];

      this.setState(prevState => ({
        sequence: [...prevState.sequence, nextElement] }));

    });this.state = { sequence: [0, 1, 1, 2] };}

  render() {
    const { sequence } = this.state;

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", null, "Sequ\xEAncia de Fibonacci"), /*#__PURE__*/
      React.createElement("ul", null,
      sequence.map((element, index) => /*#__PURE__*/
      React.createElement("li", { key: index }, element))), /*#__PURE__*/


      React.createElement("button", { onClick: this.adicionarElemento }, "Adicionar Elemento")));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Fibonacci, null), document.getElementById('root'));