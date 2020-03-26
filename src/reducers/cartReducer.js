const TEST_ACTION = 'TEST_ACTION';

let index;
let tempObj;
let tempCart;

const initState = {

  cartProducts:[],

}

const cartReducer = (state = initState, action) => {
  switch (action.type) {

    case "ADD_TO_CART":

      if ( state.cartProducts.some(e => e.id === action.product.id) ) {

        index = state.cartProducts.findIndex(x => x.id === action.product.id);
        console.log(index)
        
        tempObj = state.cartProducts[index];
        tempObj.amount += 1;
        
        tempCart = state.cartProducts;
        tempCart = tempCart.filter( elem => {
          console.log(action.product.id !== elem.id)
          return action.product.id !== elem.id;
        });
        // tempCart.push( tempObj );

        return {
          ...state,
          
          cartProducts: [...tempCart, tempObj]
        }
      }
      else{
        
        return {
          ...state,
          
          cartProducts: [...state.cartProducts, action.product]
        }

      }


    default:
      return state;
  }
};

export default cartReducer;
