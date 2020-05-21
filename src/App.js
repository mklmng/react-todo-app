import React, { Fragment, Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: [],
      text: '',
      editMode: false,
      editText: '',
      editId: 0
    };
  }

  render() {
    const pendingTasks = this.state.tasks.filter(task => !task.complete).length;

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
          {this.state.editMode && 
          <Fragment>
            <div id="edit-overlay">
              <h2>Edit task</h2>
              <input type="text" value={this.state.editText} onChange={this.handleEditChanges} />
              <button onClick={()=> this.handleEditUpdates()}>Accept Changes</button> 
            </div>
          </Fragment>
          }

          {this.state.tasks.map((task, index) => (
              <li className="task-item" key={index}>
                  <div className="task-item__content">
                      <span className={"task-item " + (task.complete ? "task--completed" : "")}>{task.text}</span>
                  </div>
                  <div className="task-item__controls">
                      <span className="task-item task-item__edit" onClick={() => {this.handleEdit(index, task.text)}}>Edit</span>
                      <span className="task-item task-item__delete" onClick={() => {this.handleDelete(index)}}>Delete</span>
                      <span className="task-item task-item__complete" onClick={() => {this.handleComplete(index)}}>Complete</span>
                  </div>
              </li>
              )
            )
          }
          </ol>
      </div>
    );
  }

  handleEdit = (index, text) => {
    this.setState({ editMode: true, editText: text, editId: index })
  }

  handleEditUpdates = () =>{
    const id = this.state.editId;
    const updatedList = [...this.state.tasks];
    updatedList[id].text = this.state.editText;
    this.setState({tasks: updatedList, editMode: false, editId: 0, editText: ''})
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

  handleEditChanges = (e) => {
    this.setState({ editText: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newTask = {
      text: this.state.text,
      id: this.state.id + 1,
      complete: false
    };
    
    this.setState(state => ({
      tasks: state.tasks.concat(newTask),
      text: ''
    }));
  }

}

export default App;