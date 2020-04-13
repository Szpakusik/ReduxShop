import React from 'react';
import { connect } from 'react-redux';
import myAccount from './myAccount.module.scss';


const MyAccount = (props) => {

    return(
        <>
            <div className={`container ${myAccount.index} mb-5`}>

                <div className={`row w-100`}>

                    <div className="text-center h1 my-2 text-dark col-md-4 mx-auto pb-3">
                        Moje konto
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="row w-100">
                            <div className="my-3 card w-100">
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
                    </div>
                    <div className="col-md-6">

                        <div className="row w-100">
                            <div className="my-3 card text-center w-100">
                                <div className="card-header">
                                    <span className="h3 card-title">Ostatnie zamówienia</span>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row w-100">
                            <div className="my-3 card w-100 h-50 text-center">
                                <div className="card-header">
                                    <span className="h3 card-title">Listy zakupów</span>
                                </div>
                                <p className='border-0'>-</p>
                                <p className='border-0'>-</p>
                                <p className='border-0'>-</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}

const mapStateToProps = (state) => {
    return{

    }
}

export default connect(mapStateToProps)(MyAccount)