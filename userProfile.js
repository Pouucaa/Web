// Your web app's Firebase configuration
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


// Initialize Firebase..mine firebase
firebase.initializeApp(firebaseConfig);


// reference your database
var firebaseRef = firebase.database().ref("startDate");
firebaseRef.on("value", function())
