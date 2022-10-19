const initialState = {
  list: [],
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LIST': 
        return {...state, list: action.data}
      default:
          return state;
  }
};

export default AppReducer;
