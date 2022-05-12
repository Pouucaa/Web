

//var totalReserve = 0; //Your current score
			
		//function addTosubmit(amount) {
            //var totalReserve = 0; //Your current score
		//totalReserve = totalReserve + amount;
			//document.getElementById("submit").innerHTML = totalReserve;
			
		//}


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
//var hotelparadiseDB = firebase.database().ref("ReservationForm");
//document.getElementById("ReservationForm").addEventListener("submit", ReserveForm);
var  points = 0;

function addpoints(){
	points = points + 100;

	document.getElementById("score").innerHTML = "Booking : " + points;

}

function save(){

	 select = document.getElementById ('select').value
     startDate = document.getElementById('startDate').value
     endDate = document.getElementById('endDate').value
	//var points = getElementById("score");




	firebase.database().ref("Reservation Form/").child(sa).update({
		points : points,
		//select: select,
        //startDate: startDate,
        //endDate: endDate,
	});
}
