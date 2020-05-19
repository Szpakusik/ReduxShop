import React, { useState } from 'react';
import axios from 'axios';
import infoDiv from './infoDiv.module.scss';
import {serverUrl} from '../../../utils/content/url'

const AddNewAddress = (props) => {

    const  { addAddress } = props;

    const [addingAddress, setAddAddress] = useState(false);

    const [city, handleGetCity] = useState("");
    const [postCode, handleGetPostCode] = useState("");
    const [street, handleGetStreet] = useState("");

    const handleSendAddress = () => {
        let accessString = localStorage.getItem('JWT')

        if(addingAddress === true){
            axios.post( serverUrl + '/address', {
                city,
                postCode,
                address: street,
            },{
                headers: { 
                    'Authorization': `JWT ${accessString}`,
                }
            })
            .then(response => {
                setAddAddress(!addingAddress);
                addAddress(city, postCode, street, response.data.rows.insertId);
                // addAddress(res.body.)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });   
        } else
        return;  
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
  
    return(
        <div className={`col-md-6 text-center ${infoDiv.newAddress}`}>
            <div onClick={ () => {addingAddress ? null : handleAddAddress()}} className={`pt-3 p-2 mb-3 rounded bg-white ${infoDiv.adress}`}>
            {addingAddress ? dataAddAddressTag.inputs : dataAddAddressTag.default}
           </div>
            {addingAddress ? dataAddAddressTag.buttons : null}
        </div>     
    )   
}

export default AddNewAddress;