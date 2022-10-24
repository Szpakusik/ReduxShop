import React, {useState, useEffect} from 'react';
import createAccount from './createAccount.module.scss';
import axios from 'axios';
import { serverUrl } from '../../utils/content/url'
import { validateRegister } from '../../utils/functions/validationFunctions'


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
    const [errorMessage, setErrorMessage] = useState("");
    
    const cleanRegistration = () => {
        document.querySelectorAll('input').forEach( ( input ) => {
            input.value = '';
        })
    }
    const handleClick = ()=> {

        const validationStatus = validateRegister(firstName, secondName, phone, email, password, repeatedPassword, postCode, city, street )
        if( validationStatus.success === false ) {
            setErrorMessage(validationStatus.message)
            return false;
        }

        axios.post( serverUrl + '/account/register', {
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
            cleanRegistration();
            setErrorMessage("Pomyślnie założyłeś konto! Zaloguj się klikając w prawym górnym rogu.")
        })
        .catch(function (error) {
            if(error.response && error.response.status === 409) setErrorMessage("Mamy już użytkownika o takim adresie email!")
            else setErrorMessage("Coś poszło nie tak!")
            console.log(error.response.data.message);
        });
        
      }

    return(
        <>
        
        <div id="register-div"className={`row p-0 p-md-5 pl-0 ${createAccount.createAccount}`}>

            <div className="row w-100 mb-2 mb-md-5 mx-auto">

                <div className="text-center text-md-left h1 my-3 text-dark col-md-12">
                    Zarejestruj się już teraz... <br /> i zgarnij <span className="text-success">2 darmowe dostawy</span>!
                </div>

            </div>

            <div className="row w-100 mx-auto">

                <div className={`col-0 col-md-6 col-lg-5 ${createAccount.introduce} d-none d-sm-block my-sm-5`}>
                    <div className="w-100 h-100 p-4">
                        <span className="h3">Jesteśmy</span>
                        <img src={require('./../../images/z-dowozem-text.png')} alt=""/>
                        <div className='py-4'>
                            <p className="text-light">
                                Chcemy sprawiać, aby życie było prostsze.
                            </p>
                            <p className="text-light">
                                Bieganie po sklepach bywa bardzo czasochłonne,
                                a promocje wypisane wielkimi czerwonymi literami
                                często sprawiają, że zapominamy po co przyszliśmy.
                                W czasach pandemii dochodzą do tego emocje,
                                które można nazwać conajmniej dyskomfortem
                                związanym z przebywaniem w miejscach
                                o dużym zagęszczeniu ludzi.
                            </p>
                            <p className="text-light">
                                Przywieziemy zakupy do Ciebie,
                                a dzięki skupieniu działalności na gminie
                                Morawica, oferujemy zupełnie
                                niespotykany do tej pory czas dostawy
                                wynoszący 2 godziny od momentu złożenia zamówienia.
                            </p>
                            <p className="text-light">
                                Jesteśmy małym "warzywniakiem" w okolicy.
                                Bliżej niż kiedykolwiek, bo dokładnie w twoim domu
                                ( a nawet gdy Cię tam nie ma! )
                            </p>
                        </div>
                        <span className="h3">A Ty?</span>
                    </div>
                </div>

                <div className={`col-12 col-md-6 col-lg-7 pl-5 pt-4 ${createAccount.form} my-auto`}>
                    <div className="text-left">
                        <p className="h1 titan-font d-none d-sm-inline">Przedstaw się!</p>
                        <div className="row pt-3 mt-4 border-top">

                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlFor="name"><b>Imię</b></label><br />
                                <input type="email" id="name" onBlur={()=>{window.scrollTo(0,0)}} onChange={ e => { setFirstName(e.target.value); setErrorMessage('')} }/>
                            </div>
                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlFor="surname"><b>Nazwisko</b></label><br />
                                <input type="text" id="surname" onBlur={()=>{window.scrollTo(0,0)}} onChange={ e => { setSecondName(e.target.value); setErrorMessage('')} }/>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlFor="phone"><b>Numer telefonu</b></label><br />
                                <input type="text" id="phone" onBlur={()=>{window.scrollTo(0,0)}} onChange={ e => { setPhone(e.target.value); setErrorMessage('')} }/>
                            </div>
                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlFor="email"><b>E-mail</b></label><br />
                                <input type="text" id="email" onBlur={()=>{window.scrollTo(0,0)}} onChange={ e => { setEmail(e.target.value); setErrorMessage('')} }/>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlFor="password"><b>Hasło</b></label><br />
                                <input type="password" id="password" onBlur={()=>{window.scrollTo(0,0)}} onChange={ e => { setPassword(e.target.value); setErrorMessage('')} }/>
                            </div>
                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlFor="email"><b>Powtórz hasło</b></label><br />
                                <input type="password" id="repeated-password" onBlur={()=>{window.scrollTo(0,0)}} onChange={ e => { setRepeatedPassword(e.target.value); setErrorMessage('')} }/>
                            </div>

                        </div>

                        <h3 className="mt-4 w-100 text-center titan-font">Adres</h3>

                        <div className="row">

                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlFor="post-code"><b>Kod pocztowy</b></label><br />
                                <input type="text" id="post-code" onBlur={()=>{window.scrollTo(0,0)}} onChange={ e => { setPostCode(e.target.value); setErrorMessage('')} }/>
                            </div>
                            <div className="col-sm-6 w-100 mt-2 mb-0"> 
                                <label htmlFor="city"><b>Miejscowość</b></label><br />
                                <input type="text" id="city" onBlur={()=>{window.scrollTo(0,0)}} onChange={ e => { setCity(e.target.value); setErrorMessage('')} }/>
                            </div>
                            <div className="col-sm-12 w-100 mt-3 mb-0 text-left text-md-center"> 
                                <label htmlFor="street"><b>Ulica i/lub numer domu</b></label><br />
                                <input className='w-100' type="text" id="street" onBlur={()=>{window.scrollTo(0,0)}} onChange={ e => { setStreet(e.target.value); setErrorMessage('')} } />
                            </div>
                            <p className="text-danger w-100 text-center pt-2">{errorMessage}</p>
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