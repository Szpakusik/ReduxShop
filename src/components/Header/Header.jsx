import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import { connect } from 'react-redux';
import { getCartPrice } from './../../utils/functions/cartFunctions'

import headerStyles from './header.module.scss';

const Header = ( props ) => {

  const handleCartClick = () => {
    props.showCart( !props.cartActive )
    props.showLogin( false )
  }

  const handleLoginClick = () => {
    props.showLogin( !props.loginActive )
    props.showCart( false )
  }

  let price = getCartPrice(props.cart)

  let length = props.cart.length;

  console.log(price)

  return (
    <header className={`header ${headerStyles.header}`}>
      <div className="navbar navbar-light navbar-expand-lg navbar-fixed-top sticky-header p-0">
       
        <div className='container-fluid p-0 overflow-hidden'>
          <Navbar.Brand className={`banner navbar-header col-sm-4 ${headerStyles.banner}`}>
            <a className="navbar-brand" href="//localhost:8000">
              <i className="material-icons">
                local_mall
              </i>  
              <p className='mb-0'>Spożywczy24h</p>
            </a>
          </Navbar.Brand>
          <div className="col-sm-4 "></div>
          <Nav className={`navbar-nav ml-auto text-dark col-sm-12 col-md-4 border-0 pr-0 ${headerStyles.koszyk} ${headerStyles.disableSelect}`}>

            <div onClick={ ()=>{ handleCartClick() } } className=" col-sm-6 p-0 border-left text-center row m-0">

              <div className="my-auto p-0 mx-auto">

                <p className="material-icons float-left mb-0  mr-2 my-auto">
                  shopping_cart
                </p>

                <p className='align-middle my-auto font-weight-bold float-left mr-2 my-auto'>
                  Koszyk ({length}) 
                  <span className="pl-2">{price}zł</span>
                </p>

              </div>

            </div>

            <div onClick={ ()=>{ handleLoginClick() } } className="col-sm-6 text-right p-0 border-left text-center row m-0">
             
              <div className="my-auto p-0 mx-auto" >

                <p className="m-0 float-right pr-2 pl-2">Twoje konto</p>
                <i className="material-icons p-0 float-right">
                  person
                </i>

              </div>

            </div>
          
          </Nav>
        </div>


        
      </div>
    </header>
  );
};

Header.propTypes = {

};
Header.defaultProps = {

};

const mapStateToProps = (state) => {
  return{
    cart: state.cartReducer.cartProducts,
    cartActive: state.cartReducer.cartActive,
    loginActive: state.loginReducer.loginActive,
  }
}
const mapDispatchToProps = ( dispatch ) => {
  return{
      showCart: ( status )=>{
          dispatch({ type:"SHOW_CART", status: status })
      },
      showLogin: ( status )=>{
          dispatch({ type:"SHOW_LOGIN", status: status })
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

