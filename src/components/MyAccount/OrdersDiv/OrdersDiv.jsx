import React from 'react';
import { connect } from 'react-redux';
// import ordersDiv from './orders.module.scss'
import OrderComponent from './OrderComponent/OrderComponent';

const OrdersDiv = (props) => {

    const orders = [
        {
            id: 4231,
            date: new Date(),
            status: 'finished',
            products: [
                { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:22, amount:1 },
                { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:23, amount:1 },
            ],
        },
        {
            id: 4231,
            date: new Date(),
            status: 'finished',
            products: [
                { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:22, amount:1 },
                { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:23, amount:1 },
            ],
        }
    ]

    return(
        <>
        <div className="row w-100 mx-auto">
            <div className="mt-4 card text-center w-100">
                <div className="card-header">
                    <span className="h3 card-title">Ostatnie zamówienia</span>
                </div>
                <ul class="list-group list-group-flush">

                    {orders && orders.map( (order)=>{
                        return(
                            <OrderComponent order={order}/>
                        )
                    } )}
                    
                </ul>
            </div>
        </div>

        </>
    )

}

export default OrdersDiv