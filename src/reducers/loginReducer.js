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

    default:
      return state;
  }
};

export default loginReducer;
