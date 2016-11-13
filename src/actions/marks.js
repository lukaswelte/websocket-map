import * as types from '../constants/ActionTypes';
import API from '../utilities/api';

export const fetchMarks = () => {
  return (dispatch) => {
    API.request('/marks/all').then(res => {
      dispatch({
        type: types.UPDATE_MARK_LIST,
        marks: res.marks
      });
    });
  };
}
