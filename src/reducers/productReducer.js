const TEST_ACTION = 'TEST_ACTION';

const initState = {

  products: [
    // { name:"Mleko Łęckie", weight: '1000ml', price: 4.49, photo:"mleko.jpg", category:"nabial", id:1, amount:1 },
    // { name:"Czekolada Wedel Truskawka", weight: '100g', price: 3.79, photo:"czekolada.png", category:"nabial", id:2, amount:1 },
    // { name:"Chleb Firmowy", weight: '500g', price: 2.50, photo:"bread.png", category:"produkty-zbozowe", id:3, amount:1 },
    // { name:"Bułka Ziarnista", weight: '80g', price: 1.10, photo:"grainyRoll.png", category:"produkty-zbozowe", id:4, amount:1 },
    // { name:"Lakier Taft 5", weight: '250ml', price: 12.30, photo:"taft.png", category:"chemia", id:5, amount:1 },
    // { name:"Antyperspirant Addidas", weight: '150ml', price: 8.99, photo:"antyper.png", category:"chemia", id:6, amount:1 },
    // { name:"Lakier Taft 5", weight: '250ml', price: 12.30, photo:"taft.png", category:"chemia", amount:1 },
    // { name:"Antyperspirant Addidas", weight: '150ml', price: 8.99, photo:"antyper.png", category:"chemia", id:7, amount:1 },
    // { name:"Jabłka", weight: '1000g', price: 5.49, photo:"apples.png", category:"owoce", id:8, amount:1 },
    // { name:"Ogórki", weight: '1000g', price: 8.49, photo:"cucumbers.png", category:"owoce", id:9, amount:1 },
    // { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:10, amount:1 },
    // { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:11, amount:1 },
    // { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:12, amount:1 },
    // { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:13, amount:1 },
    // { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:14, amount:1 },
    // { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:15, amount:1 },
    // { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:16, amount:1 },
    // { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:17, amount:1 },
    // { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:18, amount:1 },
    // { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:19, amount:1 },
    // { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:20, amount:1 },
    // { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:21, amount:1 },
    // { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:22, amount:1 },
    // { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:23, amount:1 },
  ],

}

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.data,
      }
    default:
      return state;
  }
  return state
};

export default productReducer;
