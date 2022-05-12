//  web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBUd3D-JWc_oHV3wSsA9TpN3nECMVEAJ8Q",
  authDomain: "hotel-paradise-ea650.firebaseapp.com",
  databaseURL: "https://hotel-paradise-ea650-default-rtdb.firebaseio.com",
  projectId: "hotel-paradise-ea650",
  storageBucket: "hotel-paradise-ea650.appspot.com",
  messagingSenderId: "365706166780",
  appId: "1:365706166780:web:3de24626e06b8607f8b279",
  measurementId: "G-SNNGVJGRLY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
//all our input fields
function register() {

  email = document.getElementById('email').value
  password = document.getElementById('password').value
  

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Invalid')
    return
    // Don't continue running the code
  }

  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser

      // Add this user to Firebase Database
      var database_ref = database.ref()

      // Create User data
      var user_data = {
        email: email,
        type: 'Customer',
        last_login: Date.now()
      }

      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)

      // Done
      alert('User Created')
      window.location.href = "bookings.html";
      

    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_message = error.message

      alert(error_message)
    })
}

// Set up our login function
// Get all our input fields
function login() {
  
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Invalid')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser

      // Add this user to Firebase Database
      var database_ref = database.ref()

      // Create User data
      var user_data = {
        last_login: Date.now()
      }

      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)

      // Done
      alert('User Logged In')
      window.location.href = "bookings.html";
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors

      var error_message = error.message

      alert(error_message)
    })
}

// Validate Functions
function validate_email(email) {
  expression = /@/
  //expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}