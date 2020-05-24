function showError(event) {
  if (email.validity.valueMissing) {
    msg.textContent = 'Please enter an email address.'
    email.classList.add('error');
    error.classList.add('show-error-icon');
  } else if (email.validity.typeMismatch){
    msg.textContent = 'Please enter a valid email address.';
    email.classList.add('error');
    error.classList.add('show-error-icon');
  } else {
    msg.textContent = '';
    email.classList.remove('error');
    error.classList.remove('show-error-icon');

  }
  event.preventDefault();
}

const error = document.getElementById('error-icon');
const email = document.getElementById('email');
const form = document.getElementById('form');
const msg = document.getElementById('msg');
form.addEventListener('submit', showError);