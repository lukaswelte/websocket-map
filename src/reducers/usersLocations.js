const reducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_ALL_USERS_LOCATIONS':
      return action.users;

    default:
      return state;
  }
};

export default reducer;
