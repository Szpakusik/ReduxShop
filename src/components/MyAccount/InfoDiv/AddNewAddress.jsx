import React, { useState } from 'react';
import axios from 'axios';
import infoDiv from './infoDiv.module.scss';

const AddNewAddress = (props) => {

     const  { addAddress } = props;

    const [addingAddress, setAddAddress] = useState(false);

    const [city, handleGetCity] = useState("");
    const [postCode, handleGetPostCode] = useState("");
    const [street, handleGetStreet] = useState("");

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

    const handleAddAddress = () => setAddAddress(!addingAddress);

    const dataAddAddressTag = {
        default:
            <>
                <p className='border-0'><span className="text-dark">Dodaj adres</span></p>
                <p className='border-0'><span className="text-dark material-icons">add</span></p>
            </>,
        inputs:
            <>
            <input onChange={ e => handleGetPostCode(e.target.value)} value={postCode} className={`text-success ${infoDiv.addressInfo}`} placeholder={`Kod pocztowy`}></input>
            <input onChange={ e => handleGetCity(e.target.value)} value={city} className={`text-success ${infoDiv.addressInfo}`} placeholder={`Miasto`}></input>
            <input onChange={ e => handleGetStreet(e.target.value)} value={street} className={`text-success ${infoDiv.addressInfo}`} placeholder={`Ulica`}></input>   
            </>,
        buttons:
            <div className={`${infoDiv.editUserWrapper}`}>
                <button class={`btn btn-outline-success ${infoDiv.editUserButton}`} onClick={ () => handleAddAddress()}>{addingAddress ? 'Anuluj' : 'Dodaj'}</button>
                <button class={`btn btn-outline-success ${infoDiv.editUserButton}`} onClick={ () => handleSendAddress()}>Dodaj</button>
            </div>   
       }
  
    if(!props.ordered) {
        return(
        <div className={`col-md-6 text-center ${infoDiv.newAddress}`}>
            <div onClick={ () => {addingAddress ? null : handleAddAddress()}} className={`pt-3 p-2 mb-3 rounded bg-white ${infoDiv.adress}`}>
            {addingAddress ? dataAddAddressTag.inputs : dataAddAddressTag.default}
           </div>
            {addingAddress ? dataAddAddressTag.buttons : null}
        </div>     
    )   
}
    else return null
}
export default AddNewAddress;