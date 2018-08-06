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

    var strengthOne = document.getElementById("fill-color-one");
    var strengthTwo = document.getElementById("fill-color-two");
    var strengthThree = document.getElementById("fill-color-three");

    /* ELIMINATE CLASSES, REFRESHING VALIDATION COLORS */
    strengthOne.className = "";
    strengthTwo.className = "";
    strengthThree.className = "";

    var passValidationOne = document.getElementById("password-validation-one");
    var passValidationTwo = document.getElementById("password-validation-two");
    var passValidationThree = document.getElementById("password-validation-three");

    /* ELIMINATE CLASSES, REFRESHING VALIDATION COLORS */
    passValidationOne.className = "";
    passValidationTwo.className = "";
    passValidationThree.className = "";

    var elemConfirmPass = document.getElementById("confirm-password");

    if(!isEmptyField(elemConfirmPass.className)){
        onChangePasswordConfirmation(elemConfirmPass);
    }

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

        //IF ONLY TWO REQUIREMENT WERE FILLED, SETS IT AS MEDIUM
        if((!lengthOk && upperLetterOk && numberOk) || (lengthOk && !upperLetterOk && numberOk) || (lengthOk && upperLetterOk && !numberOk)){
            strengthOne.className = "medium";
            strengthTwo.className = "medium";
            return;
        }

        //IF ONLY ONE REQUIREMENT WAS FILLED, SETS IT AS WEAK
        if((!lengthOk && !upperLetterOk && numberOk) || (lengthOk && !upperLetterOk && !numberOk) || (!lengthOk && upperLetterOk && !numberOk)){
            strengthOne.className = "weak";
            return;
        }

    } else {
        //WITH ALL REQUIREMENTS FILLED, SETS IT AS STRONG
        elem.className = 'valid-field';
        strengthOne.className = "strong"; 
        strengthTwo.className = "strong"; 
        strengthThree.className = "strong"; 
        passValidationOne.className = "strong"; 
        passValidationTwo.className = "strong"; 
        passValidationThree.className = "strong";
        return;
    }
}

function onChangePasswordConfirmation(elem){

    checkFormIsValid();

    if(!isPasswordConfirmationValid(elem.value, document.getElementById("password").value)){
        elem.className = 'invalid-field';
    } else {
        elem.className = 'valid-field';
    }
}

function checkFormIsValid(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirm-password").value;

    var btnElem = document.getElementById("confirm-button");

    if(!isFormValid(name, email, pass, confirmPass)){
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

        if(window.innerWidth <= 542){
            window.scrollTo(0, 0);
        }

    }, 2000);

}

setTimeout(function(){ 
    init();
}, 200);