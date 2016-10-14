import { goBack as back, push } from 'react-router-redux';

export const goToMap = () => push('/map');
export const goToEvent = (eventID) => push(`/event/${eventID}`);
export const goToAddEvent = () => push('/add-event');
export const goToIntroduction = (step) => push(`/introduction/${step || 1}`);
export const goToLogin = (step) => push(`/login/${step || 1}`);
export const goBack = () => back();
