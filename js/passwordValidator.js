//-------------- stores input ------------------
//-------------- checks to see if requirement is met ------------------
//-------------- displays message if requirement is missing ------------------

function validatePassword() {
    const passwordInput = document.getElementById("password").value;
    
    const hasUpperCase = /[A-Z]/.test(passwordInput);
    const hasNumber = /[0-9]/.test(passwordInput);
    const hasCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput);

    if (passwordInput.length != 8) {
        document.getElementById("missing_requirement").innerHTML = (`Your password must be 8 characters long.`)
    } else if (!hasUpperCase) {
        document.getElementById("missing_requirement").innerHTML = (`Your password must contain an upper case letter.`)
    } else if (!hasNumber) {
        document.getElementById("missing_requirement").innerHTML = (`Your password must contain a number.`)
    } else if (!hasCharacter) {
        document.getElementById("missing_requirement").innerHTML = (`Your password must contain a special character.`)
    } else {
        document.getElementById("missing_requirement").innerHTML = (''); 
    };
};
const submit = document.getElementById("submit");
submit.addEventListener("click", validatePassword);


//  this regex checks that password is at least 8 characters long, has a number, upper case letter, and character 
// /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwordInput);