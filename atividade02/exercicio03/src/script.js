class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      tasks: []
    };
  }

  handleChange = (event) => {
    this.setState({ newTask: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { newTask, tasks } = this.state;

    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, newTask];
      this.setState({
        newTask: '',
        tasks: updatedTasks
      });
    }
  }

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div>
        
        <form onSubmit={this.handleSubmit}>
          <label>O que vou fazer hoje? </label>
          <input
            type="text"
            value={newTask}
            onChange={this.handleChange}
          />
          <button type="submit">Adicionar</button>
        </form>
        
        <h2>Minhas tarefas</h2>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));