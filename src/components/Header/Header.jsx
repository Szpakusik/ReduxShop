import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import { connect } from 'react-redux';
import { getCartPrice } from './../../utils/functions/cartFunctions'

import headerStyles from './header.module.scss';

const Header = ( props ) => {

  useEffect( () => {

    let localCart = JSON.parse( localStorage.getItem('cart') );

    if( props.cart.length === 0 && localCart && localCart.products.length > 0 ){

      console.log(JSON.parse( localStorage.getItem('cart') ))
      props.fillCart( localCart.products );

    }

    localStorage.setItem('cart', JSON.stringify( { products: props.cart } ) );
    // console.log(localStorage)
  } );

  const handleCartClick = () => {
    props.showCart( !props.cartActive );
    props.showLogin( false );
  }

  const handleLoginClick = () => {
    props.showLogin( !props.loginActive );
    props.showCart( false );
  }
  const handleSearchboxMobileClick = () => {
    props.showSearchboxMobile( !props.searchboxMobileActive );
    console.log(displayProperty)
    console.log(props.searchboxMobileActive)
    // props.sendSearchString( value )

    props.showCart( false );
    props.showLogin( false );
    props.showSidebar( false )
  }

  const handleMenuClick = () => {
    props.showSidebar( !props.sidebarActive );
  }

  const handleChange = ( value ) => {
    // setSearchString( value )
    props.setActiveCat(-1);
    props.sendSearchString( value )
    console.log(searchString)
  }

  const [ searchString, setSearchString ] = useState('');

  let displayProperty = props.searchboxMobileActive ? "block" : "none" ;
  
  let price = getCartPrice(props.cart)
  let length = props.cart.length;

  console.log(price)

  return (
    <header className={`header ${headerStyles.header}`}>
      <nav className="navbar navbar-light navbar-expand-lg navbar-fixed-top sticky-header p-0">
       
        <div className='container-fluid p-0 overflow-hidden d-none d-sm-flex'>
          <Navbar.Brand className={`banner navbar-header col-xs-12 col-sm-4 ${headerStyles.banner}`}>
            <a className="navbar-brand text-sm-center" href="//localhost:8000">
              <img src={require('./../../images/logo-transparent2.png')} alt=""/>
            </a>
          </Navbar.Brand>
          <div className="col-sm-4 pr-5 pl-0">
            
            <input className="form-control mr-sm-2" type="search" placeholder="Wpisz nazwe produktu..." aria-label="Search" onChange={ e => handleChange(e.target.value) }/>

          </div>
          <nav className={`navbar-nav ml-auto text-dark col-sm-12 col-md-4 border-0 pr-0 d-none d-sm-flex ${headerStyles.koszyk} ${headerStyles.disableSelect}`}>

            <div onClick={ ()=>{ handleCartClick() } } className=" col-sm-6 p-0 text-center row m-0">

              <div className="my-auto p-0 mx-auto">

                <i className="material-icons float-left mb-0 mr-2 my-auto">
                  shopping_cart
                </i>

                <p className='align-middle my-auto font-weight-bold float-left mr-2 my-auto'>
                  Koszyk ({length}) 
                  <span className="pl-2">{price}zł</span>
                </p>

              </div>

            </div>

            <div onClick={ ()=>{ handleLoginClick() } } className="col-sm-6 text-right p-0 text-center row m-0">
             
              <div className="my-auto p-0 mx-auto" >

                <p className="m-0 float-right pr-2 pl-2">Twoje konto</p>
                <i className="material-icons p-0 float-right">
                  person
                </i>

              </div>

            </div>
          
          </nav>
          
          <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
            class="fas fa-bars fa-1x"></i></span>

          </button>

        </div>
        
        {/* Mobile */}
        <div className={`row p-0 overflow-hidden d-flex d-sm-none row h-100 mx-auto ${headerStyles.navbarXS}`}>

          <div className="col-7 h-100 pr-0">

            <div className="row h-100">

              <div className="col-2 m-auto pt-2 pr-0 pl-2" onClick={ () => { handleMenuClick() } }>
                <span class="material-icons text-success" >
                  menu
                </span>
              </div>

              <div className="col-10 pl-0">
                <Navbar.Brand className={`banner navbar-header ${headerStyles.banner}`}>
                  <a className="navbar-brand text-sm-center px-1 py-2" href="//localhost:8000">
                    <img src={require('./../../images/logo-transparentCut.png')}  alt=""/>
                  </a>
                </Navbar.Brand>
              </div>

            </div>

          </div>

          <div className="col-5 ">
            <div className="row h-100">
              <div className="col-4 my-auto ">
                <i className="material-icons float-right" onClick={ () => { handleLoginClick() } }>
                  person
                </i>
              </div>
              
              <div className="col-4 my-auto" onClick={ () => { handleSearchboxMobileClick() } }>
                <i className={`material-icons p-0 float-right`}>
                  search
                </i>
              </div>
              
              <div className="col-4 m-auto text-left pl-0" onClick={ ()=>{ handleCartClick() } }>
                <i className="material-icons float-right my-auto">
                  shopping_cart
                </i>
              </div>
              
            </div>
          </div>

        </div>

      </nav>

      <div className={`w-100 ${headerStyles.searchbarXS} d-${displayProperty} `}>
            
        <input className="form-control mr-sm-2" type="search" placeholder="Wpisz nazwe produktu..." aria-label="Search" onChange={ e => handleChange(e.target.value) }/>

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
    sidebarActive: state.categoryReducer.showSidebarMobile,
    searchboxMobileActive: state.productReducer.showSearchboxMobile,
  }
}
const mapDispatchToProps = ( dispatch ) => {
  return{
      fillCart: (data) => {
        dispatch( { type: 'FILL_CART', cart: data} )
      },
      showCart: ( status )=>{
          dispatch({ type:"SHOW_CART", status: status })
      },
      showLogin: ( status )=>{
          dispatch({ type:"SHOW_LOGIN", status: status })
      },
      showSidebar: ( status )=>{
          dispatch( { type:"SHOW_SIDEBAR", status: status } )
      },
      showSearchboxMobile: ( status )=>{
          dispatch( { type:"SHOW_SEARCHBOX_MOBILE", status: status } )
      },
      sendSearchString: ( searchString )=>{
          dispatch({ type:"SET_SEARCH", searchString: searchString })
      },
      setActiveCat: ( id )=>{ 
          dispatch( { type: "SET_CATEGORY", id: id } ) 
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

