import React from 'react';
import { connect } from 'react-redux';
// import infoDiv from './infoDiv.module.scss'

const OrdersDiv = (props) => {

    return(
        <>
        <div className="row w-100 mx-auto">
            <div className="mt-4 card text-center w-100">
                <div className="card-header">
                    <span className="h3 card-title">Ostatnie zamówienia</span>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        </div>

        </>
    )

}

export default OrdersDiv