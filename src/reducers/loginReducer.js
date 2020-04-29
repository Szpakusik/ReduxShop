import { exact } from "prop-types";
import { connect } from "react-redux";

let index;
let tempObj;
let tempCart;
let addresses;
let defaultActive = 0;

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
            id:0,
            street: "Skrzelczyce 116",
            postCode: "26-015",
            city: "Pierzchnica",
            active: 1,
        },
        {
            id:1,
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
         name: action.name,
         surname: action.surname,
         email: action.email,
         phone: action.phone,
       }
     
     }

     case "EDIT_ADDRESS" :

       addresses = [...state.user.addresses];
       addresses[action.id] = {
        ...state.user.addresses[action.id],
        city: action.city,
        postCode: action.postCode,
        street: action.street,
       }

      return{
        ...state,

        user:{
         ...state.user,
            addresses,
       }
     
     }

     case "ADD_ADDRESS" :

      addresses = [...state.user.addresses]
      addresses.push({
        id: addresses.length,
        city: action.city,
        postCode: action.postCode,
        street: action.street,
        active: defaultActive,
      });

     return{
       ...state,

      user:{
        ...state.user,
           addresses,
      }
     }

    default:
      return state;
  }
};

export default loginReducer;