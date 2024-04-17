// client-side validation

// For name validation
function nameValidation() {
    // For name 
    var name_Input = document.getElementById("nameText");
    var name_Error = document.getElementById("nameError");
    var name_Value = name_Input.value;
    var name_Regex = /^[A-Za-z]+$/;

    // Name validation rules
    if (name_Value.trim() === "") {
        name_Error.innerHTML = "* You must enter a name";
        name_Input.classList.add("is-invalid");
        return false;
    } else if (!name_Value.match(name_Regex)) {
        name_Error.innerHTML = "* Your name must contain alphabetic characters only";
        name_Input.classList.add("is-invalid");
        return false;
    } else {
        name_Error.innerHTML = "";
        name_Input.classList.remove("is-invalid");
        name_Input.classList.add("is-valid");
        return true;
    }

}

// For email validation
function emailValidation() {
    // For email 
    var email_Input = document.getElementById("emailText");
    var email_Error = document.getElementById("emailError");
    var email_Value = email_Input.value;
    var email_Regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    // Email validation rules
    if (email_Value.trim() === "") {
        email_Error.innerHTML = "* You must enter an email";
        email_Input.classList.add("is-invalid");
        return false;
    } else if (!email_Value.match(email_Regex)) {
        email_Error.innerHTML = "* Your email in invalid format";
        email_Input.classList.add("is-invalid");
        isValid = false;
    } else {
        email_Error.innerHTML = "";
        email_Input.classList.remove("is-invalid");
        email_Input.classList.add("is-valid");
        return true;
    }
}

// For password validation
function passwordValidation() {
    // For password 
    var password_Input = document.getElementById("passwordText");
    var password_Error = document.getElementById("passwordError");
    var password_Value = password_Input.value;
    var password_Regex = /^.{8,}$/;

    // Password validation rules
    if (password_Value.trim() === "") {
        password_Error.innerHTML = "* You must enter a password";
        password_Input.classList.add("is-invalid");
        return false;
    } else if (!password_Value.match(password_Regex)) {
        password_Error.innerHTML = "* Your password must be at least 8 characters long";
        password_Input.classList.add("is-invalid");
        return false;
    } else {
        password_Error.innerHTML = "";
        password_Input.classList.remove("is-invalid");
        password_Input.classList.add("is-valid");
        return true;
    }
}

// For confirm password validation
function confirmPasswordValidation() {
    // For confirm password 
    var confirmPassword_Input = document.getElementById("confirmPasswordText");
    var confirmPassword_Error = document.getElementById("confirmPasswordError");
    var confirmPassword_Value = confirmPassword_Input.value;
    var password_Value = document.getElementById("passwordText").value;

    // Confirm password validation rules
    if (confirmPassword_Value.trim() === "") {
        confirmPassword_Error.innerHTML = "* You must confirm your password";
        confirmPassword_Input.classList.add("is-invalid");
        return false;
    } else if (!confirmPassword_Value.match(password_Value)) {
        confirmPassword_Error.innerHTML = "* Your Passwords does not match";
        confirmPassword_Input.classList.add("is-invalid");
        return false;
    } else {
        confirmPassword_Error.innerHTML = "";
        confirmPassword_Input.classList.remove("is-invalid");
        confirmPassword_Input.classList.add("is-valid");
        return true;
    }
}

// For all fields validation
function formValidation() {
    var isValid = true;

    // Validate name
    if (!nameValidation()) {
        isValid = false;
    }

    // Validate email
    if (!emailValidation()) {
        isValid = false;
    }

    // Validate password
    if (!passwordValidation()) {
        isValid = false;
    }

    // Validate confirm password
    if (!confirmPasswordValidation()) {
        isValid = false;
    }

    return isValid;
}
