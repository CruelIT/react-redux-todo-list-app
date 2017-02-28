import * as ActionTypes from '../constants/action-types';

export const addTodo = (text) => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      text
    }
  }
};

export const setFilter = (filter) => {
  return {
    type: ActionTypes.SET_FILTER,
    payload: {
      value: filter
    }
  }
};

export const toggleTodo = (key) => {
  return {
    type: ActionTypes.TOGGLE_TODO,
    payload: {
      key
    }
  }
};

export const deleteTodo = (key) => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: {
      key
    }
  };
};

export const clearCompletedTodos = () => {
  return {
    type: ActionTypes.CLEAR_COMPLETED_TODOS
  };
};
