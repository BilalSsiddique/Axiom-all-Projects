// Modal
//Retrieving HTML elements from Document object Model
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById("email");
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// Modal
const modal = document.getElementById('modal')
// Modal open button
const open = document.getElementById('open')
// Modal close button
const close = document.getElementById('close')



//function to update class and message for errors
function showError(input, message) {
    //get the parent element of the input field (form-controls)
    const formcontrol = input.parentElement;
    // replace the class -add error
    formcontrol.className = 'form-controls error'
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
    formcontrol.className = 'form-controls success'

}

// Function to validate email

function checkEmail(element) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(element.value.trim())) {
        showSuccess(element);
    }
    else {
        showError(element, `Please provide a valid email`)
    }
};

//function to check all required validations
function checkvalidator(array) {
    array.forEach(element => {
        if (element.value === '') {
            showError(element, `${capitalizeid(element)} is required`)

        }
        else {
            checkLength(username, 3, 10);
            checkEmail(email);
            checkLength(password, 6, 30);
            checkPasswordMatch(password, password2)
        }

    });
}

//function to capitalize the id of the id
function capitalizeid(element) {
    return element.id.charAt(0).toUpperCase() + element.id.slice(1);
}
//function to check length of username
function checkLength(element, min, max) {
    if (element.value.length < min) {
        showError(element, `${capitalizeid(element)} needs to be atleast ${min} characters`);

    }
    else if (element.value.length > max) {
        showError(element, `${capitalizeid(element)} needs to be less than ${max} characters`);

    }
    else {
        showSuccess(element);
    }
}

//function to check if password and confirm password are same
function checkPasswordMatch(element, element2) {
    if (element.value !== element2.value) {
        showError(element2, "Passwords don't match")
    }
    else {
        showSuccess(element2)
    }

}

//Event Listeners
// Create Event listener for submit button
form.addEventListener('submit', function (e) {
    // Stop page from relaoding on submit
    e.preventDefault();

    checkvalidator([username, email, password, password2]);


});

// Modal
// function to open modal
open.addEventListener('click', () => modal.classList.add('show-modal'))
// function to close modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')

})

// 4.Listen for click outside of modal
window.addEventListener('click', (e) => {
    e.target == modal ? modal.classList.remove('show-modal') : false
})