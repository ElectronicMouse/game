const form = document.querySelector('#create-account-form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  
  const username = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;
  
  // Perform validation here
  // ...
  
  // Create account
  const data = { username, email, password };
  console.log('Creating account:', data);
  
  // Reset form
  form.reset();
}
