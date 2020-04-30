import React, {useState} from 'react';
import createAccount from './createAccount.module.scss';
import axios from 'axios';

const CreateAccount = (props) => {

    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");

    const [street, setStreet] = useState("");
    const [postCode, setPostCode] = useState("");
    const [city, setCity] = useState("");
    
    const handleClick = ()=> {

        axios.post('http://localhost:3000/account/register', {
            firstName: firstName,
            secondName: secondName,
            email: email,
            password: password,
            phone: phone,
            repeatedPassword: repeatedPassword,
            street: street,
            postCode: postCode,
            city: city,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        
      }

    return(
        <>
        
        <div className={`row p-0 p-md-5 pl-0 ${createAccount.createAccount}`}>

            <div className="row w-100 mb-2 mb-md-5 mx-auto">

                <div className="text-center text-md-left h1 my-3 text-dark col-md-12">
                    Zarejestruj się już teraz... <br /> i zgarnij <span className="text-success">2 darmowe dostawy</span>!
                </div>

            </div>

            <div className="row w-100 mx-auto">

                <div className={`col-0 col-md-5 ${createAccount.introduce} d-none d-sm-block my-sm-5 `}>
                    <div className="w-100 h-100 p-4">
                        <span className="h3">Jesteśmy</span>
                        <img src={require('./../../images/z-dowozem-text.png')} alt=""/>
                        <div className='py-4'>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam possimus explicabo illum asperiores dolore neque nam sequi inventore ex delectus mollitia ea reiciendis voluptatibus iure, ut debitis quibusdam consectetur quia?</p>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam possimus explicabo illum asperiores dolore neque nam sequi inventore ex delectus mollitia ea reiciendis voluptatibus iure, ut debitis quibusdam consectetur quia?</p>
                        </div>
                        <span className="h3">A Ty?</span>
                    </div>
                </div>

                <div className={`col-12 col-md-7 pl-5 pt-4 ${createAccount.form}`}>
                    <div className="text-left">
                        <p className="h1 titan-font d-none d-sm-inline">Przedstaw się!</p>
                        <div className="row pt-3 mt-4 border-top">

                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Imię</b></label><br />
                                <input type="text" id="email" onChange={ e => setFirstName(e.target.value) }/>
                            </div>
                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Nazwisko</b></label><br />
                                <input type="text" id="email" onChange={ e => setSecondName(e.target.value) }/>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Numer telefonu</b></label><br />
                                <input type="text" id="email" onChange={ e => setPhone(e.target.value) }/>
                            </div>
                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>E-mail</b></label><br />
                                <input type="text" id="email" onChange={ e => setEmail(e.target.value) }/>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Hasło</b></label><br />
                                <input type="text" id="email" onChange={ e => setPassword(e.target.value) }/>
                            </div>
                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Powtórz hasło</b></label><br />
                                <input type="text" id="email" onChange={ e => setRepeatedPassword(e.target.value) }/>
                            </div>

                        </div>

                        <h3 className="mt-4 w-100 text-center titan-font">Adres</h3>

                        <div className="row">

                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Kod pocztowy</b></label><br />
                                <input type="text" id="email" onChange={ e => setPostCode(e.target.value) }/>
                            </div>
                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Miejscowość</b></label><br />
                                <input type="text" id="email" onChange={ e => setCity(e.target.value) }/>
                            </div>
                            <div className="col-sm-12 w-100 mt-3 mb-0 text-left text-md-center"> 
                                <label htmlfor="email"><b>Ulica i/lub numer domu</b></label><br />
                                <input className='w-100' type="text" id="email" onChange={ e => setStreet(e.target.value) }/>
                            </div>
                            {/* <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlfor="email"><b>Miejscowość</b></label><br />
                                <input type="text" id="email"/>
                            </div> */}

                        </div>
 
                    </div>
                </div>

            </div>

            <div className="row w-100 mx-auto">

                <div className="mx-auto mt-5">
                    <button className='w-100 btn btn-outline-success' onClick={ ()=>{ handleClick() } }>Zarejestruj się i odbierz dostawy za darmo</button>
                </div>

            </div>

        </div>

        </>
    )

}

export default CreateAccount