import React, { useState } from 'react';
import { connect } from 'react-redux';

const SignedIn = ( props ) => {

  return(
    <>
       
       <p className="h3">Logged in</p>
    
    </>
  )
};

const mapStateToProps = (state) => {
  return{
    products: state.loginReducer.logged,
  }
}

export default connect(mapStateToProps)(SignedIn);
