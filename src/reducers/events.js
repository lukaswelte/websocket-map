import events from './events.json';

const eventsReducer = (state = events, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default eventsReducer;
