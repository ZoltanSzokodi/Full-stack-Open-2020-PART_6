const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload;
    default:
      return state;
  }
};

export const filterChange = inputStr => {
  return {
    type: 'SET_FILTER',
    payload: inputStr,
  };
};

export default reducer;
