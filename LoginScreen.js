function displayPassword() {
  var userName = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (userName.length == 0 || password.length == 0) {
    alert("Sorry you have no internet connection.");
  }
  else {
    var message = "Trolololo, du wurdest gehackt\n";
    message += "Dein Username ist: " + userName + "\n";
    message += "Dein Password ist: " + password;
    alert(message);
  }
}
