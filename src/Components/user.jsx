// user.js
// Action Types
export const SET_USERNAME = 'SET_USERNAME';

// Action Creators
export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

// Reducer
const initialState = {
  username: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
