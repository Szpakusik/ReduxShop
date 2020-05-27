import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCartPrice } from '../../../utils/functions/cartFunctions'
import orderProducts from './orderProducts.module.scss';

const OrderProducts = ( props ) => {

    let [products, setProducts] = useState(props.ordered ? props.products : props.cart)

    useEffect( ()=>{
        setProducts(props.ordered ? props.products : props.cart);
        console.log('happen');
    })

    const handleClick = (id) => {
        if( props.cart.length === 1 ) localStorage.removeItem('cart');
        props.removeFromCart(id)
    }

  return (
    <>
    <div className={`row w-100 mx-auto ${orderProducts.orderProducts}`}>
        <div className="mt-4 w-100 ">
            <div className="card-header radius-none text-center transparent-darker">
                <span className="h4 card-title text-white">Zamówione produkty</span>
            </div>
            <div className={`px-3 mt-2 bg-white border`}>
                {   
                    products && products.length ?
                    products.map( (product, index)=>{
                        let price = product.price * product.amount;
                        price = (Math.round(price * 100) / 100).toFixed(2);

                        let borderBottom = "border-bottom";
                        if(index === products.length-1) borderBottom = '';

                        return(
                            <div key={product.id} className={`my-1 pt-1 pt-md-0 pl-2 pl-xl-5 row ${borderBottom} ${orderProducts.productRow}`}>
                                <div className={`${orderProducts.photoContainer} align-self-center mr-1 p-1`}>
                                     <img class="card-img my-auto" src={require(`../../../images/${product.photo}`)} alt="Product" />
                                </div>
                                <p className="text-dark my-auto m-0">
                                    {product.name} - {product.amount} x {product.price}zł = {price}
                                </p>
                                
                                {props.ordered ? null : <i class="material-icons text-danger my-auto" onClick={ ( ) => { handleClick(product.id) }}>
                                    clear
                                </i>}
                            </div>
                        )
                    }): null
                }
            </div>
        </div>
    </div>
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
        clearCart: ()=>{ dispatch( { type: "CLEAR_CART" } ) },
        setActivePage: ( name )=>{ dispatch( { type: "CHANGE_PAGE", name: name } ) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderProducts);

