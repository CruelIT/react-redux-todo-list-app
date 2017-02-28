let nextTodoKey = 0;
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: {
      key: nextTodoKey++,
      value: text,
      completed: false
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