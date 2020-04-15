import React from 'react';
import { connect } from 'react-redux';
import infoDiv from './infoDiv.module.scss'

const InfoDiv = (props) => {

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
            <div className="mt-4 card w-100 ">
                <div className="card-header text-center">
                    <span className="h4 card-title">Informacje</span>
                </div>
                <div className={`p-4`}>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Imie:</b></p>
                        </div>
                        <div className="col-md-6">
                            <p><span className="text-success">Norbert</span></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Nazwisko:</b></p>
                        </div>
                        <div className="col-md-6">
                            <p><span className="text-success">Szpakowski</span></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Numer Telefonu:</b></p>
                        </div>
                        <div className="col-md-6">
                            <p><span className="text-success">570546193</span></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Email:</b></p>
                        </div>
                        <div className="col-md-6">
                            <p><span className="text-success">szpakusik@gmail.com</span></p>
                        </div>
                    </div>

                    <div className="row col-sm-12 pt-3 w-100">
                        <p className='border-0 mb-3'><b>Adresy:</b></p>
                    </div>
                    <div className="row">

                        {
                            adresses && adresses.map( (adress) => {
                                const active = adress.active ? infoDiv.active : ''
                                return(
                                    <div className={`col-md-6 text-center no-select`}>
                                        <div className={`pt-3 p-2 mb-3 rounded bg-light ${infoDiv.adress} ${active}`}>
                                            <p className='border-0'><span className="text-success">{adress.postCode} {adress.city}</span></p>
                                            <p className='border-0'><span className="text-success">{adress.street}</span></p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* Add button */}
                        <div className="col-md-6 text-center">
                            <div className={`pt-3 p-2 mb-3 rounded bg-light ${infoDiv.adress}`}>
                                <p className='border-0'><span className="text-success">Dodaj adres</span></p>
                                <p className='border-0'><span className="text-success material-icons">add</span></p>
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