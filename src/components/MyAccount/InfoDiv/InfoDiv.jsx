import React from 'react';
import { connect } from 'react-redux';
import infoDiv from './infoDiv.module.scss'

const InfoDiv = (props) => {

    return(
        <>
        
                        <div className="row w-100 mx-auto">
                            <div className="my-3 card w-100 ">
                                <div className="card-header text-center">
                                    <span className="h3 card-title">Informacje</span>
                                </div>
                                <div className="p-4">
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
                                    <div className="row border-bottom pb-2">
                                        <div className="col-md-6 my-auto">
                                            <p className='border-0'><b>Domyślny adres:</b></p>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <div className="border pt-3 p-2 rounded bg-light">
                                                <p className='border-0'><span className="text-success">26-026 Radomice</span></p>
                                                <p className='border-0'><span className="text-success">ul. Żytnia 5</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row col-sm-12 pt-3 w-100">
                                        <p className='border-0 mb-3'><b>Inne Adresy:</b></p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 text-center">
                                            <div className="border pt-3 p-2 rounded bg-light">
                                                <p className='border-0'><span className="text-success">26-026 Radomice</span></p>
                                                <p className='border-0'><span className="text-success">ul. Żytnia 5</span></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <div className="border pt-3 p-2 rounded bg-light">
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