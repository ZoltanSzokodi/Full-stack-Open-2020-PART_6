const initialState = {
  message: '',
  display: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MSG':
      return {
        ...state,
        message: action.payload,
        display: true,
      };
    case 'HIDE_MSG':
      return {
        ...state,
        message: '',
        display: false,
      };
    default:
      return state;
  }
};

// Referencing the id to reset after multiple votes have occured
let timeoutID;

export const setNotification = (msg, timeout) => dispatch => {
  dispatch({
    type: 'SHOW_MSG',
    payload: msg,
  });

  if (timeoutID) clearTimeout(timeoutID);

  timeoutID = setTimeout(
    () =>
      dispatch({
        type: 'HIDE_MSG',
      }),
    timeout
  );
};

export default reducer;
