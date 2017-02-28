import React, {Component} from 'react';
import ToDoInput from '../components/ToDoInput';
import ToDoLayout from '../components/ToDoLayout';
import ToDoList from '../components/ToDoList';
import ToDoFooter from '../components/ToDoFooter';

const ENTER_KEY = 13;

export default class ToDoContainer extends Component {
  state = {
    todos: [],
    inputValue: '',
    filter: null
  };

  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value});
  };

  handleInputKeyDown = (event) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    let val = this.state.inputValue.trim();

    if (val) {
      let todos = this.state.todos;
      todos.push({
        key: this.state.todos.length,
        value: val,
        completed: false
      });
      this.setState({todos, inputValue: ''});
    }
  };

  handleToggleComplete = (key) => {
    let todos = this.state.todos;
    let index = todos.findIndex((todo) => key === todo.key);
    todos[index].completed = !todos[index].completed;
    this.setState({todos});
  };

  handleDelete = (key) => {
    let todos = this.state.todos;
    let index = todos.findIndex((todo) => key === todo.key);
    todos.splice(index, 1);
    this.setState({todos});
  };

  handleClearCompleted = () => {
    let todos = this.state.todos.filter((todo) => !todo.completed);
    this.setState({todos});
  };

  handleSetFilter = (filter) => {
    this.setState({filter});
  };

  render() {
    const uncompletedCount = this.state.todos.filter((todo) => !todo.completed).length;
    const filteredTodos = this.state.todos.filter((todo) => this.state.filter !== null ? (todo.completed === this.state.filter) : true);

    return (
      <ToDoLayout
        input={<ToDoInput value={this.state.inputValue} handleChange={this.handleInputChange} handleKeyDown={this.handleInputKeyDown} />}
        list={<ToDoList todos={filteredTodos} handleToggleComplete={this.handleToggleComplete} handleDelete={this.handleDelete} />}
        footer={this.state.todos.length > 0 ? <ToDoFooter count={uncompletedCount} showClearButton={uncompletedCount < this.state.todos.length} handleClearCompleted={this.handleClearCompleted} handleSetFilter={this.handleSetFilter} filter={this.state.filter} /> : null}
      />
    );
  }
}