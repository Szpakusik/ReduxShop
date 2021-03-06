import React, { useState } from 'react';
import axios from 'axios';
import infoDiv from './infoDiv.module.scss';
import {serverUrl} from '../../../utils/content/url'
import { validateAddress } from '../../../utils/functions/validationFunctions'

const AddNewAddress = (props) => {

    const { addAddress, setActiveAddress } = props;
    const [errorMessage, setErrorMessage] = useState("");
    const [addingAddress, setAddingAddress] = useState(false);
    const [city, handleGetCity] = useState("");
    const [postCode, handleGetPostCode] = useState("");
    const [street, handleGetStreet] = useState("");

    const handleSendAddress = () => {

        const validationStatus = validateAddress( postCode, city, street )
        if( validationStatus.success === false ) {
            setErrorMessage( validationStatus.message )
            return false;
        }

        let accessString = localStorage.getItem('JWT')
        let authRoute = props.logged ? '' : '/noauth'

        if(addingAddress === true){
            axios.post( serverUrl + '/address' + authRoute, {
                city,
                postCode,
                address: street,
            },{
                headers: { 
                    'Authorization': `JWT ${accessString}`,
                }
            })
            .then(response => {
                setErrorMessage( '' )
                setAddingAddress(!addingAddress);
                addAddress(city, postCode, street, response.data.rows.insertId);
                setActiveAddress(response.data.rows.insertId);
            })
            .catch(error => {
                console.log(error);
            });   
        } else
        return;  
    }

    const handleAddAddress = () => setAddingAddress(!addingAddress);

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
            <div className={`${infoDiv.editUserWrapper} mb-2`}>
                <button class={`btn btn-outline-success ${infoDiv.editUserButton}`} onClick={ () => handleAddAddress()}>{addingAddress ? 'Anuluj' : 'Dodaj'}</button>
                <button class={`btn btn-outline-success ${infoDiv.editUserButton}`} onClick={ () => handleSendAddress()}>Dodaj</button>
            </div>   
       }
  
    if(!props.ordered) {
        return(
            <div className={`col-lg-6 text-center ${infoDiv.newAddress}`}>
                <div onClick={ () => {addingAddress ? null : handleAddAddress()}} className={`pt-3 p-2 mb-3 rounded bg-white ${infoDiv.adress}`}>
                    {addingAddress ? dataAddAddressTag.inputs : dataAddAddressTag.default}
                </div>
                {addingAddress ? dataAddAddressTag.buttons : null}
                <p className={`text-danger w-100 text-center pt-2 border-0 ${errorMessage ? '' : 'd-none'}`} style={{fontSize:"100%"}}>{errorMessage}</p>
            </div>     
        )   
    }
    else return null
}
export default AddNewAddress;