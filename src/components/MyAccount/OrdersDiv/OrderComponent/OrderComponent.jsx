import React from 'react';
import { connect } from 'react-redux';
import orderComponent from './orderComponent.module.scss'
import { getCartPrice } from'../../../../utils/functions/cartFunctions';

const OrderComponent = (props) => {

    const products = [
        { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:22, amount:1 },
        { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:23, amount:1 },
    ]
    let statusColor;
    switch(props.order.status){
        case 'Nieopłacone':
            statusColor='dark';
            break;
        case 'W trakcie':
            statusColor='warning';
            break;
        case 'Odrzucone':
            statusColor='danger';
            break;
        case 'Dostarczone':
            statusColor='success';
            break;
    }
    return(
        <>

        <li class={`list-group-item  py-0 px-0 ${orderComponent.orderComponent}`}>
            <div className={`row px-2 text-left text-secondary p-1 ${orderComponent.detail}`}>
                <div className="col-sm-12 mb-2 text-center">
                    {props.order.date.getDate()}-{props.order.date.getMonth()+1}-{props.order.date.getFullYear()} {props.order.date.getHours()}:{props.order.date.getMinutes() > 9 ? props.order.date.getMinutes() : '0'+props.order.date.getMinutes() }
                </div>
            </div>

            <div className="row pb-2">
                <div className="col-sm-6 border-right">
                    <p className='border-0'>Ilość produktów: <br />{products.length}</p>
                </div>
                <div className="col-sm-6">
                    <p className='border-0'>Cena końcowa: <br />{getCartPrice(products)}</p>
                </div>
            </div>

            <div className="row w-100 px-2 border-top pt-2 pb-2 bg-light mx-auto">
                <div className="col-sm-6 my-auto">

                <div className={`rounded-circle bg-${statusColor} mr-2 mt-1 float-left ${orderComponent.statusCircle}`}></div>
                    
                    <span className={`float-left text-${statusColor}`} >{props.order.status}</span>
                </div>
                <div className="col-sm-6">
                    <button className="btn-outline-success btn btn-sm w-75 float-right">Szczegóły</button>
                </div>
            </div>
        </li>

        </>
    )

}

export default OrderComponent