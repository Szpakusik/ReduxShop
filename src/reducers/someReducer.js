const TEST_ACTION = 'TEST_ACTION';

const initState = {

  products: [
    { name:"Mleko Łęckie", weight: '1000ml', price: 4.49, photo:"mleko.jpg", category:"dairy" },
    { name:"Czekolada Wedel Truskawka", weight: '100g', price: 3.79, photo:"czekolada.png", category:"dairy" },
    { name:"Chleb Firmowy", weight: '500g', price: 2.50, photo:"bread.png", category:"grainProducts" },
    { name:"Bułka Ziarnista", weight: '80g', price: 1.10, photo:"grainyRoll.png", category:"grainProducts" },
    { name:"Lakier Taft 5", weight: '250ml', price: 12.30, photo:"taft.png", category:"chemistry" },
    { name:"Antyperspirant Addidas", weight: '150ml', price: 8.99, photo:"antyper.png", category:"chemistry" },
    { name:"Jabłka", weight: '1000g', price: 5.49, photo:"apples.png", category:"natural" },
    { name:"Ogórki", weight: '1000g', price: 8.49, photo:"cucumbers.png", category:"natural" },
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
