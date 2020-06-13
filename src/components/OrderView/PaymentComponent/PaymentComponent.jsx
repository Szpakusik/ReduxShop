import React, {useState, useEffect} from 'react';
import axios from 'axios';
import paymentComponent from './paymentComponent.module.scss';
import OrderComponent from '../../MyAccount/OrdersDiv/OrderComponent/OrderComponent'
import { serverUrl } from '../../../utils/content/url';
import { tranformCartForOrder, getCartPrice } from '../../../utils/functions/cartFunctions';
import { connect } from 'react-redux';
import { validateTemporaryUser } from '../../../utils/functions/validationFunctions';

const PaymentComponent = ({order, setTempOrder, price, addresses, cart, setActivePage, ordered, contactDetails, clearCart, logged, user}) => {
    useEffect(() => {
        setErrorMessage('')
    })
    let deliveryPrice = 16.80;
    let totalPrice = parseFloat(price);

    const [errorMessage, setErrorMessage] = useState('');
    const [payment, setPayment] = useState('cash-on-delivery');
    const [regulations, acceptRegulations] = useState(false);

    const selectedAddress = addresses.find(address => address.active === 1);
    
    const handlePayuPayment = () => {
        let authRoute = logged ? '' : '/noauth'

        if( !selectedAddress ) {
            alert("Wybierz adres dostawy!");
            return 0;
        }
        const validationStatus = validateTemporaryUser(user.firstName, user.secondName, user.phone, user.email)
        if( !logged && validationStatus.success === false ) {
            alert(validationStatus.message);
            return false;
        }
        if( !regulations ) {
            alert("Zaakceptuj regulamin!");
            return 0;
        }
        let accessString = localStorage.getItem('JWT')

        axios.post( serverUrl + '/order/create' + authRoute, {
            productsOrdered: tranformCartForOrder(cart),
            address: selectedAddress.id,
            payment: payment,
            user: user
        },{
            headers:{'Authorization': `JWT ${accessString}`}
        })
        .then(function (response) {
                localStorage.removeItem('cart')
                clearCart();
                setTempOrder(response.data.orderResponse.orderId);
                setActivePage('finalizeOrder');

                axios.post( serverUrl + '/payment/sendorder',{
                    price: getCartPrice(cart),
                    cart: cart,
                    orderId: response.data.orderResponse.orderId,
                },{
                    headers:{'Authorization': `JWT ${accessString}`}
                })
                .then( (response) => {
                    if(response.data.redirectUri) 
                        window.open(response.data.redirectUri, "_blank");
                }, err => alert("Nastąpił błąd z płatnością PayU ! Spróbuj ponownie.") )
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const handlePayment = () => {
        if( !selectedAddress ) {
            alert("Wybierz adres dostawy!");
            return 0;
        }
        if( !logged && payment === 'cash-on-delivery' ) {
            alert("Zarejestruj się aby zapłacić przy odbiorze!");
            return 0;
        }
        if( !regulations ) {
            alert("Zaakceptuj regulamin!");
            return 0;
        }
        let accessString = localStorage.getItem('JWT')

        axios.post( serverUrl + '/order/create', {
            productsOrdered: tranformCartForOrder(cart),
            address: selectedAddress.id,
            payment: payment,
        },{
            headers:{'Authorization': `JWT ${accessString}`}
        })
        .then(function (response) {
            
            setTempOrder(response.data.orderResponse.orderId);
            setActivePage('finalizeOrder');
            
            localStorage.removeItem('cart');
            clearCart();
        })
        .catch(function (error) {
            console.log(error);
            alert('Coś poszło nie tak. Spróbuj ponownie!')
        });
    }

    const payuButton =  
    <button type="submit" className={''} onClick={ handlePayuPayment } ></button>;

    if(!ordered){
    return(
        <div className="row w-100 mx-auto">
            <div className="mt-2 text-center w-100">
                <div className="card-header radius-none transparent-darker">
                    <span className="h4 card-title text-white">Opłać zamówienie</span>
                </div>
                <ul class="list-group list-group-flush  bg-white">
                    <div className={`p-4 mt-2 bg-white border`}>
                        <div className="row pb-2">
                            <div class={`${paymentComponent.borderResponsive} col-sm-12 col-lg-6 w-100 h4 mt-2 mb-0`}>Ilość produktów: <br className="d-lg-none"/><span class="text-success">{cart.length}</span></div>
                            <div class="col-sm-12 col-lg-6 w-100 h4 mt-2 mb-0">Suma: <br className="d-lg-none"/><span class="text-success">{parseFloat(totalPrice).toFixed(2) + " zł"}</span></div>  
                            <div className={`row w-100 pt-3 text-center mx-auto`}>
                                <span className="w-100 border-0 text-secondary pb-2">W tym kwota wysyłki: 16.90zł</span>
                            </div>
                        </div>

                        <div className="row w-100 mx-auto mb-2">
                            <div className={`${paymentComponent.payment} ${paymentComponent.borderResponsive} col-sm-12 col-lg-6`}>
                                <input defaultChecked class={`${paymentComponent.sendOrder}`} onClick={ () => setPayment('cash-on-delivery')} type="radio" id="cash-on-delivery" name="payment" value="cash-on-delivery"/>
                                <label for="cash-on-delivery">Za pobraniem</label>
                            </div>   
                            <div className={`${paymentComponent.payment} col-sm-12 col-lg-6 pl-1`}>
                                <input class={`${paymentComponent.sendOrder}`} onClick={ () => setPayment('payu')}  type="radio" id="payu" name="payment" value="payu"/>
                                <label for="payu">PayU</label>
                            </div>
                        </div>

                        <div className={`${paymentComponent.payment} pt-2 pb-2`}>
                            <input class={`${paymentComponent.sendOrder}`} defaultChecked={regulations} onClick={ () => acceptRegulations(!regulations)} type="checkbox" id="regulations" name="regulations"/>
                            <label for="regulations">Przeczytałem/am i akceptuję regulamin*</label>
                        </div>
                        
                        {payment === 'cash-on-delivery' ? <button class={`btn btn-outline-success`} onClick={handlePayment}>Kupuję i płacę</button> : payuButton} 
                        <p className="text-danger w-100 text-center pt-2 border-0">{errorMessage}</p>

                                                                                                              
                    </div>    
                </ul>
                <div>
              </div>   
            </div>
        </div>
    )
}else{
    return(
    <div className="row w-100 mx-auto">
        <div className="mt-2 text-center w-100">
            <div className="card-header radius-none transparent-darker">
                <span className="h4 card-title text-white">Szczegóły zamówienia</span>
            </div>
            < OrderComponent order={order} ordered={ordered} management={ false } contactDetails={contactDetails} logged={logged}/>
            
            <div>
            </div>          
        </div>
    </div>
    )
}

}

const mapDispatchToProps = (dispatch) => {
    return{
        setTempOrder: ( id ) => { dispatch( { type: "SET_TEMP_ORDER", id } ) },
        clearCart: ()=>{ dispatch( { type: "CLEAR_CART" } ) },
        setActivePage: ( name )=>{ dispatch( { type: "CHANGE_PAGE", name: name } ) },
    }
}

export default connect(null, mapDispatchToProps)(PaymentComponent)