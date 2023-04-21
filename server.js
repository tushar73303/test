$(document).ready(function() {
    // handle form submission
    $('#loginForm').submit(function(event) {
      event.preventDefault(); 
      var username = $('#username').val(); 
      var password = $('#password').val(); 
      if (username.trim() !== '' && password.trim() !== '') {
        
        var passwordHash = sha256(password); 
        window.location.href = 'login-success.html?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(passwordHash);
      }
    });
  });
  
  
  