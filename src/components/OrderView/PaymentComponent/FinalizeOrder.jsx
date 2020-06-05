import React, { useState, useEffect } from 'react';
import axios from 'axios';

import orderView from '../OrderView.module.scss';
import myAccount from '../../MyAccount/myAccount.module.scss'
import ChooseAddress from '../ChooseAddress/ChooseAddress';
import PaymentComponent from '../PaymentComponent/PaymentComponent';
import OrderProducts from '../OrderProducts/OrderProducts';
import Address from '../../MyAccount/InfoDiv/Address';
import AddNewAddress from '../../MyAccount/InfoDiv/AddNewAddress';
import { serverUrl } from '../../../utils/content/url';
import { connect } from 'react-redux';
import { getCartPrice } from '../../../utils/functions/cartFunctions'

const FinalizeOrder = (props) => {
    const { addresses, setActiveAddress, cart, addAddress, contactDetails } = props;

    const [ orderedProducts, setProducts ] = useState([]);
    const [ status, setStatus ] = useState('');
    const [ date, setDate ] = useState('');
    const [ price, setPrice ] = useState(0);
    const [ amountOfProducts, setAmount ] = useState('');

    useEffect( () => {
        let authRoute = props.logged ? '' : '/noauth'
        
        if( props.tempOrderId !== -1){ 
            let accessString = localStorage.getItem('JWT');

            axios.get( serverUrl +'/order/single'+ authRoute,{
                params:{
                    order_id: `${props.tempOrderId}`
                },
                headers:{
                    'Authorization': `JWT ${accessString}`
                },
            })
            .then(function (response) {
                
                setStatus(response.data.orderRecords[0].status)
                setDate( response.data.orders[0].date)
                //address
                const addressId = response.data.orderRecords[0].address_id
                props.logged && axios.get( serverUrl +`/address/`+addressId,
                {
                    headers:{
                        'Authorization': `JWT ${accessString}`
                    },
                })
                .then( ( res ) => {
                    let address =  res.data.rows[0];
                    address.active = 1
                    props.getAddresses( [address] )
                    setActiveAddress( address.id );
                })
                .catch(function (error) {
                    console.log(error);
                });

                //transform
                axios.post( serverUrl +'/product/transform',
                {
                    productArray: response.data.orders[0].products
                },
                {
                    headers:{
                        'Authorization': `JWT ${accessString}`
                    },
                })
                .then( ( res ) => {
                    setProducts( res.data.productArray );
                    setPrice( Number(getCartPrice(res.data.productArray) ) );
                    setAmount( res.data.productArray.length);
                })
                .catch(function (error) {
                    console.log(error);
                });

            })
        }
    }, [])


    let ordered = true;

    const selectedAddress = addresses.map(address => {
        if(address.active){
        return <Address         
         management={false}   
         ordered={ordered}
         key={address.id}
         userAddresses={addresses}
         address={address}
         setActiveAddress={setActiveAddress} 
    />}
});

    const userAddresses = addresses.map(address => 
        <Address         
         management={false}   
         ordered={ordered}
         key={address.id}
         userAddresses={addresses}
         address={address}
         setActiveAddress={setActiveAddress}
         /> );

    return (
        <div className={`${myAccount.index} mb-5`}>

            <div className={`row w-100 ${myAccount.header} pt-2 mx-auto px-1 transparent-darker`}>

                <div className="text-center h3 my-2 text-white col-md-6 mx-auto pb-3">
                    Zamówienie Numer #{props.tempOrderId}
                </div>

            </div>

            <div className="row">

                <div className="col-md-7 col-lg-6 pr-md-1">
                    
                    <OrderProducts ordered={true} products={orderedProducts}/>
                  
                </div>
                
                <div className="col-md-5 col-lg-6 pl-md-1">

                    <div class="row w-100 mx-auto">

                        <div className={`row w-100 mx-auto ${myAccount.addresses}`}>

                            <div className="mt-4 text-center w-100">

                                <div className="card-header radius-none transparent-darker">
                                    <span className="h4 card-title text-white">Adres do wysyłki</span>
                                </div>

                                <div className={`px-1 mt-2 bg-white border pt-3`}>
                                    {ordered ? selectedAddress : userAddresses}
                                    <AddNewAddress ordered={ordered} addAddress={addAddress}/>
                                </div>

                            </div>       

                        </div> 
                        
                    </div>
                        {/* <ChooseAddress /> */}
                        <PaymentComponent order={{amountOfProducts, date, price, status}} contactDetails={contactDetails} ordered={ordered} addresses={addresses} products={orderedProducts} logged={props.logged} />
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        addresses: state.loginReducer.user.addresses,
        cart: state.cartReducer.cartProducts,
        contactDetails: state.orderReducer.contactDetails,
        tempOrderId: state.orderReducer.tempOrderId,
        logged: state.loginReducer.logged
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getAddresses: ( addresses ) => { dispatch( { type: "GET_ADDRESS", addresses: addresses } ) },
        setActiveAddress: (id) => { dispatch( { type: "CHANGE_ACTIVE_ADDRESS", id: id, } ) },
        addAddress: ( city, postCode, street, ) => { dispatch( { type: "ADD_ADDRESS", city: city, postCode: postCode, street: street, } ) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinalizeOrder);