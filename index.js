  var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value && document.getElementById('password').value != '') {
      document.getElementById('message').style.color = '#59a68f';
      document.getElementById('message').innerHTML = '&#10003 Passwords match.';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = "* Passwords don't match.";
    } 
  }
