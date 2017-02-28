import {SET_FILTER} from '../constants/action-types';

export default (state = null, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.value;
    default:
      return state;
  }
}
