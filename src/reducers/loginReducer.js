import { exact } from "prop-types";

let index;
let tempObj;
let tempCart;

const initState = {

  loginActive: false,
  logged: true,
  user: {
      id: 0,
      name: "Jan",
      surname: "Kowalski",
      phone: "000-000-000",
      email: "example@email.com",
      addresses:[
        {
            street: "Skrzelczyce 116",
            postCode: "26-015",
            city: "Pierzchnica",
            active: 1,
        },
        {
            street: "Skrzelczyce 143",
            postCode: "26-026",
            city: "Morawica",
            active: 0,
        }
     ]
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

     case "EDIT_USER" :

      return{
        ...state,

        user:{
         ...state.user,
         name: action.data[0],
         surname: action.data[1],
         email: action.data[2],
         phone: action.data[3],
       }
     
     }

    default:
      return state;
  }
};

export default loginReducer;
