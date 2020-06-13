import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import signedIn from './signedIn.module.scss';
import { serverUrl } from '../../../utils/content/url';

const SignedIn = ( props ) => {

  const handleChangePage = ( page )=>{
    props.setActiveCat(0);
    props.setActivePage( page );
    props.showLogin(false)
  }

  const handleSignOut = ( page )=>{
    localStorage.removeItem('JWT')
    props.getUser( null, null, null, null, null );
    props.getAddresses( [] );
    props.setActivePage( 'homepage' )
    props.signOut();
    props.showLogin(false)
  }

  useEffect( ()=>{
    let accessString = localStorage.getItem('JWT')
    axios.get( serverUrl + '/account/details', {
      headers: { 
          'Authorization': `JWT ${accessString}`,
      },
    })
    .then(function (response) {

        let { name, surname, email, phone, id } = response.data[0]
        props.getUser( name, surname, email, phone, id );
        
    })
    .catch(function (error) {
        console.log(error);
    });
  }, [])

  return(
    <>
    <div className={`container text-dark ${signedIn.signedIn} pt-3`}>

        <div className="row border-bottom p-3" onClick={ ()=>{ handleChangePage('myAccount') }}>
          <p className="h5 m-0">Moje konto</p>
        </div>
        <div className="row border-bottom p-3" onClick={ ()=>{ handleSignOut('logout') }}>
          <p className="h5 m-0">Wyloguj</p>
        </div>

    </div>
    <div className="row text-dark"> 
        <div className="col-sm-12 text-right w-100 h5 mt-2 mb-0"> 
            Zalogowany jako:<br /> <span className="text-success">{props.email}</span>
        </div>
    </div>
    </>
  )
};

const mapStateToProps = (state) => {
  return{
    cart: state.cartReducer.cartProducts,
    email: state.loginReducer.user.email,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getUser: ( name, surname, email, phone, id ) => { dispatch( { type: "GET_USER", name: name, surname: surname, email: email, phone: phone, id: id } ) },
    setActiveCat: ( id )=>{ dispatch( { type: "SET_CATEGORY", id: id } ) },
    setActivePage: ( name )=>{ dispatch( { type: "CHANGE_PAGE", name: name } ) },
    signOut: ()=>{ dispatch( { type: "LOG_IN", isLogged: false } ) },
    getAddresses: ( addresses ) => { dispatch( { type: "GET_ADDRESS", addresses: addresses } ) },
    showLogin: ( status )=>{ dispatch({ type:"SHOW_LOGIN", status: status }) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn);
