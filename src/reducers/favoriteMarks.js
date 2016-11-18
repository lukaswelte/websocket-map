import { UPDATE_FAVORITE_MARKS, FAVORITE_MARK_SUCCESS, UNFAVORITE_MARK_SUCCESS } from '../constants/ActionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_FAVORITE_MARKS:
      return action.marks;

    case FAVORITE_MARK_SUCCESS:
      return [...state, action.markID];

    case UNFAVORITE_MARK_SUCCESS:
      return state.filter(markID => markID !== action.markID);

    default:
      return state;
  }
};

export default reducer;
