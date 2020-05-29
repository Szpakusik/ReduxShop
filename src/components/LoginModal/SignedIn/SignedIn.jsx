import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import signedIn from './signedIn.module.scss'

import { serverUrl } from '../../../utils/content/url';
import { getCartPrice } from '../../../utils/functions/cartFunctions';


const SignedIn = ( props ) => {

  const handleChangePage = ( page )=>{
    props.setActiveCat(0);
    props.setActivePage( page );
  }

  const handleSignOut = ( page )=>{
    localStorage.removeItem('JWT')
    props.getUser( null, null, null, null, null );
    props.getAddresses( [] );
    props.setActivePage( 'homepage' )
    props.signOut();
  }

  const handleTestClick = ( )=>{

    console.log(props.user);
  }
  return(
    <>
    <div className={`container text-dark ${signedIn.signedIn} pt-3`}>
       
        <div className="row border-bottom p-3" onClick={ ()=>{ handleTestClick() }}>
          <p className="h5 m-0">Test Button</p>
        </div>
        <div className="row border-bottom p-3" onClick={ ()=>{ handleChangePage('myAccount') }}>
          <p className="h5 m-0">Moje konto</p>
        </div>
        <div className="row border-bottom p-3" onClick={ ()=>{ handleSignOut('logout') }}>
          <p className="h5 m-0">Wyloguj</p>
        </div>

    </div>
    <div className="row text-dark"> 
        <div className="col-sm-12 text-right w-100 h5 mt-2 mb-0"> 
            {/* Zalogowany jako:<br /> <span className="text-success">{props.user.email}</span> */}
        </div>
    </div>
    </>
  )
};

const mapStateToProps = (state) => {
  return{
    cart: state.cartReducer.cartProducts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getUser: ( name, surname, email, phone, id ) => { dispatch( { type: "GET_USER", name: name, surname: surname, email: email, phone: phone, id: id } ) },
    setActiveCat: ( id )=>{ dispatch( { type: "SET_CATEGORY", id: id } ) },
    setActivePage: ( name )=>{ dispatch( { type: "CHANGE_PAGE", name: name } ) },
    signOut: ()=>{ dispatch( { type: "LOG_IN", isLogged: false } ) },
    getAddresses: ( addresses ) => { dispatch( { type: "GET_ADDRESS", addresses: addresses } ) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn);
