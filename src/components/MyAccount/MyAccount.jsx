import React from 'react';
import { connect } from 'react-redux';
import myAccount from './myAccount.module.scss';
import InfoDiv from './InfoDiv/InfoDiv';
import OrdersDiv from './OrdersDiv/OrdersDiv';
import ShoppingListsDiv from './ShoppingListsDiv/ShoppingListsDiv';


const MyAccount = (props) => {

    return(
        <>
            <div className={`container ${myAccount.index} mb-5`}>

                <div className={`row w-100`}>

                    <div className="text-center h1 my-2 text-dark col-md-4 mx-auto pb-3">
                        Moje konto
                    </div>

                </div>

                <div className="row">

                    <div className="col-md-6">

                        <InfoDiv />
                        
                    </div>
                    

                    
                    <div className="col-md-6">

                        <OrdersDiv />

                        <ShoppingListsDiv />

                    </div>
                
                </div>

            </div>
        </>
    )

}

const mapStateToProps = (state) => {
    return{

    }
}

export default connect(mapStateToProps)(MyAccount)