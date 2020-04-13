import React from 'react';

import HomeContent from '../../components/HomeContent/HomeContent';
import MyAccount from '../../components/MyAccount/MyAccount';
export function showContent(activePage){
    
    switch(activePage){
            
        case "homepage":
            return <HomeContent />

        case "myAccount":
            return <MyAccount />

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