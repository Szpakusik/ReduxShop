import React from 'react';

import HomeContent from '../../components/HomeContent/HomeContent';
import EditAccount from '../../components/EditAccount/EditAccount';
export function showContent(activePage){
    
    switch(activePage){
            
        case "homepage":
            return <HomeContent />

        case "editAccount":
            return <EditAccount />

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