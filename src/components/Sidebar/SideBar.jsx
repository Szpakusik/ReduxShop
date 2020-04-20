import React from 'react';
import sideBar from './SideBar.module.scss';
import CategoryElem from './categoryElem/CategoryElem';
import { connect } from 'react-redux';

const SideBar = (props) => {

  if (typeof window === 'undefined') {
    global.window = {}
  }

  const [height, setDimensions] = React.useState(window.innerHeight)

  const sidebarStyle = {
    height: height - 58 + 'px',
  }

  function handleResize() {
    setDimensions(window.innerHeight)
    console.log('resize fired')
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (

    <div style={sidebarStyle} className={`col-md-1 col-xs-12 ${sideBar.sideBar}`}>
      {props.categories && props.categories.map((category) => (
        <CategoryElem activeTab={props.activeCategory} key={category.id} category={category} onClickFun={() => { props.setActiveCat(category.id) }} />
      ))}
    </div>

  )
};

const mapStateToProps = (state) => {
  return {
    activeCategory: state.categoryReducer.activeCategory,
    categories: state.categoryReducer.categories,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveCat: (id) => { dispatch({ type: "SET_CATEGORY", id: id }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);