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

export const setNotification = (msg, timeout) => dispatch => {
  dispatch({
    type: 'SHOW_MSG',
    payload: msg,
  });

  setTimeout(
    () =>
      dispatch({
        type: 'HIDE_MSG',
      }),
    timeout
  );
};

export default reducer;
