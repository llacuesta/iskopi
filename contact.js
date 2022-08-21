var form = document.getElementById("contact-form");

var username = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var errorName = document.getElementById("nameError");
var errorEmail = document.getElementById("emailError");
var errorMessage = document.getElementById("messageError");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Check if inputs are empty
    if (username.value.trim() === "") {
        errorDom(username, errorName, "Name can't be empty");
    } else {
        clearDom(username, errorName);
    }
    if (email.value.trim() === "") {
        errorDom(email, errorEmail, "Email can't be empty");
    } else if (!(/\S+@\S+\.\S+/.test(email.value))) {
        errorDom(email, errorEmail, "Email is invalid");
    } else {
        clearDom(email, errorEmail);
    }
    if (username.value.trim() === "") {
        errorDom(message, errorMessage, "Message can't be empty");
    } else {
        clearDom(message, errorMessage);
    }
    

    console.log("submit pressed: " + username + email + message);
});

var errorDom = (inputField, error, errorMsg) => {
    error.innerHTML = errorMsg;
    inputField.style.border = "1px solid red";
}

var clearDom = (inputField, error) => {
    error.innerHTML = "";
    inputField.style.border = "1px solid #c5a880";
}