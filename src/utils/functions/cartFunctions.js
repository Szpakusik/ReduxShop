// give it props.cart

export function getCartPrice(cart){

    let price;
    const deliveryPrice = 16.80
    const getSum = (total, elem) => {
        return total + elem.price*elem.amount ;
    }

    if( cart.length === 0 ) price = 0;

    else if( cart.length === 1 ) 
        price = (Math.round(( deliveryPrice + cart[0].price*cart[0].amount ) * 100) / 100).toFixed(2);

    else{
        price = cart.reduce( getSum, deliveryPrice)
        price = (Math.round(price * 100) / 100).toFixed(2);
    }

    return price;
}

export function tranformCartForOrder(cart){

    return cart.map( (product) => {
        return {
            productId: product.id,
            amount: product.amount
        }
    })

}
