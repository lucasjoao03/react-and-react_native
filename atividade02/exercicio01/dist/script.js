function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Contador extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "incrementarContador",





    () => {
      this.setState(prevState => ({
        contador: prevState.contador + 1 }));

    });this.state = { contador: 0 };}

  render() {
    const { contador } = this.state;

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", null, "Contador"), /*#__PURE__*/
      React.createElement("p", null, "Quantidade de cliques: ", contador), /*#__PURE__*/
      React.createElement("button", { onClick: this.incrementarContador }, "Contar")));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Contador, null), document.getElementById('root'));