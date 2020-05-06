import React from 'react';

const PaymentComponent = ({price}) => {

    let deliveryPrice = 16.80;

    return(
        <>
        <div className="row w-100 mx-auto">
            <div className="mt-4 text-center w-100">
                <div className="card-header radius-none transparent-darker">
                    <span className="h4 card-title text-white">Opłać zamówienie</span>
                </div>
                <ul class="list-group list-group-flush  bg-white">
                    <div className={`p-4 mt-2 bg-white border`}>

                        {[].length > 0 && [].map( (order, index)=>{
                            return(
                                <OrderComponent order={order} key={index}/>
                            )
                        } )}

                        { [].length == 0 ? 
                            "Nie udało się zainicjować transakcji, spróbuj ponownie!"
                        : '' }

                        <div class="col-sm-12 text-left w-100 h4 mt-2 mb-0">Kwota: <span class="text-success">{price + " zł"}</span></div>
                        <div class="col-sm-12 text-left w-100 h4 mt-2 mb-0">Wysyłka: <span class="text-success">{deliveryPrice.toFixed(2) + " zł"}</span></div> 
                        <div class="col-sm-12 text-left w-100 h4 mt-2 mb-0">Suma: <span class="text-success">{parseFloat(price) + deliveryPrice + " zł"}</span></div>     
                        

                        <button>Kupuję i płacę</button>                        
                                                        
                    </div>
                </ul>
            </div>

            

        </div>

        </>
    )

}

export default PaymentComponent