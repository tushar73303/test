$(document).ready(function() {
  // handle form submission
  $('#loginForm').submit(function(event) {
    event.preventDefault(); // prevent default form submission
    var username = $('#username').val(); // get username value

    var password = $('#password').val(); // get password value
    if (username.trim() !== '' && password.trim() !== '') {
      
      // redirect to login success page with username and password hash as URL parameters
      var passwordHash = sha256(password); 
      window.location.href = 'login-success.html?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(passwordHash);
    }
  });
});
