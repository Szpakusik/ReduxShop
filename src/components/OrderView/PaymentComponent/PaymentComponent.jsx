import React from 'react';

const PaymentComponent = (props) => {

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
                    
                    </div>
                </ul>
            </div>

            

        </div>

        </>
    )

}

export default PaymentComponent