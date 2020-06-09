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

  const handleClick = ()=> {

    axios.post( serverUrl + '/account/login', {
      username: email,
      password: password,
    })
    .then(function (res) {
      localStorage.setItem('JWT', res.data.token)
      props.signIn();
      setMessage('');
      props.setActivePage( 'homepage' )
    })
    .catch(function (error) {
      console.log(error);
      setMessage( 'Błąd logowania, spróbuj ponownie' );
    });
    
  }

  const handleClick2 = ( page )=>{
    props.setActiveCat(0)
    props.setActivePage( page )
  }

  return(
    <>

            <div className="col-sm-12 w-100 m-2 p-0 mb-0">
                <p className="h4 text-center w-100">Zaloguj się</p>
            </div>

            <div className="col-sm-12 w-100 mt-2 mb-0"> 
                <label htmlfor="email"><b>E-Mail</b></label><br />
      
                <input type="text" onChange={ e =>{ setMessage( '' ); setEmail(e.target.value) }} className={`${signedOut.input} w-100`} id="email"/>
            </div>
            
            <div className="col-sm-12 w-100 mt-2 mb-0"> 
                <label htmlfor="password"><b>Hasło</b></label><br />
                <input type="password" onChange={ e => {setMessage( '' ); setPassword(e.target.value) }} className={`${signedOut.input} w-100`} id="password"/>
            </div>
            <div className="row m-0 text-center w-100"><p className="text-danger w-100 pt-3 mb-0">{message}</p></div>
            <div className="row px-3">

              <div className="col-sm-12 text-left h4 mt-4 mb-0"> 
                <GoogleLoginButton />
              </div>

            </div>

            <div className="row px-3">

            <div className="col-sm-6 text-center h4 mt-3 mb-0"> 
                <button type="button" class="w-100 btn btn-outline-success" onClick={ () => handleClick2('editAccount') }>Zarejestruj</button>
            </div>


            <div className="col-sm-6 text-center h4 mt-3 mb-0"> 
                <button type="button" class="w-100 btn btn-outline-success" onClick={ () => handleClick() }>Zaloguj</button>
            </div>
    
          </div>
    </>
  )
};

const mapStateToProps = (state) => {
  return{
    products: state.productReducer.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signIn: ()=>{ dispatch( { type: "LOG_IN", isLogged: true } ) },
    setActivePage: ( name )=>{ dispatch( { type: "CHANGE_PAGE", name: name } ) },
    setActiveCat: ( id )=>{ dispatch( { type: "SET_CATEGORY", id: id } ) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedOut);
