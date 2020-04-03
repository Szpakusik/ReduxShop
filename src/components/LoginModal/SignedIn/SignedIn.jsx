import React, { useState } from 'react';
import { connect } from 'react-redux';

import signedIn from './signedIn.module.scss'

const SignedIn = ( props ) => {

  const handleClick = ( page )=>{
    props.setActiveCat(0)
    props.setActivePage( page )
  }

  const handleClick2 = ( page )=>{
    props.signOut();
  }
  return(
    <>
    <div className={`container text-dark ${signedIn.signedIn} pt-3`}>
       
        <div className="row border-bottom p-3" onClick={ ()=>{ handleClick('homepage') }}>
          <p className="h5 m-0">Listy zakupów</p>
        </div>
        <div className="row border-bottom p-3" onClick={ ()=>{ handleClick('editAccount') }}>
          <p className="h5 m-0">Moje konto</p>
        </div>
        <div className="row border-bottom p-3" onClick={ ()=>{ handleClick2('logout') }}>
          <p className="h5 m-0">Wyloguj</p>
        </div>

    </div>
    <div className="row text-dark"> 
        <div className="col-sm-12 text-right w-100 h5 mt-2 mb-0"> 
            Zalogowany jako:<br /> <span className="text-success">szpakusik@gmail.com</span>
            {/* <button type="button" class="ml-3 btn btn-sm btn-outline-success">Zamów</button> */}
        </div>
    </div>
    </>
  )
};

const mapStateToProps = (state) => {
  return{
    products: state.loginReducer.logged,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setActiveCat: ( id )=>{ dispatch( { type: "SET_CATEGORY", id: id } ) },
    setActivePage: ( name )=>{ dispatch( { type: "CHANGE_PAGE", name: name } ) },
    signOut: ()=>{ dispatch( { type: "LOG_IN", isLogged: false } ) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn);
