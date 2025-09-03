// Mostrar registro y ocultar login
function showRegister() {
  document.getElementById("register").classList.remove("hidden");
  document.getElementById("login").classList.add("hidden");
}

// Mostrar login y ocultar registro
function showLogin() {
  document.getElementById("login").classList.remove("hidden");
  document.getElementById("register").classList.add("hidden");
}

// Registrar usuario
function registerUser() {
  const username = document.getElementById("regUsername").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  if(username && email && password){
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Registration successful! Now you can log in.");
    showLogin();
  } else {
    alert("Please fill all fields.");
  }
}

// Iniciar sesión
function loginUser() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if(username === savedUsername && password === savedPassword){
    showProfile();
  } else {
    alert("Invalid username or password.");
  }
}

// Mostrar perfil
function showProfile() {
  document.getElementById("showUsername").textContent = localStorage.getItem("username");
  document.getElementById("showEmail").textContent = localStorage.getItem("email");

  document.getElementById("register").classList.add("hidden");
  document.getElementById("login").classList.add("hidden");
  document.getElementById("profile").classList.remove("hidden");
}

// Cerrar sesión
function logout() {
  document.getElementById("profile").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}
