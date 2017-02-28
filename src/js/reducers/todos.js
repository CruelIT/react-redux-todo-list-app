export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        Object.assign({}, action.payload, {completed: false})
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.key !== action.payload.key) {
          return todo;
        }
        return Object.assign({}, todo, {completed: !todo.completed});
      });
    case 'DELETE_TODO':
      return state.filter((todo) => todo.key !== action.payload.key);
    case 'CLEAR_COMPLETED_TODOS':
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};
