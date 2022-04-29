//Retrieving HTML elements from Document object Model
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById("email");
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//function to update class and message for errors
function showError(input, message) {
    //get the parent element of the input field (form-control)
    const formcontrol = input.parentElement;
    // replace the class -add error
    formcontrol.className = 'form-control error'
    // Get the small element for the error message
    const small = formcontrol.querySelector('small');
    // replace the text for small element using the input message
    small.innerText = message;
}

//Function to update class for success
function showSuccess(input) {
    //get the parent element of the input field (form-control)
    const formcontrol = input.parentElement;
    // replace the class -add success
    formcontrol.className = 'form-control success'

}

// Function to validate email

function isvalidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()
    );
}
//Event Listeners
// Create Event listener for submit button
form.addEventListener('submit', function (e) {
    // Stop page from relaoding on submit
    e.preventDefault();
    if (username.value === '') {
        showError(username, 'Username is required')
    }
    else {
        showSuccess(username)
    }
    if (email.value === '') {
        showError(email, 'Email is required')
    }
    else if (!isvalidEmail(email.value)){
        showError(email,'Email is invalid')
    }
    else {
        showSuccess(email)
    }
    if (password.value === '') {
        showError(password, 'Password is required')
    }
    else {
        showSuccess(password)
    }
    if (password2.value === '') {
        showError(password2, 'Confirm Password is required')
    }
    else {
        showSuccess(password2)
    }
});