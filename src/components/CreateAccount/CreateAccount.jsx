import React from 'react';
import createAccount from './createAccount.module.scss';

const CreateAccount = (props) => {

    return(
        <>
        
        <div className={`row p-5 pl-0 ${createAccount.createAccount}`}>

            <div className="row w-100 mb-5">

                <div className="text-left h1 my-3 text-dark col-md-12">
                    Zarejestruj się już teraz... <br /> i zgarnij <span className="text-success">2 darmowe dostawy</span>!
                </div>

            </div>

            <div className="row w-100">

                <div className={`col-md-5 ${createAccount.introduce}`}>
                    <div className="w-100 h-100 p-4">
                        <p className="h3">Jesteśmy</p>
                        <img src={require('./../../images/z-dowozem-text.png')} alt=""/>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam possimus explicabo illum asperiores dolore neque nam sequi inventore ex delectus mollitia ea reiciendis voluptatibus iure, ut debitis quibusdam consectetur quia?</p>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam possimus explicabo illum asperiores dolore neque nam sequi inventore ex delectus mollitia ea reiciendis voluptatibus iure, ut debitis quibusdam consectetur quia?</p>
                        <p className="h3">A Ty?</p>
                    </div>
                </div>

                <div className={`col-md-7 pl-5 pt-4 ${createAccount.form}`}>
                    <div className="text-left">
                        <p className="h1">Przedstaw się!</p>
                        <div className="row pt-3 mt-4 border-top">

                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Imię</b></label><br />
                                <input type="text" id="email"/>
                            </div>
                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Nazwisko</b></label><br />
                                <input type="text" id="email"/>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Numer telefonu</b></label><br />
                                <input type="text" id="email"/>
                            </div>
                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>E-mail</b></label><br />
                                <input type="text" id="email"/>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Hasło</b></label><br />
                                <input type="text" id="email"/>
                            </div>
                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Powtórz hasło</b></label><br />
                                <input type="text" id="email"/>
                            </div>

                        </div>

                        <h3 className="mt-4 w-100 text-center">Adres</h3>

                        <div className="row">

                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Kod pocztowy</b></label><br />
                                <input type="text" id="email"/>
                            </div>
                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Miejscowość</b></label><br />
                                <input type="text" id="email"/>
                            </div>
                            <div className="col-sm-12 w-100 mt-3 mb-0 text-center"> 
                                <label htmlfor="email"><b>Ulica i/lub numer domu</b></label><br />
                                <input className='w-100' type="text" id="email"/>
                            </div>
                            {/* <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Miejscowość</b></label><br />
                                <input type="text" id="email"/>
                            </div> */}

                        </div>
 
                    </div>
                </div>

            </div>

            <div className="row w-100">

                <div className="mx-auto mt-5">
                    <button className='w-100 btn btn-outline-success'>Zarejestruj się i odbierz dostawy za darmo</button>
                </div>

            </div>

        </div>

        </>
    )

}

export default CreateAccount