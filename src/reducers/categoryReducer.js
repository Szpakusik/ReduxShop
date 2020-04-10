const TEST_ACTION = 'TEST_ACTION';

const initState = {

  activeCategory: 0,
  categories: [ {id: 'nabial', name: 'Nabiał', icon:'local_offer', active: true},
                {id: 'produkty-zbozowe', name: 'Produkty Zbożowe', icon:'local_offer', active: false},
                {id: 'chemia', name: 'Chemia', icon:'local_offer', active: false}, 
                {id: 'owoce', name: 'Warzywa Owoce', icon:'local_offer', active: false}, 
                {id: 'mieso', name: 'Mięso', icon:'local_offer', active: false}],
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        activeCategory: action.id,
      }
    
    default:
      return state;
  }
  return state
};

export default cartReducer;
