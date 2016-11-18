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

export const fetchFavoriteMarks = () => {
  return (dispatch) => {
    API.request('/marks/favorites').then(res => {
      dispatch({
        type: types.UPDATE_FAVORITE_MARKS,
        marks: res
      });
    });
  };
}

export const favoriteMark = (markID) => {
  return (dispatch) => {
    API.request('/marks/favorite', API.methods.POST, {
      markID: markID
    }).then(res => {
      const type = res.success === true ? types.FAVORITE_MARK_SUCCESS : types.FAVORITE_MARK_FAILED;

      dispatch({
        type: type,
        markID: markID
      });
    });
  };
}

export const unFavoriteMark = (markID) => {
  return (dispatch) => {
    API.request('/marks/un-favorite', API.methods.POST, {
      markID: markID
    }).then(res => {
      const type = res.success === true ? types.UNFAVORITE_MARK_SUCCESS : types.UNFAVORITE_MARK_FAILED;

      dispatch({
        type: type,
        markID: markID
      });
    });
  };
}
