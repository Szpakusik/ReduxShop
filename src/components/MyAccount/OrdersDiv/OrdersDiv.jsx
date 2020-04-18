import React from 'react';
import { connect } from 'react-redux';
// import ordersDiv from './orders.module.scss'
import OrderComponent from './OrderComponent/OrderComponent';

const OrdersDiv = (props) => {

    const orders = [
        {
            id: 1231,
            date: new Date(),
            status: 'W trakcie',
            products: [
                { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:22, amount:1 },
                { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:23, amount:1 },
            ],
        },
        {
            id: 1231,
            date: new Date(),
            status: 'Nieopłacone',
            products: [
                { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:22, amount:1 },
                { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:23, amount:1 },
            ],
        },
        {
            id: 4231,
            date: new Date(),
            status: 'Dostarczone',
            products: [
                { name:"Szynka Sołtysowa", weight: '1000g', price: 25.49, photo:"ham.png", category:"mieso", id:22, amount:1 },
                { name:"Kurczak Cały", weight: '1000g', price: 16.49, photo:"chicken.png", category:"mieso", id:23, amount:1 },
            ],
        },

    ]

    return(
        <>
        <div className="row w-100 mx-auto">
            <div className="mt-4 text-center w-100">
                <div className="card-header radius-none transparent-darker">
                    <span className="h4 card-title text-white">Ostatnie zamówienia</span>
                </div>
                <ul class="list-group list-group-flush  bg-white">

                    {orders.length > 0 && orders.map( (order, index)=>{
                        return(
                            <OrderComponent order={order} key={index}/>
                        )
                    } )}

                    { orders.length == 0 ? 
                        <div className="row pb-2">
                            <div className="col-sm-12 p-4">
                                <p className="border-0 mb-0">Nie masz jeszcze żadnych zamówień</p>
                            </div>
                        </div>
                     : '' }
                    
                


                </ul>
            </div>

            
            <button className="w-75 btn bg-white border mx-auto my-3">Pokaż więcej</button>

        </div>

        </>
    )

}

export default OrdersDiv