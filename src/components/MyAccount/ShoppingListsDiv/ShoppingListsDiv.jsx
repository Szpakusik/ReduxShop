import React from 'react';
import { connect } from 'react-redux';
// import infoDiv from './infoDiv.module.scss'

const ShoppingListsDiv = (props) => {

    return(
        <>
        <div className="row w-100 mx-auto">
                            <div className="my-3 card w-100 h-50 text-center">
                                <div className="card-header">
                                    <span className="h3 card-title">Listy zakupów</span>
                                </div>
                                <p className='border-0'>-</p>
                                <p className='border-0'>-</p>
                                <p className='border-0'>-</p>
                            </div>
                        </div>

        </>
    )

}

export default ShoppingListsDiv