import React, { useState, useEffect } from 'react';
import orderView from './orderView.module.scss';
import myAccount from '../MyAccount/myAccount.module.scss'
import ChooseAddress from './ChooseAddress/ChooseAddress';
import PaymentComponent from './PaymentComponent/PaymentComponent';

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
                    
                    <div className="row w-100 mx-auto">
                        <div className="mt-4 w-100 ">
                            <div className="card-header radius-none text-center transparent-darker">
                                <span className="h4 card-title text-white">Zamówione produkty</span>
                            </div>
                            <div className={`p-4 mt-2 bg-white border`}>
                                <p>-</p>
                                <p>-</p>
                                <p>-</p>
                                <p>-</p>
                                <p>-</p>
                                <p>-</p>
                                <p>-</p>
                                <p>-</p>
                                <p>-</p>
                            </div>
                        </div>
                    </div>

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