// Index Page
// Selector
const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");
const login = document.querySelector(".login");
const register = document.querySelector(".register");
const containerLogin = document.getElementsByClassName("container")[0];
const containerRegister = document.getElementsByClassName("container-registrasi")[0];

// API URL (Backend Server)
const API_URL = "http://localhost:3000";

// Login Button Logic
login.addEventListener("click", function () {
  const enteredName = inputName.value;
  const enteredPassword = inputPassword.value;

  if (!enteredName || !enteredPassword) {
    alert("Please fill in both name and password");
    return;
  }

  // Kirim request ke Backend
  fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: enteredName, password: enteredPassword }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Login succes! Welcome, " + data.user.name);
        window.location.href = "home.html";
      } else {
        alert(data.message); // Tampilkan pesan error dari server
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to connect to server.");
    });
});

// Switch to Register Page
register.addEventListener("click", function () {
  containerLogin.classList.toggle("containerIndexDown");
  containerRegister.classList.toggle("containerRegisterDown");
});

// Register Page Selectors
const submit = document.getElementById("submit");
const back = document.getElementById("back");
const regName = document.getElementById("regName");
const regPassword = document.getElementById("regPassword");

// Back button
back.addEventListener("click", function () {
  containerLogin.classList.toggle("containerIndexDown");
  containerRegister.classList.toggle("containerRegisterDown");
});

// Register Button (Submit) Logic
submit.addEventListener("click", function () {
  const newUserName = regName.value;
  const newUserPassword = regPassword.value;

  if (!newUserName || !newUserPassword) {
    alert("Please fill in all fields");
    return;
  }

  // Kirim data registrasi ke Backend
  fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: newUserName, password: newUserPassword }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("New user created successfully!");
        // Clear input
        regName.value = "";
        regPassword.value = "";
        // Optional: Kembali ke halaman login
        containerLogin.classList.toggle("containerIndexDown");
        containerRegister.classList.toggle("containerRegisterDown");
      } else {
        alert("Registration failed: " + data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to connect to server.");
    });
});