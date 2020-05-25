import React from 'react';
import { connect } from 'react-redux';
import orderComponent from './orderComponent.module.scss'
import { getCartPrice } from'../../../../utils/functions/cartFunctions';

const OrderComponent = (props) => {

    const handleDetailsClick = () => {
        props.setActivePage('finalizeOrder');
        props.setTempOrder(props.order.orderId);
    }
    const products = [
        { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:22, amount:1 },
        { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:23, amount:1 },
    ]
    let statusColor, statusText;
    switch(props.order.status){
        case 0:
            statusColor='dark';
            statusText="Nieopłacone";
            break;
        case 1:
            statusColor='warning';
            statusText="W drodze / Nieopłacone"
            break;
        case 2:
            statusColor='warning';
            statusText="W drodze / Opłacone"
            break;
        case 3:
            statusColor='danger';
            statusText="Płatność odrzucona"
            break;
        case 4:
            statusColor='success';
            statusText="Dostarczone"
            break;
        case 5:
            statusColor='success';
            statusText="Dostarczone(Payu)"
            break;
    }
    return(
        <>

        <li class={`list-group-item  py-0 px-0 border ${orderComponent.orderComponent} mt-2`}>
            <div className={`row px-2 text-left text-secondaryp-1 ${orderComponent.detail}`}>
                <div className="col-sm-12 mb-2 text-center mt-2 mt-md-0">
                    {props.order.date}
                </div>
            </div>

            <div className="row pb-2">
                <div className="col-sm-6 border-right">
                    <p className='border-0'>Ilość produktów: <br />{props.order.amountOfProducts}</p>
                </div>
                <div className="col-sm-6">
                    <p className='border-0'>Cena końcowa: <br />{props.order.price.toFixed(2)} zł</p>
                </div>
            </div>

            <div className="row w-100 px-2 border-top pt-2 pb-2 transparent-darker mx-auto">

                <div className="col-md-12 col-lg-8 my-md-auto mb-2">

                    <div className={`rounded-circle bg-${statusColor} mr-2 mt-1 float-left ${orderComponent.statusCircle}`}></div>
                    <span className={`float-lg-left text-${statusColor}`} >{statusText}</span>
                </div>

                <div className="col-md-12 col-lg-4">
                    <button onClick={ handleDetailsClick } className="btn-outline-light btn btn-sm w-100 w-lg-75 float-lg-right">Szczegóły</button>
                </div>

            </div>
        </li>

        </>
    )

}

const mapDispatchToProps = (dispatch) => {
    return{
        clearCart: ()=>{ dispatch( { type: "CLEAR_CART" } ) },
        setActivePage: ( name )=>{ dispatch( { type: "CHANGE_PAGE", name: name } ) },
        setTempOrder: ( id )=>{ dispatch( { type: "SET_TEMP_ORDER", id } ) },
    }
}

export default connect(null, mapDispatchToProps)(OrderComponent)