const TEST_ACTION = 'TEST_ACTION';

const initState = {

  cartProducts:[],

}

const cartReducer = (state = initState, action) => {
  switch (action.type) {

    case "ADD_TO_CART":
      console.log(state)
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.product]
      }

    default:
      return state;
  }
};

export default cartReducer;
