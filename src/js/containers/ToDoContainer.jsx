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
    setFilter: PropTypes.func.isRequired,

    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    filter: PropTypes.bool,
    allCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired
  };

  state = {
    inputValue: ''
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
      this.props.addTodo(val);
      this.setState({inputValue: ''});
    }
  };

  handleDelete = (key) => {
    /*let todos = this.state.todos;
    let index = todos.findIndex((todo) => key === todo.key);
    todos.splice(index, 1);
    this.setState({todos});*/
  };

  handleClearCompleted = () => {
    /*let todos = this.state.todos.filter((todo) => !todo.completed);
    this.setState({todos});*/
  };

  render() {
    return (
      <ToDoLayout
        input={<ToDoInput value={this.state.inputValue} handleChange={this.handleInputChange} handleKeyDown={this.handleInputKeyDown} />}
        list={<ToDoList todos={this.props.todos} handleToggleComplete={this.props.toggleTodo} handleDelete={this.handleDelete} />}
        footer={this.props.allCount > 0 ? <ToDoFooter count={this.props.activeCount} showClearButton={this.props.activeCount < this.props.allCount} handleClearCompleted={this.handleClearCompleted} handleSetFilter={this.props.setFilter} filter={this.props.filter} /> : null}
      />
    );
  }
}

export default connect(
  (state) => ({
    todos: state.todos.filter((todo) => state.filter !== null ? (todo.completed === state.filter) : true),
    filter: state.filter,
    allCount: state.todos.length,
    activeCount: state.todos.filter((todo) => !todo.completed).length
  }),
  {
    toggleTodo,
    addTodo,
    setFilter
  }
)(ToDoContainer);
