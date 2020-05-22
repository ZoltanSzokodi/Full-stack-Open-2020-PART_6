const initialState = {
  message: '',
  display: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MSG':
      return {
        ...state,
        message: `You voted for "${action.payload}"`,
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

export const showMessage = anecdote => {
  return {
    type: 'SHOW_MSG',
    payload: anecdote,
  };
};

export const hideMessage = () => {
  return {
    type: 'HIDE_MSG',
  };
};

export default reducer;
