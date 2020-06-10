const initState = {
  contactDetails: {
      email: "",
      phone: "",
  },
  tempOrderId: -1,
  orders: [],
}

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CONTACT_DETAILS":
      return {
        ...state,
        contactDetails:{
             email: action.email,
             phone: action.phone,
         },
      }
    case "SET_ORDERS":
      return{
        ...state,
        orders: action.orders,
      }
    case "SET_TEMP_ORDER":
      return{
        ...state,
        tempOrderId: action.id,
      }
    
    default:
      return state;
  }
};

export default orderReducer;
