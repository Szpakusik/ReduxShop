import React,{ useState } from 'react';

import infoDiv from '../../MyAccount/InfoDiv/infoDiv.module.scss'

const ChooseAddress = (props) => {

    let paddingSide;

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
        },
        {
            postCode: 'Dodaj Adres',
            city: '',
            street: '+',
            active: 0,
        }
    ];

    return(
        <>
        <div className="row w-100 mx-auto">
            <div className="mt-4 text-center w-100">
                <div className="card-header radius-none transparent-darker">
                    <span className="h4 card-title text-white">Adres dostawy</span>
                </div>
                <ul class="list-group list-group-flush  bg-white">
                    <div className={`px-4 py-1 mt-2 bg-white border`}>
                        <div className="row">
                        {adresses.length > 0 && adresses.map( (adress, index)=>{
                            const active = adress.active ? infoDiv.active : '';
                            paddingSide = index % 2 ? "l" : "r";
                            return(
                                <div className={`col-md-6 text-center no-select px-0 p${paddingSide}-2`}>
                                    <div className={`pt-3 p-1 my-2 bg-white ${infoDiv.adress} ${active}`}>
                                        <p className='border-0'><span className="text-dark">{adress.postCode} {adress.city}</span></p>
                                        <p className='border-0'><span className="text-dark">{adress.street}</span></p>
                                    </div>
                                </div>
                            )
                        } ) }

                        { adresses.length == 0 ? 
                            "Nie udało się wczytać twoich zapisanych adresów. Spróbuj ponownie!"
                            : '' }

                            </div>
                    
                    </div>
                </ul>
            </div>

            

        </div>

        </>
    )

}

export default ChooseAddress