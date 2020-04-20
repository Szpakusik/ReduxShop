import React, { useState, useEffect } from 'react';
import orderView from './orderView.module.scss';
import myAccount from '../MyAccount/myAccount.module.scss'
import ChooseAddress from './ChooseAddress/ChooseAddress';
import PaymentComponent from './PaymentComponent/PaymentComponent';
import OrderProducts from './OrderProducts/OrderProducts';

const OrderView = (props) => {

    return (
        <>
        
        <div className={`container ${myAccount.index} mb-5`}>

            <div className={`row w-100 ${myAccount.header} pt-2 mx-auto px-1 transparent-darker`}>

                <div className="text-center h3 my-2 text-white col-md-6 mx-auto pb-3">
                    Podsumowanie zamówienia
                </div>

            </div>

            <div className="row">

                <div className="col-md-7 pr-1">
                    
                    <OrderProducts />

                </div>
                

                
                <div className="col-md-5 pl-1">

                    <ChooseAddress />
                    <PaymentComponent />

                </div>

            </div>
        </div>


        </>
    )

}


export default OrderView;