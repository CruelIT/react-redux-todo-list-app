import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ToDoInput from '../components/ToDoInput';
import ToDoLayout from '../components/ToDoLayout';
import ToDoList from '../components/ToDoList';
import ToDoFooter from '../components/ToDoFooter';

import {toggleTodo, addTodo, setFilter} from '../actions';

const ENTER_KEY = 13;

class ToDoContainer extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired
  };

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

      this.props.addTodo(val);

      this.setState({todos, inputValue: ''});
    }
  };

  handleToggleComplete = (key) => {
    let todos = this.state.todos;
    let index = todos.findIndex((todo) => key === todo.key);
    todos[index].completed = !todos[index].completed;

    this.props.toggleTodo(key);

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
    this.props.setFilter(filter);

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

export default connect(
  undefined,
  {
    toggleTodo,
    addTodo,
    setFilter
  }
)(ToDoContainer);
