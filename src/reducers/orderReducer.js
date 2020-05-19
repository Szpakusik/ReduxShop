const initState = {
  contactDetails: {
      email: "",
      phone: "",
  }
}

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CONTACT_DETAILS":
        console.log(action)
      return {
        ...state,
        contactDetails:{
             email: action.email,
             phone: action.phone,
         },
      }
    
    default:
      return state;
  }
};

export default orderReducer;
