import React from 'react';
import { connect } from 'react-redux';
import infoDiv from './infoDiv.module.scss'

const InfoDiv = (props) => {

    const  { user } = props;

    let adresses = [
        {
            postCode: '26-026',
            city: 'Radomice',
            street: 'ul. Żytnia 5',
            active: 1,
        },
        {
            postCode: '26-026',
            city: 'Morawica',
            street: 'Skrzelczyce 143',
            active: 0,
        }
    ]

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
                            <p><span className="text-success">{user.name}</span></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Nazwisko:</b></p>
                        </div>
                        <div className="col-md-6">
                            <p><span className="text-success">{user.surname}</span></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Numer Telefonu:</b></p>
                        </div>
                        <div className="col-md-6">
                            <p><span className="text-success">{user.phone}</span></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Email:</b></p>
                        </div>
                        <div className="col-md-6">
                            <p><span className="text-success">{user.email}</span></p>
                        </div>
                    </div>

                    <div className="row col-sm-12 pt-3 w-100">
                        <p className='border-0 mb-3'><b>Adresy:</b></p>
                    </div>
                    <div className="row">

                        {
                            adresses && adresses.map( (adress) => {
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
                </div>
            </div>
        </div>

        </>
    )

}

export default InfoDiv