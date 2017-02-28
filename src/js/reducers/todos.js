export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          ...action.payload,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.key != action.payload.key) {
          return state;
        }
        return {...todo, completed: !todo.completed};
      });
    default:
      return state;
  }
};
