import React from 'react';
import { connect } from 'react-redux';
// import infoDiv from './infoDiv.module.scss'

const ShoppingListsDiv = (props) => {
    let lists = [];
    return(
        <>
        <div className="row w-100 mx-auto">
            
                            <div className="w-100 h-50 text-center">
                                
                                <div className="mt-4 card-header radius-none transparent-darker">
                                    <span className="h4 card-title text-white">Listy zakupów</span>
                                </div>
                                
                                { lists.length == 0 ? 
                                    <div className="bg-white border pb-2 mt-2">
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