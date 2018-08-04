function isEmptyField(value){
    return value === undefined || value === null || value.trim().length === 0;
}

function containsUpperLetter(value){
    var regex = /^(?=.*[A-Z])/;
    return regex.test(value);
}

function containsNumber(value){
    var regex = /^(?=.*\d).+$/;
    return regex.test(value);
}

function isNameValid(value){
    return !isEmptyField(value);
}

function isEmailValid(value){
    if(isEmptyField(value)){
        return false;
    }

    var regex = /\S+@\S+\.\S+/;
    return regex.test(value);
}

function isPasswordValid(value){
    if(isEmptyField(value)){
        return false;
    }

    if(value.length < 6){
        return false;
    }

    if(!containsUpperLetter(value)){
        return false;
    }

    if(!containsNumber(value)){
        return false;
    }

    return true;
}

function isPasswordConfirmationValid(value, passwordValue){
    if(isEmptyField(value)){
        return false;
    }

    if(value !== passwordValue){
        return false;
    }

    return true;
}

function isFormValid(name, email, password, confirmPass){

    var nameValid = isNameValid(name);
    var emailValid = isEmailValid(email);
    var passValid = isPasswordValid(password);
    var confirmPassValid = isPasswordConfirmationValid(confirmPass, password);

    if(!nameValid || !emailValid || !passValid || !confirmPassValid){
        return false;
    } else {
        return true;
    }
}