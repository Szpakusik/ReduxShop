import React, { useState } from 'react';
import axios from 'axios';
import infoDiv from './infoDiv.module.scss';

const Address = (props) => {

    const { address, editAddress, userAddresses, setActiveAddress, deleteAddress, management} = props;

    const active = address.active ? infoDiv.active : '';

    const [city, handleGetCity] = useState(address.city);
    const [postCode, handleGetPostCode] = useState(address.postCode);
    const [street, handleGetStreet] = useState(address.street);

    const [editingAddress, setEditAddress] = useState(false);

    const handleSetActiveAddress = id => setActiveAddress(id);

    const handleDeleteAddress = id => deleteAddress(id)

    const handleEditAddress = (id) => {   
        const index = userAddresses.findIndex(address => address.id === id);
        if(index >=0 ) 
        setEditAddress(!editingAddress)
        else 
        return;
    }

    const handleConfirmAddress = (id) =>{
        if(editingAddress === true){
            setEditAddress(!editingAddress);
            editAddress(id, city, postCode, street);
        } else
        return;   

        axios.post(URL, {
            id,
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

    const dataAddressTag = {
        city: <p className='border-0'><span className="text-dark">{address.postCode} {address.city}</span></p>,
        street:  <p className='border-0'><span className="text-dark">{address.street}</span></p>,
    }

    const dataAddressEditTag = {
        city: <input onChange={ e => handleGetCity(e.target.value)} value={city} className="text-success"></input>,
        postCode: <input onChange={ e => handleGetPostCode(e.target.value)} value={postCode} className="text-success"></input>,
        street: <input onChange={ e => handleGetStreet(e.target.value)} value={street} className="text-success"></input>,
    } 
    
    if(management)
    return(
        <div className={`col-md-6 text-center no-select`}>  

            <div onClick={() => handleSetActiveAddress(address.id)} className={`pt-3 p-2 mb-3 bg-white ${infoDiv.adress} ${active}`}>
                {editingAddress ? dataAddressEditTag.postCode : dataAddressTag.postCode}
                {editingAddress ? dataAddressEditTag.city : dataAddressTag.city}                             
                {editingAddress ? dataAddressEditTag.street : dataAddressTag.street}
                {editingAddress ? <button onClick={ () => handleDeleteAddress(address.id)} class="w-50 btn btn-outline-success">Usuń adres</button> : null}
            </div>
            <button class="w-50 btn btn-outline-success" onClick={() => handleEditAddress(address.id)}>{editingAddress ? 'Anuluj' : 'Edytuj'}</button>
            {editingAddress ? <button class="w-50 btn btn-outline-success" onClick={ () => handleConfirmAddress(address.id)}>Zapisz zmiany</button> : null}  
        </div>
    )
    else{
        return(
        <div className={`col-md-6 text-center no-select`}>  
            <div onClick={() => handleSetActiveAddress(address.id)} className={`pt-3 p-2 mb-3 bg-white ${infoDiv.adress} ${active}`}>
            {dataAddressTag.postCode}   
            {dataAddressTag.city}
            {dataAddressTag.street}
            </div>
        </div>
    )}
    
}

export default Address;