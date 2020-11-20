// ----- Phone ----- //

const phoneInput = document.getElementById("phone");

function validatePhone(phone) {
    return /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(phone);
 
}

function formatPhone(text) {
    const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;

    return text.replace(regex, "($1) $2-$3");
}

// ----- Store Input (password) ----- //

function validatePassword() {
    const passwordInput = document.getElementById("password").value;
    
// ----- Tests if requirements are met ----- //    

    const hasUpperCase = /[A-Z]/.test(passwordInput);
    const hasNumber = /[0-9]/.test(passwordInput);
    const hasCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput);

// ----- Displays message if requirements are missing or if they are met ----- //    

    if (passwordInput.length != 8) {
        document.getElementById("missing_requirement").innerHTML = (`Your password must be 8 characters long.`)
    } else if (!hasUpperCase) {
        document.getElementById("missing_requirement").innerHTML = (`Your password must contain an upper case letter.`)
    } else if (!hasNumber) {
        document.getElementById("missing_requirement").innerHTML = (`Your password must contain a number.`)
    } else if (!hasCharacter) {
        document.getElementById("missing_requirement").innerHTML = (`Your password must contain a special character.`)
    } else {
        document.getElementById("missing_requirement").innerHTML = `<div id="success">Thanks for signing up!</div>`; 
    };
};
const submit = document.getElementById("submit");
submit.addEventListener("click", validatePassword);

phoneInput.addEventListener("input", validatePhone);

phoneInput.addEventListener("blur", e => {
    e.target.value = formatPhone(e.target.value);
});


//  this regex checks that password is at least 8 characters long, has a number, upper case letter, and character 
// /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwordInput);