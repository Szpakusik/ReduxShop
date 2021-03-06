import React, {useState, useEffect} from 'react';
import sideBar from './sideBar.module.scss';
import CategoryElem from './categoryElem/CategoryElem';
import { connect } from 'react-redux';

const SideBar = (props) => {

  if (typeof window === 'undefined') {
    global.window = {}
  }

  // const [ displayProperty, setDisplayProperty ] = useState(props.showSidebarMobile ? "block" : "none");
  const [ displayProperty, setDisplayProperty ] = useState('none');
  const [height, setDimensions] = useState(window.innerHeight)

  let sidebarStyle = window.innerWidth > 770 ? {
    height: height - 58 + 'px',
    display: 'block'
  } : {display: displayProperty};

  function handleResize() {
    setDimensions(window.innerHeight);
    setDisplayProperty( window.innerWidth > 770 ? 'block' : 
    props.showSidebarMobile ? 'block' : 'none' );
    window.scrollTo(0,0)
  }

  const handleCategoryClick = (categoryId) => {
    props.setActiveCat(categoryId);
    props.sendSearchString(''); 
    props.showSidebar( false );
  }

  useEffect(() => {
    let resizeId;
    window.addEventListener('resize', function() {
      clearTimeout(resizeId);
      resizeId = setTimeout(handleResize, 500);
    });

        
    sidebarStyle = window.innerWidth > 770 ? {
      height: height - 58 + 'px',
      display: 'block'
    } : {display: displayProperty};
    
    if(window.innerWidth > 770){
      setDisplayProperty('block')
    } 
    else{
      setDisplayProperty(props.showSidebarMobile ? 'block' : 'none')
    }
  })

  return (

    <div style={sidebarStyle} className={`col-md-1 col-12 ${sideBar.sideBar}`}>
      <div className="row h-100">
        {props.categories && props.categories.map((category, index) => (
          <CategoryElem activeTab={props.activeCategory} lp={index} length={props.categories.length} key={category.id} category={category} onClickFun={() => { handleCategoryClick(category.id) }} />
        ))}

      </div>
    </div>

  )
};

const mapStateToProps = (state) => {
  return {
    activeCategory: state.categoryReducer.activeCategory,
    showSidebarMobile: state.categoryReducer.showSidebarMobile,
    categories: state.categoryReducer.categories,
    searchboxMobileActive: state.productReducer.showSearchboxMobile,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveCat: (id) => { dispatch({ type: "SET_CATEGORY", id: id }) },
    showSearchboxMobile: ( status )=>{
      dispatch( { type:"SHOW_SEARCHBOX_MOBILE", status: status } )
    },
    sendSearchString: ( searchString )=>{
      dispatch({ type:"SET_SEARCH", searchString: searchString })
    },
    showSidebar: ( status )=>{
      dispatch( { type:"SHOW_SIDEBAR", status: status } )
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);