import React from 'react';
import sideBar from './SideBar.module.scss';
import CategoryElem from './categoryElem/CategoryElem';
import { connect } from 'react-redux';

const SideBar = (props) => {

  if (typeof window === 'undefined') {
    global.window = {}
  }

  const displayProperty = props.showSidebarMobile ? "block" : "none" ;
  const [height, setDimensions] = React.useState(window.innerHeight)

  const sidebarStyle = window.innerWidth > 845 ? {
    height: height - 58 + 'px',
  } : {display: displayProperty};

  function handleResize() {
    setDimensions(window.innerHeight)
    console.log('resize fired')
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (

    <div style={sidebarStyle} className={`col-md-1 col-12 ${sideBar.sideBar}`}>
      <div className="row h-100">
        {props.categories && props.categories.map((category, index) => (
          <CategoryElem activeTab={props.activeCategory} lp={index} length={props.categories.length} key={category.id} category={category} onClickFun={() => { props.setActiveCat(category.id) }} />
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveCat: (id) => { dispatch({ type: "SET_CATEGORY", id: id }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);