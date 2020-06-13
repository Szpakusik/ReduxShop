const ruleEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const rulePhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;

export function validateAddress( postCode, city, address ){
    let errorMessage;
    if (!postCode.match(/\d{2}-\d{3}$/)) {
        errorMessage = "Wprowadzono błędny kod pocztowy!";
        return { message: errorMessage, success: false }
    }
    else if( city.length < 1 ){
        errorMessage = "Podaj nazwę miejscowości!";
        return { message: errorMessage, success: false }
    } 
    else if( address.length < 1 || !/\d/.test(address) ){
        errorMessage = "Podaj adres wraz z numerem budynku!";
        return { message: errorMessage, success: false }
    } 
    else return { success: true }
}

export function validateTemporaryUser( firstName, secondName, phone, email ){
    let errorMessage;
    if( firstName.length < 1 ){
        errorMessage = "Podaj imię!";
        return { message: errorMessage, success: false }
    } 
    else if( secondName.length < 1 ){
        errorMessage = "Podaj nazwisko!";
        return { message: errorMessage, success: false }
    } 
    else if ( !email.match(ruleEmail) || email.length < 1 ) {
        errorMessage= `Podaj adres email w poprawnym formacie!`;
        return { message: errorMessage, success: false }
    } 
    else if( phone.toString().length < 1 || !phone.match(rulePhone) ){
        errorMessage = "Podaj numer w postaci 9 cyfr!";
        return { message: errorMessage, success: false }
    }
    else return { success: true }
}

export function validateRegister(firstName, secondName, phone, email, password, repeatedPassword, postCode, city, address ){

    let errorMessage;
    if( firstName.length < 1 ){
        errorMessage = "Podaj imię!";
        return { message: errorMessage, success: false }
    } 
    else if( secondName.length < 1 ){
        errorMessage = "Podaj nazwisko!";
        return { message: errorMessage, success: false }
    } 
    else if( phone.toString().length < 1 || !phone.match(rulePhone) ){
        errorMessage = "Podaj numer w postaci 9 cyfr!";
        return { message: errorMessage, success: false }
    }
    else if ( !email.match(ruleEmail) || email.length < 1 ) {
        errorMessage= `Podaj adres email w poprawnym formacie!`;
        return { message: errorMessage, success: false }
    } 
    else if( password.length < 8 ){
        errorMessage= `Hasło musi mieć co najmniej 8 znaków!`;
        return { message: errorMessage, success: false }
    }
    else if( repeatedPassword !== password ) {
        errorMessage= `Podane hasła różnią się od siebie!`;
        return { message: errorMessage, success: false }
    }

    let addressValidation = validateAddress( postCode, city, address )
    if( addressValidation.success === false ){
        return { message: addressValidation.message, success: addressValidation.success }
    }
    else return { success: true };
}