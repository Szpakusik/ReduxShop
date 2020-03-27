import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import { connect } from 'react-redux';

import cartModal from './cartModal.module.scss';

const CartModal = ( props ) => {

  return (
    <>
    { props.active ?

    <div className={`container ${cartModal.cartModal} p-4`}>
        {   
            props.cart.map( (product)=>{
                let price = product.price * product.amount;
                price = (Math.round(price * 100) / 100).toFixed(2);

                return(
                    <div className="row">
                        <div className={`${cartModal.photoContainer} my-auto`}>
                            <img class="card-img-top align-middle my-auto" src={require(`./../../images/${product.photo}`)} alt="Product" />
                        </div>
                        <p className="text-dark align-middle my-auto m-0">
                            {product.name} x {product.amount} = {price}
                        </p>
                    </div>
                )
            })
        }
    </div>

    : null }
    </>
  );
};


const mapStateToProps = ( state ) => {
  return{
    cart: state.cartReducer.cartProducts,
    active: state.cartReducer.cartActive
  }
}



export default connect(mapStateToProps)(CartModal);

