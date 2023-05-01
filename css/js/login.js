

const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

// login form submit
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email-login').value;
  const password = document.querySelector('#password-login').value;

  fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Login failed.');
    }
    return res.json();
  })
  .then(data => {
    console.log(data);
    alert('Login successful.');
    window.location.href="/"
  })
  .catch(err => {
    console.error(err);
    alert('Login failed.');
  });
});

// signup form submit
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name-signup').value;
  const email = document.querySelector('#email-signup').value;
  const password = document.querySelector('#password-signup').value;

  fetch('/api/users/', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Signup failed.');
    }
    return res.json();
  })
  .then(data => {
    console.log(data);
    alert('Signup successful.');
    window.location.href="/"
  })
  .catch(err => {
    console.error(err);
    alert('Signup failed.');
  });
});
