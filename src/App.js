import React, { Fragment, Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: [],
      text: ''
    };
  }

  render() {
    const pendingTasks = this.state.tasks.filter(task => !task.done).length;

    return (
      <div id="todo-list">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-task">Task: </label>
          <input 
            type="text"
            id="new-task"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add task
          </button>
        </form>
        {pendingTasks > 0 
          ? <div id="results"><h2>You have {pendingTasks > 1 ? `${pendingTasks} pending tasks` : `${pendingTasks} pending task`}.</h2></div>
          : <div id="results"><h2>You don't have any pending tasks.</h2></div>
        }     
          <ol className="task-list">
          {this.state.tasks.map((task, index) => (
              <li className="task-item" key={index}>
                {
                  !this.state.editMode && 
                  <Fragment>
                  <div className="task-item__content">
                      <span className={"task-item " + (task.complete ? "task--completed" : "")}>{task.text}</span>
                  </div>
                  <div className="task-item__controls">
                      <span className="task-item task-item__delete" onClick={() => {this.handleDelete(index)}}>Delete</span>
                      <span className="task-item task-item__complete" onClick={() => {this.handleComplete(index)}}>Complete</span>
                  </div>
                  </Fragment>
                }
              </li>
              )
            )
          }
          </ol>
      </div>
    );
  }

  handleComplete = (index) => {
    const updatedList = [...this.state.tasks];
    updatedList[index].complete = true;
    this.setState({tasks: updatedList})
  }

  handleDelete = (index) => {
    const updatedList = [...this.state.tasks];
    updatedList.splice(index,1);
    this.setState({ tasks: updatedList})
  }
 
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newTask = {
      text: this.state.text,
      id: this.state.id + 1,
      done: false
    };
    
    this.setState(state => ({
      tasks: state.tasks.concat(newTask),
      text: ''
    }));
  }

}

export default App;