let index;
let tempObj;
let tempCart;

const initState = {

  loginActive: false,
  logged: false,

}

const loginReducer = (state = initState, action) => {
  switch (action.type) {

    case "SHOW_LOGIN":

      return {
        ...state,
        
        loginActive: action.status,
      }

    case "LOG_IN":

      return {
        ...state,
        
        logged: action.isLogged,
      }

    default:
      return state;
  }
};

export default loginReducer;
