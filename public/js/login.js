// Handler function for login form submission
const loginFormHandler = async (event) => {
  event.preventDefault();
  // Get the values of the username and password input fields
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  // If the input fields have values
  if (username && password) {
        
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/'); // When successful, load the homepage
    } else {
            
      alert('Failed to log in.'); 
    }
  }
};

const loginForm = document.querySelector('.login-form');
if (loginForm) {
  loginForm.addEventListener('submit', loginFormHandler);
}
