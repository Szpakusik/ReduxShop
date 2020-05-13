import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import signedIn from './signedIn.module.scss'

import { serverUrl } from '../../../utils/content/url';
import { getCartPrice } from '../../../utils/functions/cartFunctions';


const SignedIn = ( props ) => {

  const handleClick = ( page )=>{
    props.setActiveCat(0);
    props.setActivePage( page );

    let accessString = localStorage.getItem('JWT')

    axios.get( serverUrl + '/account/findUser', {
      headers: { 
        Authorization: `JWT ${accessString}`,
      },
    })
    .then(function (response) {
      console.log(response.body);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const handleClick2 = ( page )=>{
    localStorage.removeItem('JWT')
    props.signOut();
  }

  const handleTestClick = ( )=>{
    
    // axios.post( serverUrl + '/payment/sendorder',{
    //   price: getCartPrice(props.cart),
    //   cart: props.cart
    // })
    // .then( (response) => {
    //   console.log(response);

    //   if(response.data.redirectUri) 
    //     window.open(response.data.redirectUri, "_blank")

    // }, err => console.log(err) )

    let accessString = localStorage.getItem('JWT')
    axios.post( serverUrl + '/address',{
      city: "Warszawa",
      address: "ul. Wyzwolenia 143/12",
      postCode: "23-234",
      userId: 2 
    },{
      headers: { 
        Authorization: `JWT ${accessString}`,
      },
    })
    .then( (response) => {
      console.log(response);
    }, err => console.log(err) )
    

  }
  return(
    <>
    <div className={`container text-dark ${signedIn.signedIn} pt-3`}>
       
        <div className="row border-bottom p-3" onClick={ ()=>{ handleTestClick() }}>
          <p className="h5 m-0">Test Button</p>
        </div>
        <div className="row border-bottom p-3" onClick={ ()=>{ handleClick('myAccount') }}>
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
    cart: state.cartReducer.cartProducts,
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
