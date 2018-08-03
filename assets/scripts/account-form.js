function init(){
    document.getElementById("name").focus();
}

function onChangeName(elem){

    checkFormIsValid();

    if(!isNameValid(elem.value)){
        elem.className = 'invalid-field';
    } else {
        elem.className = 'valid-field';
    }
}

function onChangeEmail(elem){

    checkFormIsValid();

    if(!isEmailValid(elem.value)){
        elem.className = 'invalid-field';
    } else {
        elem.className = 'valid-field';
    }
}

function onChangePassword(elem){

    checkFormIsValid();

    var elemConfirmPass = document.getElementById("confirm-password");
    if(elemConfirmPass.className !== undefined && elemConfirmPass.className !== null && elemConfirmPass.className.length > 0){
        onChangePasswordConfirmation(elemConfirmPass);
    }

    var strengthOne = document.getElementById("fill-color-one");
    var strengthTwo = document.getElementById("fill-color-two");
    var strengthThree = document.getElementById("fill-color-three");

    var passValidationOne = document.getElementById("password-validation-one");
    var passValidationTwo = document.getElementById("password-validation-two");
    var passValidationThree = document.getElementById("password-validation-three");

    strengthOne.className = "";
    strengthTwo.className = "";
    strengthThree.className = "";
    passValidationOne.className = "";
    passValidationTwo.className = "";
    passValidationThree.className = "";

    if(!isPasswordValid(elem.value)){

        elem.className = 'invalid-field';

        if(isEmptyField(elem.value)){
            return;
        }

        var lengthOk = false;
        var upperLetterOk = false;
        var numberOk = false;

        if(elem.value.length < 6){
            passValidationOne.className = "weak";
        } else {
            lengthOk = true;
            passValidationOne.className = "strong";
        }

        if(!containsUpperLetter(elem.value)){
            passValidationTwo.className = "weak";
        } else {
            upperLetterOk = true;
            passValidationTwo.className = "strong";
        }

        if(!containsNumber(elem.value)){
            passValidationThree.className = "weak";
        } else {
            numberOk = true;
            passValidationThree.className = "strong";
        }

        if(lengthOk && upperLetterOk && numberOk){
            strengthOne.className = "strong";
            strengthTwo.className = "strong";
            strengthThree.className = "strong";
        }
 
        else if(!lengthOk && upperLetterOk && numberOk){
            strengthOne.className = "medium";
            strengthTwo.className = "medium";
            strengthThree.className = "";
        } else if(lengthOk && !upperLetterOk && numberOk){
            strengthOne.className = "medium";
            strengthTwo.className = "medium";
            strengthThree.className = "";
        } else if(lengthOk && upperLetterOk && !numberOk){
            strengthOne.className = "medium";
            strengthTwo.className = "medium";
            strengthThree.className = "";
        }

        else if(!lengthOk && !upperLetterOk && numberOk){
            strengthOne.className = "weak";
            strengthTwo.className = "";
            strengthThree.className = "";
        } else if(lengthOk && !upperLetterOk && !numberOk){
            strengthOne.className = "weak";
            strengthTwo.className = "";
            strengthThree.className = "";
        } else if(!lengthOk && upperLetterOk && !numberOk){
            strengthOne.className = "weak";
            strengthTwo.className = "";
            strengthThree.className = "";
        }

    } else {

        /* ELIMINATE CLASSES, REFRESHING VALIDATION COLORS */
        elem.className = 'valid-field';
        strengthOne.className = "strong";
        strengthTwo.className = "strong";
        strengthThree.className = "strong";
        passValidationOne.className = "strong";
        passValidationTwo.className = "strong";
        passValidationThree.className = "strong";
    }
}

function onChangePasswordConfirmation(elem){

    checkFormIsValid();

    if(!isPasswordConfirmationValid(elem.value)){
        elem.className = 'invalid-field';
    } else {
        elem.className = 'valid-field';
    }
}

function checkFormIsValid(){

    var nameValid = isNameValid(document.getElementById("name").value);
    var emailValid = isEmailValid(document.getElementById("email").value);
    var passValid = isPasswordValid(document.getElementById("password").value);
    var confirmPassValid = isPasswordConfirmationValid(document.getElementById("confirm-password").value);
    var btnElem = document.getElementById("confirm-button");

    if(!nameValid || !emailValid || !passValid || !confirmPassValid){
        btnElem.setAttribute("disabled", "disabled");
        return false;
    } else {
        btnElem.removeAttribute("disabled");
        return true;
    }

}

function submitForm(elem){

    if(!checkFormIsValid()){
        return;
    }

    var btnTextElem = document.getElementById("btn-confirmation-lbl");
    var btnLoadElem = document.getElementById("loading-button");

    btnTextElem.className = "hide";
    btnLoadElem.className = "show";
    elem.setAttribute("disabled", "disabled");

    /* Wait for 2000 millis to simulate a request to the server */
    setTimeout(function(){ 

        btnTextElem.className = "show";
        btnLoadElem.className = "hide";
        elem.removeAttribute("disabled");

        document.getElementById("account-form-wrapper").className = "hide";
        document.getElementById("success-form-wrapper").className = "show";

    }, 2000);

}

setTimeout(function(){ 
    init();
});