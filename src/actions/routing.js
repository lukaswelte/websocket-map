import { goBack as back, push } from 'react-router-redux';

export const goToMap = () => push('/map');
export const goToEvent = (eventID) => push(`/event/${eventID}`);
export const goToFilter = () => push(`/filter`);
export const goToAddEvent = () => push('/add-event');
export const goToProfile = () => push('/profile');
export const goToTrip = () => push('/trip');
export const goToImprint = () => push('/imprint');
export const goToIntroduction = (step) => push(`/introduction/${step || 1}`);
export const goToLogin = (step) => push({pathname: `/login/${step || 1}`, search: window.location.search});
export const goBack = () => back();
