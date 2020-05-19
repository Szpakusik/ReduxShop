import React, {useState} from 'react';
import axios from 'axios';
import paymentComponent from './paymentComponent.module.scss';
import { serverUrl } from '../../../utils/content/url';
import { tranformCartForOrder } from '../../../utils/functions/cartFunctions';

const PaymentComponent = ({price, addresses, cart, userId}) => {

    let deliveryPrice = 16.80;
    let totalPrice = parseFloat(price) + deliveryPrice;

    const [payment, setPayment] = useState('transfer');
    const [regulations, acceptRegulations] = useState(false);

    const selectedAddress = addresses.find(address => address.active === 1);

    const handlePayment = () => {
        let accessString = localStorage.getItem('JWT')

        axios.post( serverUrl + '/order/create', {
            customerId: userId,
            productsOrdered: tranformCartForOrder(cart),
        },{
            headers:{'Authorization': `JWT ${accessString}`}
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <div className="row w-100 mx-auto">
            <div className="mt-4 text-center w-100">
                <div className="card-header radius-none transparent-darker">
                    <span className="h4 card-title text-white">Opłać zamówienie</span>
                </div>
                <ul class="list-group list-group-flush  bg-white">
                    <div className={`p-4 mt-2 bg-white border`}>

                        {/* {[].length > 0 && [].map( (order, index)=>{
                            return(
                                <OrderComponent order={order} key={index}/>
                            )
                        } )}

                        { [].length == 0 ? 
                            "Nie udało się zainicjować transakcji, spróbuj ponownie!"
                        : '' } */}

                        <div class="col-sm-12 text-left w-100 h4 mt-2 mb-0">Kwota: <span class="text-success">{price + " zł"}</span></div>
                        <div class="col-sm-12 text-left w-100 h4 mt-2 mb-0">Wysyłka: <span class="text-success">{deliveryPrice.toFixed(2) + " zł"}</span></div> 
                        <div class="col-sm-12 text-left w-100 h4 mt-2 mb-0">Suma: <span class="text-success">{parseFloat(totalPrice).toFixed(2) + " zł"}</span></div>  

                        <div className={paymentComponent.payment}>
                            <input class={`${paymentComponent.sendOrder}`} onClick={ () => setPayment('cash-on-delivery')} type="radio" id="cash-on-delivery" name="payment" value="cash-on-delivery"/>
                            <label for="cash-on-delivery">Za pobraniem</label>
                        </div>   

                        
                        <div className={paymentComponent.payment}>
                            <input class={`${paymentComponent.sendOrder}`} onClick={ () => setPayment('paypal')}  type="radio" id="paypal" name="payment" value="paypal"/>
                            <label for="paypal">PayPal</label>
                        </div>

                        <div className={paymentComponent.payment}>
                            <input class={`${paymentComponent.sendOrder}`} defaultChecked={regulations} onClick={ () => acceptRegulations(!regulations)} type="checkbox" id="regulations" name="regulations"/>
                            <label for="regulations">Przeczytałem/am i akceptuję regulamin*</label>
                        </div>
                        
                        <button class={`btn btn-outline-success`} onClick={handlePayment}>Kupuję i płacę</button> 
                                                                                                              
                    </div>
                    
                </ul>

                <div>
   
                </div>
                
            </div>

        </div>
    )

}

export default PaymentComponent