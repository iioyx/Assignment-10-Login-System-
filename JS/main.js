// Elements
var Loginbtn = document.querySelector(".loginbtn");
var SignUpbtn = document.querySelector(".signbtn");
var LoginEmail = document.getElementById("LoginEmail");
var LoginPassword = document.getElementById("LoginPassword");
var SignUpName = document.getElementById("SignUpName");
var SignUpEmail = document.getElementById("SignUpEmail");
var SignUpPassword = document.getElementById("SignUpPassword");
var WelcomeUser = document.getElementsByClassName("WelcomeUser");
var All = document.querySelector(".All");
// Elements

// ============= SignUp ================ //

function getUsers() {
  var users = localStorage.getItem('Users');
  return users ? JSON.parse(users) : [];
}

function setUsers(users) {
  localStorage.setItem('Users', JSON.stringify(users));
}

function SignUpisEmpty() {
  if (
    SignUpName.value === "" ||
    SignUpEmail.value === "" ||
    SignUpPassword.value === ""
  ) {
    All.innerHTML = `<p class="text-danger my-3">All inputs are required!</p>`;
    return true;
  } else {
    return false;
  }
}

function EmailExist(users) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() === SignUpEmail.value.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function createUser() {
  var users = getUsers();
  var NewUser = {
    name: SignUpName.value.trim(),
    email: SignUpEmail.value.trim().toLowerCase(),
    password: SignUpPassword.value.trim(),
  };
  if (EmailExist(users)) {
    document.querySelector(".exists").innerHTML =
      '<p class="text-danger m-3">email already exists</p>';
    document.querySelector(".All").innerHTML = "";
  } else {
    users.push(NewUser);
    setUsers(users);
    document.querySelector(".All").innerHTML =
      '<p class="text-success my-3">Success</p>';
    location.replace("index.html");
  }
}

if (SignUpbtn) {
  SignUpbtn.addEventListener("click", function () {
    if (!SignUpisEmpty()) {
      createUser();
    }
  });
}

// ============= SignUp ================ //


// ============= Login ================ //

function LoginisEmpty() {
  if (LoginEmail.value === "" || LoginPassword.value === "") {
    All.innerHTML = `<p class="text-danger my-3">All inputs are required!</p>`;
    return true;
  } else {
    return false;
  }
}

function LoginSuccess() {
  var users = getUsers();
  var userFound = false;
  var inputEmail = LoginEmail.value.trim().toLowerCase();
  var inputPassword = LoginPassword.value.trim();
  
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === inputEmail && users[i].password === inputPassword) {
      userFound = true;
      localStorage.setItem('LoggedInUser', users[i].name);
      break; 
    }
  }

  if (userFound) {
    location.replace("Welcome.html");
  } else {
    document.querySelector(".incorrect").innerHTML = '<p class="p-2 text-danger">Incorrect email or password</p>';
  }
}

if (Loginbtn) {
  Loginbtn.addEventListener("click", function () {
    if (!LoginisEmpty()) {
      LoginSuccess();
    }
  });
}

// ============= Login ================ //

// ============= Welcome Page ================ //

window.onload = function() {
  var welcomeUserElement = document.querySelector('.WelcomeUser');
  var loggedInUser = localStorage.getItem('LoggedInUser');
  if (welcomeUserElement && loggedInUser) {
    welcomeUserElement.innerHTML = `<p>Welcome, ${loggedInUser}</p>`;
  }
};

// ============= Welcome Page ================ //