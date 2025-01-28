//Add a callback so the success.html can execute 2 seconds after the Loading... string appears

const input = document.getElementById('username-input');

const password = document.getElementById('password-input');

function redirect() {
  window.location.href = 'success.html';
}

function verifyLogin() {

  const inputValue = input.value;
  const passwordValue = password.value;

if (inputValue === 'test' && passwordValue === 'test123') {
  document.getElementById('loading').innerHTML = 'Loading...';
  setTimeout(redirect, 2000);
  
} else {
  alert('Wrong login details')
}
}



