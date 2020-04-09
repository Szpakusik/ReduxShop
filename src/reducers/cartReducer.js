let index;
let tempObj;
let tempCart;

const initState = {

  cartProducts:[],
  cartActive: false,

}

const cartReducer = (state = initState, action) => {
  switch (action.type) {

    case "ADD_TO_CART":

      if ( state.cartProducts.some(e => e.id === action.product.id) ) {

        index = state.cartProducts.findIndex(x => x.id === action.product.id);
        
        tempObj = state.cartProducts[index];
        // tempObj.amount += 1;
        
        tempCart = state.cartProducts;
        tempCart = tempCart.filter( elem => {
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

    case "REMOVE_FROM_CART":
      
      tempCart = state.cartProducts.filter( (elem)=>{
        return action.id !== elem.id;
      } )
      return {
        ...state,
        cartProducts: tempCart
      }

    case "CLEAR_CART":

      return {
        ...state,
        cartProducts: [],
      }

    case "SHOW_CART":

      return {
        ...state,
        
        cartActive: action.status,
      }

    default:
      return state;
  }
};

export default cartReducer;
