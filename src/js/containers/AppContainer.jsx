import React, {Component} from 'react';
import Input from '../components/Input';
import AppLayout from '../components/AppLayout';
import List from '../components/List';

const ENTER_KEY = 13;

export default class AppContainer extends Component {
  state = {
    todos: [],
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
      let todos = this.state.todos;
      todos.push({
        value: val,
        completed: false
      });
      this.setState({todos, inputValue: ''});
    }
  };

  handleToggleComplete = (i) => {
    let todos = this.state.todos;
    todos[i].completed = !todos[i].completed;
    this.setState({todos});
  };

  render() {
    return (
      <AppLayout
        input={<Input value={this.state.inputValue} handleChange={this.handleInputChange} handleKeyDown={this.handleInputKeyDown} />}
        list={<List todos={this.state.todos} handleToggleComplete={this.handleToggleComplete} />}
      />
    );
  }
}
