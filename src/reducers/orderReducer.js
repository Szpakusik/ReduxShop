const initState = {
  contactDetails: {
      email: "",
      phone: "",
  },
  tempOrderId: -1,
  orders: [
    // {
    //     id: 1231,
    //     date: new Date(),
    //     status: 'W trakcie',
    //     products: [
    //         { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:22, amount:1 },
    //         { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:23, amount:1 },
    //     ],
    // },
    // {
    //     id: 1231,
    //     date: new Date(),
    //     status: 'Nieopłacone',
    //     products: [
    //         { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:22, amount:1 },
    //         { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:23, amount:1 },
    //     ],
    // },
    // {
    //     id: 4231,
    //     date: new Date(),
    //     status: 'Dostarczone',
    //     products: [
    //         { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:22, amount:1 },
    //         { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:23, amount:1 },
    //     ],
    // },

]
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
