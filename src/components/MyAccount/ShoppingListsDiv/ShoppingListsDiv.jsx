import React from 'react';
import { connect } from 'react-redux';
// import infoDiv from './infoDiv.module.scss'

const ShoppingListsDiv = (props) => {
    let lists = [];
    return(
        <>
        <div className="row w-100 mx-auto">
                            <div className="my-2 card w-100 h-50 text-center">
                                <div className="card-header">
                                    <span className="h4 card-title">Listy zakupów</span>
                                </div>
                                
                                { lists.length == 0 ? 
                                    <div className="row pb-2">
                                        <div className="col-sm-12 p-4">
                                            <p className="border-0 mb-0">Nie masz jeszcze żadnych list zakupowych</p>
                                        </div>
                                    </div>
                                : '' }

                            </div>
                        </div>

        </>
    )

}

export default ShoppingListsDiv