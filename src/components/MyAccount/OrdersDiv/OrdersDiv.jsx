import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import ordersDiv from './orders.module.scss'
import OrderComponent from './OrderComponent/OrderComponent';
import {serverUrl} from '../../../utils/content/url'

const OrdersDiv = (props) => {

    const [orders, setOrders] = useState('')

    useEffect( () => {

        let accessString = localStorage.getItem('JWT');

        axios.get( serverUrl +'/order/display/fromuser',{
            headers:{
                'Authorization': `JWT ${accessString}`
            },
        })
        .then(function (response) {
            // setOrders(response)
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    }, [])
    

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
                            <li className="list-group-item mt-2 px-0 border">
                                <p className="border-0 mb-0">Nie masz jeszcze żadnych zamówień</p>
                            </li>
                     : <button className="w-75 btn bg-white border mx-auto my-3">Pokaż więcej</button> }
                    
                


                </ul>
            </div>

            
        </div>

        </>
    )

}

export default OrdersDiv