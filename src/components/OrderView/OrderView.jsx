import React, { useState, useEffect } from 'react';
import orderView from './orderView.module.scss';
import myAccount from '../MyAccount/myAccount.module.scss'
import ChooseAddress from './ChooseAddress/ChooseAddress';
import PaymentComponent from './PaymentComponent/PaymentComponent';
import OrderProducts from './OrderProducts/OrderProducts';
import Address from '../MyAccount/InfoDiv/Address';
import AddNewAddress from '../MyAccount/InfoDiv/AddNewAddress'
import { connect } from 'react-redux';
import { getCartPrice } from '../../utils/functions/cartFunctions'

const OrderView = (props) => {

    const { addresses, setActiveAddress, cart, addAddress } = props;

    let price = getCartPrice(cart)

    const userAddresses = addresses.map(address => 
        <Address         
         management={false}   
         key={address.id}
         userAddresses={addresses}
         address={address}
         setActiveAddress={setActiveAddress}
         /> );

    return (
        <div className={`container ${myAccount.index} mb-5`}>

            <div className={`row w-100 ${myAccount.header} pt-2 mx-auto px-1 transparent-darker`}>

                <div className="text-center h3 my-2 text-white col-md-6 mx-auto pb-3">
                    Podsumowanie zamówienia
                </div>

            </div>

            <div className="row">

                <div className="col-md-6 pr-1">
                    
                    <OrderProducts />
                  
                </div>
                
                <div className="col-md-6 pl-1">

                    <div class="row w-100 mx-auto">

                    <div className={`row w-100 mx-auto ${myAccount.addresses}`}>

                        <div className="mt-4 text-center w-100">

                        <div className="card-header radius-none transparent-darker">
                            <span className="h4 card-title text-white">Wybierz adres dostawy</span>
                        </div>

                    </div>       

                    </div> 
                        {userAddresses}
                        <AddNewAddress addAddress={addAddress}/>
                    </div>
                        {/* <ChooseAddress /> */}
                        <PaymentComponent addresses={addresses} price={price} cart={cart} />
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        addresses: state.loginReducer.user.addresses,
        cart: state.cartReducer.cartProducts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
         setActiveAddress: (id) => { dispatch( { type: "CHANGE_ACTIVE_ADDRESS", id: id, } ) },
         addAddress: ( city, postCode, street, ) => { dispatch( { type: "ADD_ADDRESS", city: city, postCode: postCode, street: street, } ) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderView);