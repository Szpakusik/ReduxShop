import React, {useState} from 'react';
import paymentComponent from './paymentComponent.module.scss';
import { connect } from 'react-redux';

const PaymentComponent = ({price, addresses, cart, setActivePage, ordered}) => {

    let deliveryPrice = 16.80;
    let totalPrice = parseFloat(price) + deliveryPrice;

    const [payment, setPayment] = useState('transfer');
    const [regulations, acceptRegulations] = useState(false);

    const selectedAddress = addresses.find(address => address.active === 1);

    const handlePayment = () => {
        console.log(`Płatność ${payment}, Regulamin ${regulations}, do zapłaty ${totalPrice}`)
        console.log(`Adres dostawy ${JSON.stringify(selectedAddress)}`)
        console.log(`${cart}`);
        setActivePage('finalizeOrder')
    }

    if(!ordered){
    return(
        <div className="row w-100 mx-auto">
            <div className="mt-4 text-center w-100">
                <div className="card-header radius-none transparent-darker">
                    <span className="h4 card-title text-white">Opłać zamówienie</span>
                </div>
                <ul class="list-group list-group-flush  bg-white">
                    <div className={`p-4 mt-2 bg-white border`}>

                        <div class="col-sm-12 text-left w-100 h4 mt-2 mb-0">Kwota: <span class="text-success">{price + " zł"}</span></div>
                        <div class="col-sm-12 text-left w-100 h4 mt-2 mb-0">Wysyłka: <span class="text-success">{deliveryPrice.toFixed(2) + " zł"}</span></div> 
                        <div class="col-sm-12 text-left w-100 h4 mt-2 mb-0">Suma: <span class="text-success">{parseFloat(totalPrice).toFixed(2) + " zł"}</span></div>  

                        <div className={paymentComponent.payment}>
                            <input defaultChecked class={`${paymentComponent.sendOrder}`} onClick={ () => setPayment('cash-on-delivery')} type="radio" id="cash-on-delivery" name="payment" value="cash-on-delivery"/>
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
}else{
    return(
        <div className="row w-100 mx-auto">
        <div className="mt-4 text-center w-100">
            <div className="card-header radius-none transparent-darker">
                <span className="h4 card-title text-white">Szczegóły zamówienia</span>
            </div>
            <ul class="list-group list-group-flush  bg-white">
                <div className={`p-4 mt-2 bg-white border`}>

               <p>Numer zamówienia : 4184</p>
               <p>Data: 18 maja 2020</p>
               <p>Email: example@wp.pl</p>
               <p>Suma: 20.40zł</p>
               <p>Metoda płatności: Płatność przy odbiorze</p>
                                                                                                          
                </div>              
            </ul>
            <div>
            </div>          
        </div>
    </div>
    )
}

}

const mapDispatchToProps = (dispatch) => {
    return{
        setActivePage: ( name )=>{ dispatch( { type: "CHANGE_PAGE", name: name } ) },
    }
}

export default connect(null, mapDispatchToProps)(PaymentComponent)