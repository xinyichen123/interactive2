function realtimeClock() {

	var rtClock = new Date();

	var hours = rtClock.getHours();
	var minutes = rtClock.getMinutes();
	var seconds = rtClock.getSeconds();

	var amPm = ( hours < 12) ? "AM" : "PM"
	
	hours = (hours > 12) ? hours - 12 : hours;

	hours = ("0" + hours).slice(-2);
	minutes = ("0" + minutes).slice(-2);
	seconds = ("0" + seconds).slice(-2);

	document.getElementById('clock').innerHTML =
		hours + " : " + minutes + " : " + seconds + " " + amPm;
	var t = setTimeout(realtimeClock, 500);
} 

// function realtimeClock() {
// 	//console log test
// 	var today = new Date();
// 	console.log(today);

// 	// 1.digital clock
// 	setInterval(function realtimeClock(){
// 		var today = new Date();
// 		var hours = today.getHours();
// 		var minutes = today.getMinutes();
// 		var seconds = today.getSeconds();
		
// 		//formatting as HH:MM:SS
// 		if (hours < 10) { hours = "0" + hours; }
// 		if (minutes < 10) { minutes = "0" + minutes; }
// 		if (seconds < 10) { seconds = "0" + seconds; }

// 		var time = hours + ":" + minutes + ":" + seconds;

// 		document.getElementById("clock").innerHTML = time;
// 	}, 1000);
