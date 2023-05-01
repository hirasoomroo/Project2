const logoutForm = document.getElementById('reload');


loginForm.addEventListener('click', (e) => {
    console.log('clicked')
  e.preventDefault();

  fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Logout failed.');
    }
    return res.json();
  })
  .then(data => {
    console.log(data);
    alert('Logout successful.');
    window.location.href="/login"
  })
  .catch(err => {
    console.error(err);
    alert('Logout failed.');
  });
});
