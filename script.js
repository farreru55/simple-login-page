// Index Page
// Selector
const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");
const login = document.querySelector(".login"); // Use querySelector for efficiency
const register = document.querySelector(".register");
const containerLogin = document.getElementsByClassName("container")[0];
const containerRegister = document.getElementsByClassName("container-registrasi")[0];




// Login Button
login.addEventListener("click", function () {
  const enteredName = inputName.value;
  const enteredPassword = inputPassword.value;
  const matchingUser = newAccounts.find(
    (user) => user.name === enteredName && user.password === enteredPassword
  );
  if (matchingUser) {
    // Login successful
    alert("Login successful! Welcome, " + matchingUser.name);
    window.location.href = "home.html";
    // Optionally, redirect to a protected page or provide access to other features
  } else {
    // Login failed
    alert("Invalid username or password. Please try again.");
  }
});

// Register Button
register.addEventListener("click", function() {
  containerLogin.classList.toggle("containerIndexDown");
  containerRegister.classList.toggle("containerRegisterDown");
});


// Register Page
const submit = document.getElementById("submit");
const back = document.getElementById("back");
const regName = document.getElementById("regName");
const regPassword = document.getElementById("regPassword");

// Back button
back.addEventListener("click", function() {
  containerLogin.classList.toggle("containerIndexDown");
  containerRegister.classList.toggle("containerRegisterDown");
});

// Submit button
// Function to Make new Account
function FuncNewAccount(name, password) {
  this.name = name;
  this.password = password;

  // Return an object containing name and password
  return {
    name: this.name,
    password: this.password,
  };
}

// Variable New Account
let newAccounts = []; // Changed to newAccounts

// Register Button
submit.addEventListener("click", function () {
  const newUserName = regName.value;
  const newUserPassword = regPassword.value;

  // Create a new user object and store it in a variable
  const newUser = FuncNewAccount(newUserName, newUserPassword);

  // Add the new user to the newAccounts array
  newAccounts.push(newUser);

  // Clear the input fields
  regName.value = "";
  regPassword.value = "";

  // Display a message indicating successful user creation
  alert("New user created successfully!");
});

