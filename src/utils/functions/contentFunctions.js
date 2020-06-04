import React from 'react';

import HomeContent from '../../components/HomeContent/HomeContent';
import MyAccount from '../../components/MyAccount/MyAccount';
import SendOrder from '../../components/OrderView/OrderView';
import FinalizeOrder from '../../components/OrderView/PaymentComponent/FinalizeOrder';
export function showContent(activePage){
    
    switch(activePage){
            
        case "homepage":
            return <HomeContent />

        case "myAccount":
            return <MyAccount />

        case "sendOrder":
            return <SendOrder />

        case "finalizeOrder":
            return <FinalizeOrder />    

        default:
            return <p className="h1">Coś poszło nie tak! Odśwież stronę.</p>
    
    }

}
