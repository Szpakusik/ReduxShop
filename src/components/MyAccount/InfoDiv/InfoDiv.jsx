import React, { useReducer, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import infoDiv from './infoDiv.module.scss';
import Address from './Address'
import AddNewAddress from './AddNewAddress'
import { serverUrl } from '../../../utils/content/url';

const InfoDiv = (props) => {

    const  { user, editUser, editAddress, addAddress, setActiveAddress, deleteAddress } = props;

    const URL = serverUrl + '/account/edit';

    const [editingUser, setEditUser] = useState(false);
    const [name, handleGetName] = useState(user.name);
    const [surname, handleGetSurname] = useState(user.surname);
    const [phone, handleGetPhone] = useState(user.phone);
    const [email, handleGetEmail] = useState(user.email);

    const handleEditUser = () => setEditUser(!editingUser);

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

    const dataUserTag = {
        name: <span className="text-success">{user.name}</span>,
        surname: <span className="text-success">{user.surname}</span>,
        phone: <span className="text-success">{user.phone}</span>,
        email: <span className="text-success">{user.email}</span>,
    } 

    const dataUserEditTag = {
        name: <input onChange={ e => handleGetName(e.target.value)} value={name} className={`text-success ${infoDiv.userInfo}`}></input>,
        surname: <input onChange={ e => handleGetSurname(e.target.value)} value={surname} className={`text-success ${infoDiv.userInfo}`}></input>,
        phone: <input onChange={ e => handleGetPhone(e.target.value)} value={phone} className={`text-success ${infoDiv.userInfo}`}></input>,
        email: <input onChange={ e => handleGetEmail(e.target.value)} value={email} className={`text-success ${infoDiv.userInfo}`}></input>,
    }

    const addresses = user.addresses.map(address => 
        <Address
         management={true} 
         key={address.id}
         userAddresses={user.addresses}
         editAddress={editAddress}
         address={address}
         setActiveAddress={setActiveAddress}
         deleteAddress={deleteAddress}
         /> );

    return(    
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
                    <div className={`${infoDiv.editUserWrapper}`}>
                        <button class={`btn btn-outline-success ${infoDiv.editUserButton}`} onClick={ () => handleEditUser()}>{editingUser ? 'Anuluj' : 'Edytuj'}</button>
                        {editingUser ? <button class={`btn btn-outline-success ${infoDiv.editUserButton}`} onClick={ () => handleConfirmUser()}>Zapisz</button> : null}
                    </div>

                    <div className="row col-sm-12 pt-3 w-100">
                        <p className='border-0 mb-3'><b>Adresy:</b></p>
                    </div>

                    <div className="row">
                        { addresses }
                        <AddNewAddress addAddress={addAddress}/>               
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoDiv