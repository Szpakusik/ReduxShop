import React from 'react';
import { connect } from 'react-redux';
import orderComponent from './orderComponent.module.scss'
import { getCartPrice } from'../../../../utils/functions/cartFunctions';
import { DialogContent } from '@material-ui/core';

const OrderComponent = (props) => {

    const handleDetailsClick = () => {
        props.setActivePage('finalizeOrder');
        props.setTempOrder(props.order.orderId);
    }
    const deliveryPrice = 16.80;
    const finalPrice = !props.ordered ? props.order.price + deliveryPrice : props.order.price;
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

        <li className={`list-group-item  py-0 px-0 border ${orderComponent.orderComponent} mt-2`}>
            <div className={`row px-2 text-left text-secondaryp-1 ${orderComponent.detail}`}>
                <div className="col-sm-12 mb-2 text-center mt-2 mt-md-0">
                    {props.order.date ? props.order.date : ''}
                </div>
            </div>

            <div className="row pb-2">
                <div className="col-6 border-right">
                    <p className='border-0'><span className="d-none d-sm-inline">Ilość</span> Produktów: <br />{props.order.amountOfProducts}</p>
                </div>
                <div className="col-6">
                    <p className='border-0'>Cena Końcowa: <br />{finalPrice && (finalPrice).toFixed(2)} zł</p>
                </div>
            </div>
            <div className={`row ${props.management ? "d-none":''} text-center`}>
                <span className="w-100 border-0 text-secondary pb-2">W tym kwota wysyłki: 16.90zł</span>
            </div>
            {props.contactDetails && props.contactDetails.email !=='' && !props.logged &&

            <div className="row">
                <div className="col-sm-6 col-md-12 col-lg-6 border-right">
                    <p className="border-0">Email: <br />{props.contactDetails.email}</p>
                </div>
                <div className="col-sm-6 col-md-12  col-lg-6 ">
                    <p className="border-0">Telefon: <br />{ props.contactDetails.phone}</p>
                </div>
            </div>
            }
            <div className={`row w-100 px-2 border-top pt-2 pb-2 ${props.contactDetails ? null : "transparent-darker"} mx-auto`}>

                <div className="col-md-12 col-lg-8 my-md-auto mb-2">

                    <div className={`rounded-circle bg-${statusColor} mr-2 mt-1 float-left ${orderComponent.statusCircle}`}></div>
                    <span className={`float-lg-left text-${statusColor}`} >{statusText}</span>
                </div>

                <div className={`col-md-12 col-lg-4 ${props.ordered ? 'd-none' : ''}`}>
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