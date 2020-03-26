const TEST_ACTION = 'TEST_ACTION';

const initState = {

  activeCategory: 1,
  categories: [ {id: 1, name: 'Nabiał', icon:'local_offer', active: true},
                {id: 2, name: 'Produkty Zbożowe', icon:'local_offer', active: false},
                {id: 3, name: 'Chemia', icon:'local_offer', active: false}, 
                {id: 4, name: 'Warzywa Owoce', icon:'local_offer', active: false}, 
                {id: 5, name: 'Mięso', icon:'local_offer', active: false}],
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      console.log(action)
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
