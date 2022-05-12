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
  
  
// Initialize Firebase..mine firebase
firebase.initializeApp(firebaseConfig);


// reference your database
var hotelparadiseDB = firebase.database().ref("ReservationForm");


document.getElementById("ReservationForm").addEventListener("submit", ReserveForm);

// Set up our bookings function
// our input
function ReserveForm(e) {
    e.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lasttName = document.getElementById("lasttName").value;
    var select = document.getElementById ("select").value;
    var startDate = getElementVal("startDate");
    var endDate = getElementVal("endDate");
    

    saveMessages(firstName, lasttName, select, startDate, endDate, points); 

    //alert for reservation
    alert("Reservation completed. 100 Points Earned")
    window.location.href = "rooms.html";

    //   reset the Reservation
    document.getElementById("ReservationForm").reset();

}

const saveMessages = (firstName, lastName, select, startDate, endDate, points) => {
    var newReservationForm = hotelparadiseDB.push();


    newReservationForm.set({
        firstName: firstName,
        lastName: lastName,
        RoomType: select,
        startDate: startDate,
        endDate: endDate,
        points: points
    });
  
};

// Get all our input fields

const getElementVal = (id) => {
    return document.getElementById(id).value;


}