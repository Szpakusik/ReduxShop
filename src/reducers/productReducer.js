const TEST_ACTION = 'TEST_ACTION';

const initState = {

  searchString: "",
  showSearchboxMobile: false,
  products: [
    { name:"Mleko Łęckie", weight: '1000ml', price: 4.49, photo:"mleko.jpg", category:"nabial", id:1, amount:1 },
    { name:"Czekolada Wedel Truskawka", weight: '100g', price: 3.79, photo:"czekolada.png", category:"przekaski", id:2, amount:1 },
    { name:"Chleb Firmowy", weight: '500g', price: 2.50, photo:"bread.png", category:"produkty-zbozowe", id:3, amount:1 },
    { name:"Bułka Ziarnista", weight: '80g', price: 1.10, photo:"grainyRoll.png", category:"produkty-zbozowe", id:4, amount:1 },
    { name:"Lakier Taft 5", weight: '250ml', price: 12.30, photo:"taft.png", category:"chemia", amount:1 },
    { name:"Antyperspirant Addidas", weight: '150ml', price: 8.99, photo:"antyper.png", category:"chemia", id:7, amount:1 },
    { name:"Jabłka", weight: '1000g', price: 5.49, photo:"apples.png", category:"owoce", id:8, amount:1 },
    { name:"Ogórki", weight: '1000g', price: 8.49, photo:"cucumbers.png", category:"owoce", id:9, amount:1 },
    { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:10, amount:1 },
    { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:11, amount:1 },
    { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:12, amount:1 },
    { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:13, amount:1 },
    { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:14, amount:1 },
    { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:15, amount:1 },
    { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:16, amount:1 },
    { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:17, amount:1 },
    { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:18, amount:1 },
    { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:19, amount:1 },
    { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:20, amount:1 },
    { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:21, amount:1 },
    { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:22, amount:1 },
    { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:23, amount:1 },

    { name:"Ser Radamer Plastry", weight: '135g', price: 8.34, photo:"Ser_Radamer_Serenada.jpg", category:"nabial", id:24, amount:1 },
    { name:"Ser Królewski Plastry", weight: '150g', price: 4.19, photo:"ser_krolewski.jpg", category:"nabial", id:25, amount:1 },
    { name:"Hochland Gouda Plastry", weight: '135g', price: 5.18, photo:"hochland-gouda.png", category:"nabial", id:26, amount:1 },
    { name:"Mlekovita Gouda Plastry", weight: '155g', price: 3.58, photo:"mlekovita.jpg", category:"nabial", id:36, amount:1 },
    { name:"Ser Radamer Plastry", weight: '135g', price: 8.34, photo:"Ser_Radamer_Serenada.jpg", category:"nabial", id:27, amount:1 },
    { name:"Ser Królewski Plastry", weight: '150g', price: 4.19, photo:"ser_krolewski.jpg", category:"nabial", id:28, amount:1 },
    { name:"Mlekovita Gouda Plastry", weight: '155g', price: 3.58, photo:"mlekovita.jpg", category:"nabial", id:30, amount:1 },
    { name:"Hochland Gouda Plastry", weight: '135g', price: 5.18, photo:"hochland-gouda.png", category:"nabial", id:29, amount:1 },
    { name:"Mlekovita Gouda Plastry", weight: '155g', price: 3.58, photo:"mlekovita.jpg", category:"nabial", id:32, amount:1 },
    { name:"Hochland Gouda Plastry", weight: '135g', price: 5.18, photo:"hochland-gouda.png", category:"nabial", id:34, amount:1 },
    { name:"Mlekovita Gouda Plastry", weight: '155g', price: 3.58, photo:"mlekovita.jpg", category:"nabial", id:35, amount:1 },
    { name:"Ser Radamer Plastry", weight: '135g', price: 8.34, photo:"Ser_Radamer_Serenada.jpg", category:"nabial", id:31, amount:1 },
    { name:"Ser Królewski Plastry", weight: '150g', price: 4.19, photo:"ser_krolewski.jpg", category:"nabial", id:33, amount:1 },


    { name:"Casti Makarol Błysk.", weight: '1kg', price: 6.19, photo:"casti-makaron-blyskawiczny-1kg.jpg", category:"produkty-zbozowe", id:37, amount:1 },
    { name:"Chiński Makaron Błysk.", weight: '500g', price: 6.99, photo:"china.jpg", category:"produkty-zbozowe", id:38, amount:1 },
    { name:"DF Makaron Konjac", weight: '1kg', price: 22.19, photo:"konjac.jpg", category:"produkty-zbozowe", id:39, amount:1 },
    { name:"Lubella Makaron Świderki", weight: '500g', price: 4.19, photo:"lubella.jpg", category:"produkty-zbozowe", id:40, amount:1 },
    { name:"Chleb Kielecki", weight: '500g', price: 3.39, photo:"kielecki.jpg", category:"produkty-zbozowe", id:41, amount:1 },
    { name:"Chleb Żytni Razowy", weight: '500g', price: 4.59, photo:"zytni.jpg", category:"produkty-zbozowe", id:47, amount:1 },
    { name:"Chleb Jurajski Krojony", weight: '500g', price: 2.89, photo:"jurajski.jpg", category:"produkty-zbozowe", id:42, amount:1 },
    { name:"Lubella Makaron Świderki", weight: '500g', price: 4.19, photo:"lubella.jpg", category:"produkty-zbozowe", id:43, amount:1 },
    { name:"Chleb Kielecki", weight: '500g', price: 3.39, photo:"kielecki.jpg", category:"produkty-zbozowe", id:44, amount:1 },
    { name:"Casti Makarol Błysk.", weight: '1kg', price: 6.19, photo:"casti-makaron-blyskawiczny-1kg.jpg", category:"produkty-zbozowe", id:45, amount:1 },

    { name:"Bambino Mydło dla Dzieci", weight: '90g', price: 1.89, photo:"bambino.jpg", category:"chemia", id:48, amount:1 },
    { name:"Mydło do Mycia Rąk", weight: '5l', price: 9.99, photo:"dorak.jpg", category:"chemia", id:49, amount:1 },
    { name:"Mydło Kostka Luksja", weight: '100g', price: 1.69, photo:"luksja.jpg", category:"chemia", id:50, amount:1 },
    { name:"Mydło do Mycia Rąk", weight: '5l', price: 9.99, photo:"dorak.jpg", category:"chemia", id:53, amount:1 },
    { name:"Mydło PRO-CHEM płyn", weight: '500ml', price: 9.69, photo:"all.jpg", category:"chemia", id:51, amount:1 },
    { name:"Mydło BIAŁY JELEŃ", weight: '150g', price: 4.49, photo:"bjelen.jpg", category:"chemia", id:52, amount:1 },
    { name:"Bambino Mydło dla Dzieci", weight: '90g', price: 1.89, photo:"bambino.jpg", category:"chemia", id:55, amount:1 },
    { name:"Mydło Kostka Luksja", weight: '100g', price: 1.69, photo:"luksja.jpg", category:"chemia", id:54, amount:1 },
    { name:"Lakier Taft 5", weight: '250ml', price: 12.30, photo:"taft.png", category:"chemia", id:57, amount:1 },
    { name:"Antyperspirant Addidas", weight: '150ml', price: 8.99, photo:"antyper.png", category:"chemia", id:6, amount:1 },
    
    { name:"Cytryna", weight: '100g', price: 1.63, photo:"cytryna.jpg", category:"owoce", id:64, amount:1 },
    { name:"Pietruszka", weight: '500g', price: 4.00, photo:"pietrusza.jpg", category:"owoce", id:61, amount:1 },
    { name:"Pietruszka Świeża", weight: '3.5kg', price: 45.23, photo:"pitruszka.jpg", category:"owoce", id:62, amount:1 },
    { name:"Cebula Szalotka", weight: '250g', price: 3.23, photo:"szalotka.jpg", category:"owoce", id:63, amount:1 },
    { name:"Papryka", weight: '100g', price: 2.63, photo:"papryka.jpg", category:"owoce", id:65, amount:1 },
    { name:"Cytryna", weight: '100g', price: 1.63, photo:"cytryna.jpg", category:"owoce", id:67, amount:1 },
    { name:"Papryka", weight: '100g', price: 2.63, photo:"papryka.jpg", category:"owoce", id:68, amount:1 },
    { name:"Pietruszka Świeża", weight: '3.5kg', price: 45.23, photo:"pitruszka.jpg", category:"owoce", id:69, amount:1 },
    { name:"Cebula Szalotka", weight: '250g', price: 3.23, photo:"szalotka.jpg", category:"owoce", id:70, amount:1 },
    
    { name:"Ferrero - Raffaello", weight: '150g', price: 10.23, photo:"szalotka.jpg", category:"przekaski", id:71, amount:1 },
    { name:"Śmiejżelki Classic nimm2", weight: '90g', price: 3.15, photo:"nimm2.jpg", category:"przekaski", id:72, amount:1 },
    { name:"Śmiejżelki Duszki nimm2", weight: '90g', price: 5.15, photo:"duszki.jpg", category:"przekaski", id:73, amount:1 },
    { name:"Jojo Pianki Marshmallow", weight: '90g', price: 2.15, photo:"jojo.jpg", category:"przekaski", id:74, amount:1 },
    { name:"Galaretka Mella Pomarań.", weight: '90g', price: 2.15, photo:"mella.jpg", category:"przekaski", id:81, amount:1 },
    { name:"Ferrero - Raffaello", weight: '150g', price: 10.23, photo:"szalotka.jpg", category:"przekaski", id:75, amount:1 },
    { name:"Jojo Pianki Marshmallow", weight: '90g', price: 2.15, photo:"jojo.jpg", category:"przekaski", id:76, amount:1 },
    { name:"Galaretka Mella Pomarań.", weight: '90g', price: 2.15, photo:"mella.jpg", category:"przekaski", id:77, amount:1 },
    { name:"Śmiejżelki Classic nimm2", weight: '90g', price: 3.15, photo:"nimm2.jpg", category:"przekaski", id:78, amount:1 },
    { name:"Śmiejżelki Duszki nimm2", weight: '90g', price: 5.15, photo:"duszki.jpg", category:"przekaski", id:79, amount:1 },

    
  ],

}

const productReducer = (state = initState, action) => {
  switch (action.type) {

    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.data,
      }

    case "SET_SEARCH":
      return {
        ...state,
        searchString: action.searchString
      }

    case "SHOW_SEARCHBOX_MOBILE":
      return {
        ...state,
        showSearchboxMobile: action.status,
      }
      
    default:
      return state;
  }
  return state
};

export default productReducer;
