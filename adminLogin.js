// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1l0EHzdtIpcoyK2J_MGV6COgXbeAf6jU",
    authDomain: "hotel-management-db.firebaseapp.com",
    projectId: "hotel-management-db",
    storageBucket: "hotel-management-db.appspot.com",
    messagingSenderId: "1086349098631",
    appId: "1:1086349098631:web:b4277f3c5c40c8faa68222"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Initialize variables
    const auth = firebase.auth()
    const database = firebase.database()
    
    // Set up our register function
    function register () {
      // Get all our input fields
      email = document.getElementById('email').value
      password = document.getElementById('password').value
      first_name = document.getElementById('first_name').value
      last_name = document.getElementById('last_name').value
      staff = document.getElementById('staff').value
      manager = document.getElementById('manager').value
      administration = document.getElementById('administration').value
  
      // Validate input fields
      if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Invalid!')
        return
        // Don't continue running the code
      }
      if (validate_field(first_name) == false || validate_field(last_name) || validate_field(staff) == false || validate_field(manager) == false || validate_field(administration) == false) {
        alert('One or More Fields is Invalid!')
        return
      }
     
      // Move on with Auth
      auth.createUserWithEmailAndPassword(email, password)
      .then(function() {
        // Declare user variable
        var user = auth.currentUser
    
        // Add this user to Firebase Database
        var database_ref = database.ref()
    
        // Create User data
        var user_data = {
          email : email,
          first_name : first_name,
          last_name : last_name,
          staff : staff,
          manager : manager,
          administration : administration,
          last_login : Date.now()
        }
    
        // Push to Firebase Database
        database_ref.child('users/' + user.uid).set(user_data)
    
        // Done
        alert('User Created!')
      })
      .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
      })
    }
    
    // Set up our login function
    function login () {
      // Get all our input fields
      email = document.getElementById('email').value
      password = document.getElementById('password').value
    
      // Validate input fields
      if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Invalid!')
        return
        // Don't continue running the code
        
      }
    
      auth.signInWithEmailAndPassword(email, password)
      .then(function() {
        // Declare user variable
        var user = auth.currentUser
    
        // Add this user to Firebase Database
        var database_ref = database.ref()
    
        // Create User data
        var user_data = {
          last_login : Date.now(),
        }
    
        // Push to Firebase Database
        database_ref.child('users/' + user.uid).update(user_data)
    
        // User completed
        alert('User Logged In!')
        window.location.href = "administration.html";
      })
      .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
      })
    }
    
    
    
    
    // Validate Functions
    function validate_email(email) {
      expression = /^[^@]+@\w+(\.\w+)+\w$/
      if (expression.test(email) == true) {
        // Email is good
        return true
      } else {
        // Email is not good
        return false
      }
    }
    
    function validate_password(password) {
      // Firebase only accepts lengths greater than 6
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