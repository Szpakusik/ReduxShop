import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import OrderComponent from './OrderComponent/OrderComponent';
import {serverUrl} from '../../../utils/content/url'

const OrdersDiv = (props) => {
    
    const [ limitCounter, setLimit ] = useState(3);

    useEffect( () => {

        let accessString = localStorage.getItem('JWT');

        axios.get( serverUrl +'/order/history',{
            headers:{
                'Authorization': `JWT ${accessString}`
            },
        })
        .then(function (response) {
            props.setOrders(response.data.orders)
        })
        .catch(function (error) {
            console.log(error);
        });

    }, [limitCounter]);

    const handleLoadMore = () => {
        setLimit( limitCounter + 3);
    }
    

    return(
        <>
        <div className="row w-100 mx-auto">
            <div className="mt-4 text-center w-100">
                <div className="card-header radius-none transparent-darker">
                    <span className="h4 card-title text-white">Ostatnie zamówienia</span>
                </div>
                <ul className="list-group list-group-flush  bg-white">

                    {props.orders.length > 0 && props.orders.map( (order, index)=>{
                        if(index < limitCounter)
                        return(
                            <OrderComponent management={ true } order={order} key={index}/>
                        )
                    } )}

                    { props.orders.length == 0 ? 
                            <li className="list-group-item mt-2 px-0 border">
                                <p className="border-0 mb-0">Nie masz jeszcze żadnych zamówień</p>
                            </li>
                     : props.orders.length >= limitCounter ? <button onClick={ handleLoadMore }className="w-75 btn bg-white border mx-auto my-3">Pokaż więcej</button> : "" }
                    
                


                </ul>
            </div>

            
        </div>

        </>
    )

}

const mapStateToProps = ( state ) => {
    return{
        orders: state.orderReducer.orders,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setOrders: ( orders )=>{ dispatch( { type: "SET_ORDERS", orders } ) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrdersDiv)