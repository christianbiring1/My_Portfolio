// Constraint form validation API

const form = document.querySelector('.form-contact');
const userEmail = document.querySelector('#email');
const message = document.querySelector('small');
let lowerCase ; 
let checkUpperCase;

// Get the value of the inputs

form.addEventListener('submit',(e) => {
  const emailAddress = userEmail.value;
  const errorMessage = [];
  // lowerCase = /[A-Z]/g;
  // checkUpperCase = lowerCase.test(emailAddress);
  // console.log(emailAddress); 
  // if(checkUpperCase){
  //   errorMessage.push('The email must be in lower case');
  //   e.preventDefault(); 
  //   message.classList.add('error');
  //   message.innerHTML = errorMessage.join(',');
  // }

  // console.log(emailAddress !== emailAddress.toLowerCase());
  
  //  console.log(errorMessage);
  if(emailAddress === ''){
    errorMessage.push('The email value must not be empty');
    message.innerHTML = errorMessage.join(', ')
  }
  if(emailAddress !== emailAddress.toLowerCase()){
    errorMessage.push('The email must be in lower case');
    message.innerHTML = errorMessage.join(',');
  }
  if(errorMessage.length > 0){
    e.preventDefault();
    message.classList.add('error');
    message.innerHTML = errorMessage.join(',');
  }
});



