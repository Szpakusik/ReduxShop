import { exact } from "prop-types";

let index;
let tempObj;
let tempCart;

const initState = {

  loginActive: false,
  logged: true,
  user: {
      id: 0,
      email: "example@email.com",
      phone: "000-000-000",
      adress: "Kielce",
      name: "Jan",
      surname: "Kowalski",
      post_code: "26-015",
      city: "Kielce"
    },
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
