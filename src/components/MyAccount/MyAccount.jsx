import React from 'react';
import { connect } from 'react-redux';
import myAccount from './myAccount.module.scss';
import InfoDiv from './InfoDiv/InfoDiv';
import OrdersDiv from './OrdersDiv/OrdersDiv';
import ShoppingListsDiv from './ShoppingListsDiv/ShoppingListsDiv';


const MyAccount = ({user, editUser, editAddress, addAddress, setActiveAddress, deleteAddress}) => {

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

                        <InfoDiv
                         addAddress={addAddress}
                         editAddress={editAddress}
                         editUser={editUser}
                         user={user}
                         setActiveAddress={setActiveAddress}
                         deleteAddress={deleteAddress}
                         />

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
        user: state.loginReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
         editUser: ( name, surname, email, phone ) => { dispatch( { type: "EDIT_USER", name: name, surname: surname, email: email, phone: phone } ) },
         editAddress: ( id, city, postCode, street ) => { dispatch( { type: "EDIT_ADDRESS", id: id, city: city, postCode: postCode, street: street } ) },
         addAddress: ( city, postCode, street, ) => { dispatch( { type: "ADD_ADDRESS", city: city, postCode: postCode, street: street, } ) },
         setActiveAddress: (id) => { dispatch( { type: "CHANGE_ACTIVE_ADDRESS", id: id, } ) },
         deleteAddress:  (id) => { dispatch( { type: "DELETE_ADDRESS", id: id, } ) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)