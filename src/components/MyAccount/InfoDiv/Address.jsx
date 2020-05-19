import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import infoDiv from './infoDiv.module.scss';
import {serverUrl} from '../../../utils/content/url'

const Address = (props) => {

    let { address, editAddress, userAddresses, setActiveAddress, deleteAddress, management} = props;

    let active = address.active ? infoDiv.active : '';
    
    const [city, handleGetCity] = useState(address.city);
    const [postCode, handleGetPostCode] = useState(address.post_code);
    const [street, handleGetStreet] = useState(address.address);

    const [editingAddress, setEditAddress] = useState(false);

    const handleSetActiveAddress = (id) => {

        if (window.confirm("Potwierdź zmiane adresu domyślnego")) { 
            let accessString = localStorage.getItem('JWT')
        
            axios.patch( serverUrl + '/account/details', 
                {
                    rowsToChange: `default_address = "${id}"`,
                },
                {
                    headers: {
                        'Authorization': `JWT ${accessString}`,
                    }
                })
                .then(response => {
                    setActiveAddress(id);
                })
                .catch(error => {
                    console.log(error);
                }); 

        }
    }

    const handleDeleteAddress = ( id ) => {

        let accessString = localStorage.getItem('JWT')
        console.log(accessString)
        axios.delete( serverUrl + '/address/delete', 
        {
            headers: { 
            'Authorization': `JWT ${accessString}`,
            },
            data: {
                userId: props.user.id,
                id: id
            }
        })
        .then(function (response) {
            deleteAddress(id)
            getAddresses( response.data.rows )

        })
        .catch(function (error) {
            console.log(error);
        });

    }

    const handleEditAddress = (id) => {   
        const index = userAddresses.findIndex(address => address.id === id);
        if(index >=0 ) 
            setEditAddress(!editingAddress)
        else 
            return;
    }

    const handleConfirmAddress = (id) =>{
        if(editingAddress === true){
            
            let accessString = localStorage.getItem('JWT')

            axios.patch( serverUrl + '/address/details', 
            {
                rowsToChange: `address = "${street}", post_code = "${postCode}", city = "${city}"`,
                id: id,
            },
            {
                headers: {
                    'Authorization': `JWT ${accessString}`,
                }
            })
            .then(response => {

                handleGetStreet(street)
                handleGetPostCode(postCode)
                handleGetCity(city)

                setEditAddress(!editingAddress);
                editAddress(id, city, postCode, street);
            })
            .catch(error => {
                console.log(error);
            }); 
        } else return;  
    }

    const dataAddressTag = {
        city: <p className='border-0'><span className="text-dark">{address.post_code} {address.city}</span></p>,
        street:  <p className='border-0'><span className="text-dark">{address.address}</span></p>,
    }

    const dataAddressEditTag = {
        city: <input onChange={ e => handleGetCity(e.target.value)} value={city} className={`text-success ${infoDiv.addressInfo}`} placeholder={`Miasto`}></input>,
        postCode: <input onChange={ e => handleGetPostCode(e.target.value)} value={postCode} className={`text-success ${infoDiv.addressInfo}`} placeholder={`Kod pocztowy`}></input>,
        street: <input onChange={ e => handleGetStreet(e.target.value)} value={street} className={`text-success ${infoDiv.addressInfo}`} placeholder={`Ulica`}></input>,
    } 
    
    if(management){
        return(
            <div className={`col-md-6 text-center no-select ${infoDiv.address}`}>  

                <div onClick={() => { !editingAddress ? handleSetActiveAddress(address.id) : null }} className={`pt-3 p-2 mb-3 bg-white ${infoDiv.adress} ${active}`}>
                    {editingAddress ? dataAddressEditTag.postCode : dataAddressTag.posCtode}
                    {editingAddress ? dataAddressEditTag.city : dataAddressTag.city}                             
                    {editingAddress ? dataAddressEditTag.street : dataAddressTag.street}
                    {editingAddress ? <button onClick={ () => handleDeleteAddress(address.id)} class="w-50 btn btn-outline-success">Usuń adres</button> : null}
                </div>
                <div className={`${infoDiv.editUserWrapper}`}>
                    <button class={`btn btn-outline-success ${infoDiv.editUserButton}`} onClick={() => handleEditAddress(address.id)}>{editingAddress ? 'Anuluj' : 'Edytuj'}</button>
                    {editingAddress ? <button class={`btn btn-outline-success ${infoDiv.editUserButton}`} onClick={ () => handleConfirmAddress(address.id)}>Zapisz</button> : null}  
                </div>
            </div>
        )
    }
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

const mapStateToProps = (state) => {
    return{
        user: state.loginReducer.user
    }
}
export default connect(mapStateToProps)(Address);