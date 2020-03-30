import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import { connect } from 'react-redux';

import loginModal from './loginModal.module.scss';
import SignedOut from './SignedOut/SignedOut';
import SignedIn from './SignedIn/SignedIn';

const LoginModal = ( props ) => {

    const content = props.logged ? <SignedIn /> : <SignedOut />

  return (
    <>
    { props.active ?

        <div className={`container ${loginModal.loginModal} pt-0 px-4 pb-4 text-dark`}>
                
            {content}            
            
        </div>
        
        : null
    }
    </>
  );
};


const mapStateToProps = ( state ) => {
  return{
    active: state.loginReducer.loginActive,
    logged: state.loginReducer.logged,
  }
}

// const mapDispatchToProps = (dispatch) => {
//     return{
//         removeFromCart: ( id )=>{ dispatch( { type: "REMOVE_FROM_CART", id: id } ) }
//     }
// }


export default connect(mapStateToProps)(LoginModal);

