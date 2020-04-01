const TEST_ACTION = 'TEST_ACTION';

const initState = {

  activePage: "homepage",

}

const pageReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":

      return {
        ...state,
        activePage: action.name,
      }
    
    default:
      return state;
  }
};

export default pageReducer;
