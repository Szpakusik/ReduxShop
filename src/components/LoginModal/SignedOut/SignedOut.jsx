import React, { useState } from 'react';
import axios from 'axios';
import signedOut from './signedOut.module.scss'
import { connect } from 'react-redux';
import { GoogleLoginButton } from '../loginGoogle/LoginGoogle';
import { serverUrl } from '../../../utils/content/url';

const SignedOut = ( props ) => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLoginClick = ()=> {

    axios.post( serverUrl + '/account/login', {
      username: email,
      password: password,
    })
    .then(function (res) {
      localStorage.setItem('JWT', res.data.token);
      props.showLogin(false)
      props.signIn();
      setMessage('');
      props.setActivePage( 'homepage' )
      let accessString = localStorage.getItem('JWT')

      // Get email
      axios.get( serverUrl + '/account/details', {
        headers: { 
            'Authorization': `JWT ${accessString}`,
        },
      })
      .then(function (response) {

          let { name, surname, email, phone, id } = response.data[0]
          console.log({ name, surname, email, phone, id });
          props.getUser( name, surname, email, phone, id );
          console.log(props.user);
          
      })
      .catch(function (error) {
          console.log(error);
      });
      //
    })
    .catch(function (error) {
      console.log(error);
      setMessage( 'Błąd logowania, spróbuj ponownie' );
    });

    

    
  }

  const handleRegisterClick = ( page )=>{
    if( document.querySelector("#register-div") !== null)
      document.querySelector("#register-div").scrollIntoView(true)
    props.setActiveCat(0);
    props.setActivePage( "homepage" );
    props.showLogin(false)
  }

  return(
    <>

            <div className="col-sm-12 w-100 m-2 p-0 mb-0 pb-1">
                <p className="h4 text-center w-100 mb-0 mb-sm-2">Zaloguj się</p>
            </div>

            <div className="col-sm-12 w-100 mt-2 mb-0 pb-2"> 
                <input type="text" onChange={ e =>{ setMessage( '' ); setEmail(e.target.value) }} className={`${signedOut.input} w-100 pl-2`} placeholder='E-Mail' id="email"/>
            </div>
            
            <div className="col-sm-12 w-100 mt-2 mb-0"> 
                <input type="password" onChange={ e => {setMessage( '' ); setPassword(e.target.value) }} className={`${signedOut.input} w-100 pl-2`} placeholder='Hasło' id="password"/>
            </div>
            <div className="row m-0 text-center w-100"><p className="text-danger w-100 pt-2 mb-0">{message}</p></div>
            <div className="row px-3">

              {/* <div className="col-sm-12 text-left h4 mt-4 mb-0"> 
                <GoogleLoginButton />
              </div> */}

            </div>

            <div className="row px-3">

            <div className="col-6 text-center h4 mt-0 mt-md-3 mb-0"> 
                <button type="button" class="w-100 btn btn-outline-success" onClick={ () => handleRegisterClick('editAccount') }>Zarejestruj</button>
            </div>


            <div className="col-6 text-center h4 mt-0 mt-md-3 mb-0"> 
                <button type="button" class="w-100 btn btn-outline-success" onClick={ () => handleLoginClick() }>Zaloguj</button>
            </div>
    
          </div>
    </>
  )
};

const mapStateToProps = (state) => {
  return{
    products: state.productReducer.products,
    activePage: state.pageReducer.activePage,
    user: state.loginReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getUser: ( name, surname, email, phone, id ) => { dispatch( { type: "GET_USER", name: name, surname: surname, email: email, phone: phone, id: id } ) },
    signIn: ()=>{ dispatch( { type: "LOG_IN", isLogged: true } ) },
    setActivePage: ( name )=>{ dispatch( { type: "CHANGE_PAGE", name: name } ) },
    setActiveCat: ( id )=>{ dispatch( { type: "SET_CATEGORY", id: id } ) },
    showLogin: ( status )=>{ dispatch({ type:"SHOW_LOGIN", status: status }) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedOut);
