const TEST_ACTION = 'TEST_ACTION';

const initState = {

  products: [
    { name:"Mleko Łęckie", weight: '1000ml', price: 4.49, photo:"mleko.jpg", category:1, id:1, amount:1 },
    { name:"Czekolada Wedel Truskawka", weight: '100g', price: 3.79, photo:"czekolada.png", category:1, id:2, amount:1 },
    { name:"Chleb Firmowy", weight: '500g', price: 2.50, photo:"bread.png", category:2, id:3, amount:1 },
    { name:"Bułka Ziarnista", weight: '80g', price: 1.10, photo:"grainyRoll.png", category:2, id:4, amount:1 },
    { name:"Lakier Taft 5", weight: '250ml', price: 12.30, photo:"taft.png", category:3, id:5, amount:1 },
    { name:"Antyperspirant Addidas", weight: '150ml', price: 8.99, photo:"antyper.png", category:3, id:6, amount:1 },
    { name:"Lakier Taft 5", weight: '250ml', price: 12.30, photo:"taft.png", category:3, amount:1 },
    { name:"Antyperspirant Addidas", weight: '150ml', price: 8.99, photo:"antyper.png", category:3, id:7, amount:1 },
    { name:"Jabłka", weight: '1000g', price: 5.49, photo:"apples.png", category:4, id:8, amount:1 },
    { name:"Ogórki", weight: '1000g', price: 8.49, photo:"cucumbers.png", category:4, id:9, amount:1 },
    { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:5, id:10, amount:1 },
    { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:5, id:11, amount:1 },
    { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:5, id:12, amount:1 },
    { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:5, id:13, amount:1 },
    { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:5, id:14, amount:1 },
    { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:5, id:15, amount:1 },
  ],

}

const productReducer = (state = initState, action) => {
  // switch (action.type) {
  //   case TEST_ACTION:
  //     return state;
  //   default:
  //     return state;
  // }
  return state
};

export default productReducer;
