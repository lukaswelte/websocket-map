import { UPDATE_MARK_LIST } from '../constants/ActionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_MARK_LIST:
      return action.marks;

    default:
      return state;
  }
};

export default reducer;
