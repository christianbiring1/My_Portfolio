// Constraint form validation API

const form = document.querySelector('.form-contact');
const userName = document.querySelector('#name')
const userEmail = document.querySelector('#email');
const userMessage = document.querySelector('#msg');
const message = document.querySelector('small');

// Get the value of the inputs

form.addEventListener('submit', (e) => {
  const client = userName.value;
  const emailAddress = userEmail.value;
  const interestMessage = userMessage.value;
  const errorMessage = [];

  if (emailAddress === '') {
    errorMessage.push('The email value must not be empty');
    message.innerHTML = errorMessage.join(', ');
  }
  if (emailAddress !== emailAddress.toLowerCase()) {
    errorMessage.push('The email must be in lower case');
    message.innerHTML = errorMessage.join(', ');
  }
  if (errorMessage.length > 0) {
    e.preventDefault();
    message.classList.add('error');
    message.innerHTML = errorMessage.join(', ');
  }
});
/* local storage */
// set Item in the local storage
form.addEventListener('input', () => {
  const data = {
    'name': userName.value,
    'email': userEmail.value,
    'message': userMessage.value,
  }
  const dataStored = JSON.stringify(data);
  localStorage.setItem('data', dataStored);
  location.reload;
});

// Get item from the local storage.
window.addEventListener('load', () => {
  const getData = JSON.parse(localStorage.getItem('data'));
  userName.value = getData.name;
  userEmail.value = getData.email;
  userMessage.value = getData.message;
});