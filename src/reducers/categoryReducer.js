const TEST_ACTION = 'TEST_ACTION';

const initState = {

  activeCategory: 0,
  showSidebarMobile: false,
  categories: [ {id: 'nabial', name: 'Nabiał Tłuszcze', icon:'cheese.png', active: true},
                {id: 'produkty-zbozowe', name: 'Produkty Zbożowe', icon:'wheat.png', active: false},
                {id: 'chemia', name: 'Chemia', icon:'soap.png', active: false}, 
                {id: 'owoce', name: 'Warzywa Owoce', icon:'vegetables.png', active: false}, 
                {id: 'mieso', name: 'Mięso Wędliny', icon:'meat.png', active: false},
                {id: 'przekaski', name: 'Słodycze Przekąski', icon:'candy.png', active: false}],
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        activeCategory: action.id,
      }

    case "SHOW_SIDEBAR":
      return {
        ...state,
        showSidebarMobile: action.status,
      }
    
    default:
      return state;
  }
  return state
};

export default cartReducer;
