function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",






    event => {
      this.setState({ newTask: event.target.value });
    });_defineProperty(this, "handleSubmit",

    event => {
      event.preventDefault();

      const { newTask, tasks } = this.state;

      if (newTask.trim() !== '') {
        const updatedTasks = [...tasks, newTask];
        this.setState({
          newTask: '',
          tasks: updatedTasks });

      }
    });this.state = { newTask: '', tasks: [] };}

  render() {
    const { newTask, tasks } = this.state;

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/

      React.createElement("form", { onSubmit: this.handleSubmit }, /*#__PURE__*/
      React.createElement("label", null, "O que vou fazer hoje? "), /*#__PURE__*/
      React.createElement("input", {
        type: "text",
        value: newTask,
        onChange: this.handleChange }), /*#__PURE__*/

      React.createElement("button", { type: "submit" }, "Adicionar")), /*#__PURE__*/


      React.createElement("h2", null, "Minhas tarefas"), /*#__PURE__*/

      React.createElement("ul", null,
      tasks.map((task, index) => /*#__PURE__*/
      React.createElement("li", { key: index }, task)))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));