import React, { useReducer, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import infoDiv from './infoDiv.module.scss'

const InfoDiv = (props) => {

    const  { user, editUser } = props;

    const URL = 'http://localhost:3000/account/edit';

    const [isEditing, setEditMode] = useState(false);
    const [name, handleGetName] = useState(user.name);
    const [surname, handleGetSurname] = useState(user.surname);
    const [phone, handleGetPhone] = useState(user.phone);
    const [email, handleGetEmail] = useState(user.email);

    const handleEditUser = () => setEditMode(!isEditing);

    const handleConfirmUser = () => {

        if(isEditing === true){
            setEditMode(!isEditing);
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
        name: <input onChange={ e => handleGetName(e.target.value)} value={name} className="text-success"></input>,
        surname: <input onChange={ e => handleGetSurname(e.target.value)} value={surname} className="text-success"></input>,
        phone: <input onChange={ e => handleGetPhone(e.target.value)} value={phone} className="text-success"></input>,
        email: <input onChange={ e => handleGetEmail(e.target.value)} value={email} className="text-success"></input>,
    } 
    
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
                            <p>{isEditing ? dataUserEditTag.name : dataUserTag.name}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Nazwisko:</b></p>
                        </div>
                        <div className="col-md-6">
                            <p>{isEditing ? dataUserEditTag.surname : dataUserTag.surname}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Numer Telefonu:</b></p>
                        </div>
                        <div className="col-md-6">
                            <p>{isEditing ? dataUserEditTag.phone : dataUserTag.phone}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Email:</b></p>
                        </div>
                        <div className="col-md-6">
                            <p>{isEditing ? dataUserEditTag.email : dataUserTag.email}</p>
                        </div>
                    </div>

                    <div className="row col-sm-12 pt-3 w-100">
                        <p className='border-0 mb-3'><b>Adresy:</b></p>
                    </div>
                    <div className="row">

                        {
                            user.addresses && user.addresses.map( (adress) => {
                                const active = adress.active ? infoDiv.active : '';
                                return(
                                    <div className={`col-md-6 text-center no-select`}>
                                        <div className={`pt-3 p-2 mb-3 bg-white ${infoDiv.adress} ${active}`}>
                                            <p className='border-0'><span className="text-dark">{adress.postCode} {adress.city}</span></p>
                                            <p className='border-0'><span className="text-dark">{adress.street}</span></p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* Add button */}
                        <div className="col-md-6 text-center">
                            <div className={`pt-3 p-2 mb-3 rounded bg-white ${infoDiv.adress}`}>
                                <p className='border-0'><span className="text-dark">Dodaj adres</span></p>
                                <p className='border-0'><span className="text-dark material-icons">add</span></p>
                            </div>
                        </div>

                    </div>

                    <button class="w-50 btn btn-outline-success" onClick={ () => handleEditUser()}>Edytuj dane</button>
                    <button class="w-50 btn btn-outline-success" onClick={ () => handleConfirmUser()}>Zapisz zmiany</button>

                </div>
            </div>
        </div>

        </>
    )

}

export default InfoDiv