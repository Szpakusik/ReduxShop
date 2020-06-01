import React, { useState, useEffect } from 'react';
import axios from 'axios';
import orderView from './OrderView.module.scss';
import myAccount from '../MyAccount/myAccount.module.scss'
import ChooseAddress from './ChooseAddress/ChooseAddress';
import PaymentComponent from './PaymentComponent/PaymentComponent';
import OrderProducts from './OrderProducts/OrderProducts';
import Address from '../MyAccount/InfoDiv/Address';
import AddNewAddress from '../MyAccount/InfoDiv/AddNewAddress'
import { serverUrl } from '../../utils/content/url';
import { connect } from 'react-redux';
import { getCartPrice } from '../../utils/functions/cartFunctions'

const OrderView = (props) => {
    
    useEffect( () => {

        let accessString = localStorage.getItem('JWT')
    
        let defaultAddress;

        if(props.logged){
            
            // User
            axios.get( serverUrl + '/account/details', {headers:{'Authorization': `JWT ${accessString}`}})
            .then( (res) => { defaultAddress = res.data[0].default_address} )
            .catch( (err) => { console.log(err) });

            // Addresses
            axios.get( serverUrl + '/address', {headers:{'Authorization': `JWT ${accessString}`}})
            .then(function (response) {
                const addresses = response.data.rows.map((address) => {
                    if(address.id === defaultAddress) address.active = 1;
                    return address
                })
                props.getAddresses( addresses )
                setActiveAddress(defaultAddress);
            })
            .catch(function (error) {
                console.log(error);
            });

        }else{
            props.getAddresses( [] );
        }

    
    }, [])

    const { addresses, setActiveAddress, cart, addAddress, addContactDetails, logged} = props;

    const [email, getEmail] = useState('');
    const [phone, getPhone] = useState('');
    const [firstName, getFirstName] = useState('');
    const [lastName, getLastName] = useState('');

    let price = getCartPrice(cart)

    const userAddresses = addresses.map(address => 
        <Address         
         management={false}   
         key={address.id}
         userAddresses={addresses}
         address={address}
         setActiveAddress={setActiveAddress}
         /> );

    useEffect(()=> addContactDetails(email, phone))
    
    return (
        <div className={`${myAccount.index} mb-5`}>

            <div className={`row w-100 ${myAccount.header} pt-2 mx-auto px-1 transparent-darker`}>

                <div className="text-center h3 my-2 text-white col-md-6 mx-auto pb-3">
                    Podsumowanie zamówienia
                </div>

            </div>

            <div className="row">

                <div className="col-md-7 col-lg-6 pr-md-1">
                    
                    <OrderProducts />
                  
                </div>
                
                <div className="col-md-5 col-lg-6 pl-md-1">

                    <div class="row w-100 mx-auto">

                        <div className={`row w-100 mx-auto ${myAccount.addresses}`}>

                            <div className="mt-4 text-center w-100">

                                <div className="card-header radius-none transparent-darker">
                                    <span className="h4 card-title text-white">Adres do wysyłki</span>
                                </div>

                                <div className={`px-1 mt-2 bg-white border pt-3 d-flex flex-wrap`}>
                                    {userAddresses}
                                    <AddNewAddress addAddress={addAddress} logged={logged} setActiveAddress={setActiveAddress}/>
                                </div>

                            </div>       

                        </div> 

                    </div>
                    {
                        !logged && 
                        <div class="row w-100 mx-auto">

                            <div className={`row w-100 mx-auto ${myAccount.addresses}`}>

                                <div className="mt-2 text-center w-100">

                                    <div className="card-header radius-none transparent-darker">
                                        <span className="h4 card-title text-white">Dane kontaktowe</span>
                                    </div>
                                    <div className={`${orderView.contactDetails} px-1 mt-2 bg-white border py-3 flex-wrap`}>
                                        <input onChange={ e => getFirstName(e.target.value)} value={firstName} className={`text-success mt-2 ${orderView.addressInfo}`} placeholder={`Imię`}></input>
                                        <input onChange={ e => getLastName(e.target.value)} value={lastName} className={`text-success mt-2 ml-md-2 ${orderView.addressInfo}`} placeholder={`Nazwisko`}></input>
                                        <input onChange={ e => getEmail(e.target.value)} value={email} className={`text-success mt-2  ${orderView.addressInfo}`} placeholder={`Email*`}></input>
                                        <input onChange={ e => getPhone(e.target.value)} value={phone} className={`text-success mt-2 ml-md-2 ${orderView.addressInfo}`} placeholder={`Telefon`}></input>
                                    </div>
                                </div>       

                            </div>
                    
                        </div>
                    }

                        {/* <ChooseAddress /> */}
                        <PaymentComponent phone={phone} addresses={addresses} price={price} cart={cart} logged={logged} user={{ email, phone, firstName, secondName: lastName }}/>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        addresses: state.loginReducer.user.addresses,
        cart: state.cartReducer.cartProducts,
        logged: state.loginReducer.logged
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getAddresses: ( addresses ) => { dispatch( { type: "GET_ADDRESS", addresses: addresses } ) },
        setActiveAddress: ( id ) => { dispatch( { type: "CHANGE_ACTIVE_ADDRESS", id: id, } ) },
        addAddress: ( city, postCode, street, id ) => { dispatch( { type: "ADD_ADDRESS", city: city, postCode: postCode, street: street, id: id } ) },
        addContactDetails: (email, phone) => { dispatch( { type:"ADD_CONTACT_DETAILS", email: email, phone: phone,})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderView);