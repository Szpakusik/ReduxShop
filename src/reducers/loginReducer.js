import { exact } from "prop-types";
import { connect } from "react-redux";

let index;
let tempObj;
let tempCart;
let addresses, address;
let defaultActive = 0;
// let couterId = 2;

const initState = {

  loginActive: false,
  logged: false,
  user: {
      id: 0,
      name: "",
      surname: "",
      phone: "",
      email: "",
      addresses:[],
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

     case "GET_USER" :

      return{
        ...state,

        user:{
         ...state.user,
         name: action.name,
         surname: action.surname,
         email: action.email,
         phone: action.phone,
         id: action.id
       }
     
     }


    case "GET_ADDRESS" :

      return{
        ...state,

        user:{
          ...state.user,
          addresses: action.addresses,
        }
      }

     case "EDIT_ADDRESS" :

       addresses = [...state.user.addresses];

       addresses.filter( address => {
         if(address.id === action.id){
          address.city = action.city;
          address.post_code = action.postCode;
          address.address = action.street;
          return address;
         }       
        });

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
        id: action.id,
        city: action.city,
        post_code: action.postCode,
        address: action.street,
        active: defaultActive,
      });
      // couterId++;
      
     return{
       ...state,

      user:{
        ...state.user,
           addresses,
      }
     }

     case "CHANGE_ACTIVE_ADDRESS":

      addresses = [...state.user.addresses];
      addresses = addresses.map((address) => {
        if(address.id === action.id) address.active = 1;
        else address.active = 0; 
        return address
      })
      return{
        ...state,

        user:{
          ...state.user,
            addresses,
        }
      }

     case "DELETE_ADDRESS":

      addresses = [...state.user.addresses];
      addresses = addresses.filter((address) => address.id !== action.id);

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