const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SAY_HELLO':
      return [...state, { text: action.text }];
    default:
      return state;
  }
};

export default reducer;
