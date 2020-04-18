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

                <div className={`row w-100 ${myAccount.header} pt-2 mx-auto px-1 transparent-darker`}>
                
                    <div className="text-center h3 my-2 text-white col-md-6 mx-auto pb-3">
                        Twoje konto
                    </div>

                </div>

                <div className="row">

                    <div className="col-md-7 pr-1">

                        <InfoDiv />
                        <ShoppingListsDiv />

                    </div>
                    

                    
                    <div className="col-md-5 pl-1">

                        <OrdersDiv />

                        

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