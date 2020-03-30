import React, { useState } from 'react';
import signedOut from './signedOut.module.scss'
import { connect } from 'react-redux';

const SignedOut = ( props ) => {
    
  return(
    <>

            <div className="col-sm-12 w-100 m-2 p-0 mb-0">
                <p className="h4 text-center w-100">Zaloguj się</p>
            </div>

            <div className="col-sm-12 w-100 mt-2 mb-0"> 
                <label htmlfor="login"><b>E-Mail</b></label><br />
                <input type="text" className={`${signedOut.input} w-100`} id="login"/>
            </div>
            
            <div className="col-sm-12 w-100 mt-2 mb-0"> 
                <label htmlfor="password"><b>Hasło</b></label><br />
                <input type="password" className={`${signedOut.input} w-100`} id="password"/>
            </div>

            <div className="col-sm-12 text-right w-100 h4 mt-4 mb-0"> 
                <button type="button" class="ml-3 btn btn-outline-success">Zaloguj</button>
            </div>
    
    </>
  )
};

const mapStateToProps = (state) => {
  return{
    products: state.loginReducer.logged,
  }
}

export default connect(mapStateToProps)(SignedOut);
