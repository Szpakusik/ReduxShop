import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import { connect } from 'react-redux';

import { getCartPrice } from './../../utils/functions/cartFunctions'
import cartModal from './cartModal.module.scss';

const CartModal = ( props ) => {

    let price = getCartPrice(props.cart)

    const handleClick = (id) => {
        removeFromCart(id)
    }

  return (
    <>
    { props.active ?

    <div className={`container ${cartModal.cartModal} pt-0 px-4 pb-4 text-dark`}>
        {   
            props.cart.length ?
            props.cart.map( (product)=>{
                let price = product.price * product.amount;
                price = (Math.round(price * 100) / 100).toFixed(2);

                return(
                    <div className={`my-1 row ${cartModal.productRow} border-bottom`}>
                        <div className={`${cartModal.photoContainer} align-self-center mr-1 p-1`}>
                            <img class="card-img my-auto" src={require(`./../../images/${product.photo}`)} alt="Product" />
                        </div>
                        <p className="text-dark align-middle my-auto m-0">
                            {product.name} - {product.amount} x {product.price}zł = {price}
                        </p>
                        <i class="material-icons text-danger my-auto" onClick={ ( ) => { props.removeFromCart(product.id) }}>
                            clear
                        </i>
                    </div>
                )
            })
            : <p className="pt-3" >Nie dodałeś jeszcze żadnych produktów</p>

        }
        <div className="row text-dark">
            <div className="col-sm-0 text-left w-100 h4 mt-2 mb-0">
                
            </div> 
            <div className="col-sm-12 text-right w-100 h4 mt-2 mb-0"> 
                Razem: <span className="text-success">{price}zł</span>
                <button type="button" class="ml-3 btn btn-sm btn-outline-success">Zamów</button>
            </div>
        </div>
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

const mapDispatchToProps = (dispatch) => {
    return{
        removeFromCart: ( id )=>{ dispatch( { type: "REMOVE_FROM_CART", id: id } ) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartModal);

