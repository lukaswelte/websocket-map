import { goBack as back, push } from 'react-router-redux';

export const goToMap = () => push('/map');
export const goToMark = (eventID) => push(`/mark/${eventID}`);
export const goToFilter = () => push(`/filter`);
export const goToAddMark = () => push('/add-mark');
export const goToProfile = () => push('/profile');
export const goToTrip = () => push('/trip');
export const goToImprint = () => push('/imprint');
export const goToIntroduction = (step) => push(`/introduction/${step || 1}`);
export const goToLogin = (step) => push({pathname: `/login/${step || 1}`, search: window.location.search});
export const goToMapOrRedirect = () => {
  return (dispatch, getState) => {
    // Redirect to the location the user wanted to access
    const state = getState();
    var redirectLocation = '/map';
    if (state.routing.locationBeforeTransitions.query.redirect) {
      redirectLocation = state.routing.locationBeforeTransitions.query.redirect;
    }
    dispatch(push(redirectLocation));
  }
}
export const goBack = () => back();
