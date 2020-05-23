import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/layout/Header';
import Form from './components/layout/Form';
import TodoResults from './components/todos/TodoResults'
import Todos from './components/todos/Todos';

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
    return (
      <div id="todo-list">
        <Header />
        <Form 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange} 
          text={this.state.text} />
        <TodoResults tasks={this.state.tasks} />
        <Todos 
          tasks={this.state.tasks}
          editMode={this.state.editMode}
          editText={this.state.editText}
          handleEdit={this.handleEdit}
          handleEditChanges={this.handleEditChanges}
          handleEditUpdates={this.handleEditUpdates}
          handleDelete={this.handleDelete}
          handleComplete={this.handleComplete}
        />
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
    this.setState({tasks: updatedList, editMode: false, editId: 0, editText: ''});
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