import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCartPrice } from './../../utils/functions/cartFunctions'
import cartModal from './cartModal.module.scss';
import { serverUrl } from '../../utils/content/url'

const CartModal = ( props ) => {
    let price = getCartPrice(props.cart)

    const handleRemoveProduct = (id) => {

        if( props.cart.length === 1 ) localStorage.removeItem('cart');
        props.removeFromCart(id)
    }

    const handleClearCart = () => {
        props.clearCart();
        localStorage.removeItem('cart')
    }

    const handleSendOrder = ()=> {
        props.clearActiveCategory();
        props.showCart( false );
        props.setActivePage('sendOrder');
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
                    <div key={product.id} className={`my-1 row ${cartModal.productRow} border-bottom`}>
                        <div className={`${cartModal.photoContainer} align-self-center mr-1 p-1`}>
                            <img class="card-img my-auto" src={require(`./../../images/${product.photo}`)} alt="Product" />
                        </div>
                        <p className="text-dark align-middle my-auto m-0">
                            {product.name} - {product.amount} x {product.price}zł
                        </p>
                        <i class="material-icons text-danger my-auto" onClick={ ( ) => { handleRemoveProduct(product.id) }}>
                            clear
                        </i>
                    </div>
                )
            })
            : <p className="pt-4 h6" ><b>Nie dodałeś jeszcze żadnych produktów</b></p>

        }
        {
            props.cart.length ? 
            <div className={`my-1 row ${cartModal.productRow} border-bottom`}>
                <div className={`${cartModal.photoContainer} align-self-center mr-1 p-1`}>
                    <img class="card-img my-auto p-1 pl-2 bg-white" src={require(`./../../images/delivery-truck.png`)} alt="Product" />
                </div>
                <p className="text-dark align-middle my-auto m-0">
                    Koszt dostawy - 16.90zł
                </p>
            </div> : ''
        }

        <div className="row text-dark"> 
            <div className="col-12 col-sm-6 col-md-6 col-lg-12 text-right w-100 h4 mt-2 mb-0"> 
                Razem: <span className="text-success">{price}zł</span>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-12 text-right w-100 h4 mt-2 mb-0"> 
                <button type="button" onClick={ ()=> { handleSendOrder() }} disabled={!props.cart.length} className={`ml-3 btn btn-sm btn-outline-success`}>Zamów</button>
                <button type="button" onClick={ ()=> { handleClearCart() }} className="ml-1 btn btn-sm btn-outline-danger">Opróżnij</button>
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
    active: state.cartReducer.cartActive,
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeFromCart: ( id )=>{ dispatch( { type: "REMOVE_FROM_CART", id: id } ) },
        showCart: ( status )=>{ dispatch({ type:"SHOW_CART", status: status } ) },
        clearCart: ()=>{ dispatch( { type: "CLEAR_CART" } ) },
        clearActiveCategory: ()=>{ dispatch( { type: "SET_CATEGORY", id: 0 } ) },
        setActivePage: ( name )=>{ dispatch( { type: "CHANGE_PAGE", name: name } ) },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartModal);

