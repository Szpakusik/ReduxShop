const TEST_ACTION = 'TEST_ACTION';

const initState = {

  products: [
    { name:"Mleko Łęckie", weight: '1000ml', price: 4.49, photo:"mleko.jpg" },
    { name:"Czekolada Wedel Truskawka", weight: '100g', price: 3.79, photo:"czekolada.png" }
  ],

  cart:{
    products:[{ name:"Mleko Łęckie", weight: '1000ml', price: 4.49, photo:"mleko.jpg" },],

  }

}

const someReducer = (state = initState, action) => {
  // switch (action.type) {
  //   case TEST_ACTION:
  //     return state;
  //   default:
  //     return state;
  // }
  return state
};

export default someReducer;
