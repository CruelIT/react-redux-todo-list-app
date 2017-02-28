let nextTodoKey = 0;
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: {
      key: nextTodoKey++,
      value: text
    }
  }
};

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    payload: {
      value: filter
    }
  }
};

export const toggleTodo = (key) => {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      key
    }
  }
};

export const deleteTodo = (key) => {
  return {
    type: 'DELETE_TODO',
    payload: {
      key
    }
  };
};

export const clearCompletedTodos = () => {
  return {
    type: 'CLEAR_COMPLETED_TODOS'
  };
};
