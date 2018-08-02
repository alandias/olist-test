function isEmptyField(value){
    return value === undefined || value === null || value.length === 0;
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

function isPasswordConfirmationValid(value){
    if(isEmptyField(value)){
        return false;
    }

    var passwordValue = document.getElementById("password").value;
    if(value !== passwordValue){
        return false;
    }

    return true;
}