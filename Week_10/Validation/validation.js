var email1 = document.getElementById("mail1");

email1.addEventListener("input", function (event) {
  if (email1.validity.typeMismatch) {
    email1.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email1.setCustomValidity("");
  }
});

// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.

var form  = document.getElementById('mform');
var email2 = document.getElementById('mail2');
var error = document.querySelector('.error');

email2.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // email field is valid.
  if (email2.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    error.innerHTML = ""; // Reset the content of the message
    error.className = "error"; // Reset the visual state of the message
  }
}, false);
form.addEventListener("submit", function (event) {
  // Each time the user tries to send the data, we check
  // if the email field is valid.
  if (!email2.validity.valid) {
    
    // If the field is not valid, we display a custom
    // error message.
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";
    // And we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
}, false);