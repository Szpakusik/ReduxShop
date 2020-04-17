import React from 'react';

import HomeContent from '../../components/HomeContent/HomeContent';
import MyAccount from '../../components/MyAccount/MyAccount';
import SendOrder from '../../components/OrderView/OrderView';
export function showContent(activePage){
    
    switch(activePage){
            
        case "homepage":
            return <HomeContent />

        case "myAccount":
            return <MyAccount />

        case "sendOrder":
            return <SendOrder />


        default:
            return <p className="h1">Coś poszło nie tak! Odśwież stronę.</p>
    
    }

}

// { 
//     props.products && props.activeCategory !== 0 &&
//     props.products.map( ( product )=>{

//     if(product.category === props.activeCategory)
//     return <Product product={product} />

//     })
// }