import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import SideBar from '../Sidebar/SideBar';
import MainContent from '../MainContent/MainContent';
import CartModal from '../CartModal/CartModal';
import LoginModal from '../LoginModal/LoginModal';


const TestComponent = ( props ) => {
  
  const handleClick = ()=>{
    if( props.isModalShown ) props.hideModals();
  }

  return(

    <div className="mainContainer">
      <div className="row w-100 p-0" onClick={ ()=>{ handleClick() }}>
        <SideBar/>
        <MainContent />
      </div>
        <CartModal />
        <LoginModal />
    </div>

  )
};
const mapStateToProps = ( state ) => {
  return{
    isModalShown: state.loginReducer.loginActive || state.cartReducer.cartActive,
  }
}
const mapDispatchToProps = ( dispatch ) => {
  return{
      hideModals: ( status )=>{
          dispatch({ type:"SHOW_CART", status: false })
          dispatch({ type:"SHOW_LOGIN", status: false })
      },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);

