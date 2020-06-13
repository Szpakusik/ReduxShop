import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import myAccount from './myAccount.module.scss';
import InfoDiv from './InfoDiv/InfoDiv';
import OrdersDiv from './OrdersDiv/OrdersDiv';
import ShoppingListsDiv from './ShoppingListsDiv/ShoppingListsDiv';



const MyAccount = () => {

    return(
        <>
            <div className={`${myAccount.index} mb-5`}>

                <div className={`row w-100 ${myAccount.header} pt-2 mx-auto px-1 transparent-darker`}>
                
                    <div className="text-center h3 my-2 text-white col-md-6 mx-auto pb-3">
                        Twoje konto
                    </div>

                </div>

                <div className="row">

                    <div className="col-md-7 pr-md-1">

                        <InfoDiv/>

                        <ShoppingListsDiv />

                    </div>
                    
                    <div className="col-md-5 pl-md-1">

                        <OrdersDiv />

                    </div>
                
                </div>

            </div>
        </>
    )

}

export default MyAccount