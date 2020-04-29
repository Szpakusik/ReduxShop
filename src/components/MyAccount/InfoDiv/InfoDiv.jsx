import React, { useReducer, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import infoDiv from './infoDiv.module.scss';
import Address from './Address'

const InfoDiv = (props) => {

    const  { user, editUser, editAddress, addAddress } = props;

    const URL = 'http://localhost:3000/account/edit';

    const [editingUser, setEditUser] = useState(false);
    const [name, handleGetName] = useState(user.name);
    const [surname, handleGetSurname] = useState(user.surname);
    const [phone, handleGetPhone] = useState(user.phone);
    const [email, handleGetEmail] = useState(user.email);

    const [addingAddress, setAddAddress] = useState(false);
    const [city, handleGetCity] = useState();
    const [postCode, handleGetPostCode] = useState();
    const [street, handleGetStreet] = useState();

    const handleEditUser = () => setEditUser(!editingUser);
    const handleAddAddress = () => setAddAddress(!addingAddress);

    const handleConfirmUser = () => {

        if(editingUser === true){
            setEditUser(!editingUser);
            editUser(name, surname, email, phone);
        } else
        return;   

        axios.post(URL, {
            name,
            surname,
            phone,
            email,
        })
        .then(response => {
            if(response.ok){
                console.log(response);     
            }
            throw Error("Błąd")
        })
        .catch(error => {
            console.log(error);
        });    
    }

    const handleSendAddress = () => {

        if(addingAddress === true){
            setAddAddress(!addingAddress);
            addAddress(city, postCode, street);
        } else
        return;   

        axios.post(URL, {
            city,
            postCode,
            street,
        })
        .then(response => {
            if(response.ok){
                console.log(response);     
            }
            throw Error("Błąd")
        })
        .catch(error => {
            console.log(error);
        });    
    }

   const dataAddAddressTag = {
    default:
        <>
            <p className='border-0'><span className="text-dark">Dodaj adres</span></p>
            <p className='border-0'><span className="text-dark material-icons">add</span></p>
        </>,
    addAddress: 
        <>
        <input onChange={ e => handleGetPostCode(e.target.value)} value={postCode} className="text-success" placeholder={`Kod pocztowy`}></input>
        <input onChange={ e => handleGetCity(e.target.value)} value={city} className="text-success" placeholder={`Miasto`}></input>
        <input onChange={ e => handleGetStreet(e.target.value)} value={street} className="text-success" placeholder={`Ulica`}></input>
        </>
   }
  
    const dataUserTag = {
        name: <span className="text-success">{user.name}</span>,
        surname: <span className="text-success">{user.surname}</span>,
        phone: <span className="text-success">{user.phone}</span>,
        email: <span className="text-success">{user.email}</span>,
    } 

    const dataUserEditTag = {
        name: <input onChange={ e => handleGetName(e.target.value)} value={name} className="text-success"></input>,
        surname: <input onChange={ e => handleGetSurname(e.target.value)} value={surname} className="text-success"></input>,
        phone: <input onChange={ e => handleGetPhone(e.target.value)} value={phone} className="text-success"></input>,
        email: <input onChange={ e => handleGetEmail(e.target.value)} value={email} className="text-success"></input>,
    }

    const addresses = user.addresses.map(address => <Address userAddresses={user.addresses} editAddress={editAddress} address={address}/> );

    return(
        <>
        
        <div className="row w-100 mx-auto">
            <div className="mt-4 w-100 ">
                <div className="card-header radius-none text-center transparent-darker">
                    <span className="h4 card-title text-white">Informacje</span>
                </div>
                <div className={`p-4 mt-2 bg-white border`}>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Imie:</b></p>
                        </div>
                        <div className="col-md-6">
                            <p>{editingUser ? dataUserEditTag.name : dataUserTag.name}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Nazwisko:</b></p>
                        </div>
                        <div className="col-md-6">
                            <p>{editingUser ? dataUserEditTag.surname : dataUserTag.surname}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Numer Telefonu:</b></p>
                        </div>
                        <div className="col-md-6">
                            <p>{editingUser ? dataUserEditTag.phone : dataUserTag.phone}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Email:</b></p>
                        </div>
                        <div className="col-md-6">
                            <p>{editingUser ? dataUserEditTag.email  : dataUserTag.email}</p>
                        </div>
                    </div>

                    <button class="w-50 btn btn-outline-success" onClick={ () => handleEditUser()}>Edytuj dane</button>
                    <button class="w-50 btn btn-outline-success" onClick={ () => handleConfirmUser()}>Zapisz zmiany</button>

                    <div className="row col-sm-12 pt-3 w-100">
                        <p className='border-0 mb-3'><b>Adresy:</b></p>
                    </div>

                    <div className="row">
                        { addresses }
                        {/* Add button */}
                        <div className="col-md-6 text-center">
                            <div className={`pt-3 p-2 mb-3 rounded bg-white ${infoDiv.adress}`}>
                                {addingAddress ? dataAddAddressTag.addAddress : dataAddAddressTag.default  }
                                <button class="w-50 btn btn-outline-success" onClick={ () => handleAddAddress()}>Dodaj</button>
                                <button class="w-50 btn btn-outline-success" onClick={ () => handleSendAddress()}>Zapisz zmiany</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )

}

export default InfoDiv