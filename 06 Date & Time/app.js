// console.log('hello date & time');

let currentDateTime = new Date();
console.log(currentDateTime);//is tarika sa hum computer ka current day,date,time,time zone ko pata laga saktaha


// Create a new Date object representing the current date and time
let currentDate = new Date();
console.log("Current Date and Time:", currentDate);

// Create a new Date object with a specific date and time
let specificDate = new Date(2024, 7, 13, 10, 30, 0);
console.log("Specific Date and Time:", specificDate);

// Parse a date string to create a new Date object
let parsedDate = new Date("2024-08-13T10:30:00");
console.log("Parsed Date:", parsedDate);

// Get various components of the current date
let year = currentDate.getFullYear();
console.log("Year:", year);

let month = currentDate.getMonth(); // 0 for January, 1 for February, etc.
console.log("Month (0-11):", month);

let day = currentDate.getDate();
console.log("Day of the Month (1-31):", day);

let weekday = currentDate.getDay(); // 0 for Sunday, 1 for Monday, etc.
console.log("Day of the Week (0-6):", weekday);

let hours = currentDate.getHours();
console.log("Hours (0-23):", hours);

let minutes = currentDate.getMinutes();
console.log("Minutes (0-59):", minutes);

let seconds = currentDate.getSeconds();
console.log("Seconds (0-59):", seconds);

let milliseconds = currentDate.getMilliseconds();
console.log("Milliseconds (0-999):", milliseconds);

// Set different components of the current date
currentDate.setFullYear(2025);
console.log("Updated Year:", currentDate);

currentDate.setMonth(11); // December
console.log("Updated Month:", currentDate);

currentDate.setDate(15);
console.log("Updated Day of the Month:", currentDate);

currentDate.setHours(14);
console.log("Updated Hours:", currentDate);

currentDate.setMinutes(45);
console.log("Updated Minutes:", currentDate);

currentDate.setSeconds(30);
console.log("Updated Seconds:", currentDate);

currentDate.setMilliseconds(500);
console.log("Updated Milliseconds:", currentDate);

// Format the date to different string representations
let dateString = currentDate.toLocaleDateString();
console.log("Locale Date String:", dateString);

let timeString = currentDate.toLocaleTimeString();
console.log("Locale Time String:", timeString);

let isoString = currentDate.toISOString();
console.log("ISO String:", isoString);

let datePortion = currentDate.toDateString();
console.log("Date Portion:", datePortion);

let timePortion = currentDate.toTimeString();
console.log("Time Portion:", timePortion);

// Perform date arithmetic
// Add 5 days to the current date
currentDate.setDate(currentDate.getDate() + 5);
console.log("Date after adding 5 days:", currentDate);

// Subtract 1 month from the current date
currentDate.setMonth(currentDate.getMonth() - 1);
console.log("Date after subtracting 1 month:", currentDate);

// Compare two dates
let date1 = new Date("2024-08-13");
let date2 = new Date("2024-09-13");

if (date1 > date2) {
    console.log("date1 is later than date2");
} else if (date1 < date2) {
    console.log("date1 is earlier than date2");
} else {
    console.log("date1 is the same as date2");
}





// let currentDate = new Date('10/2/2024');
// let currentDate = new Date(' January 10 2010');
// console.log(currentDate);//is tarika sa hum apni date bhi dal ka usa fixed karsakta ha

// let currentDate = new Date().toDateString();
// console.log(currentDate);//is tarika sa hum curret day or date maloom karsakta ha

// let currentDateYear = new Date().getFullYear();
// console.log(currentDateYear);//is tarika sa hum curret Year maloom karsakta ha

// let currentDateMonth = new Date().getMonth();
// console.log(currentDateMonth);//is tarika sa hum curret Month ko digit ma maloom karsakta ha magar ya manth ko 0 sa count karna shuru karta ha jaisa array ma index number start hota ha





// console.log(currentDate.toLocaleTimeString())
// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(currentDate.getDay());
// console.log(dayNames[currentDate.getDay()]);
// console.log(currentDate.getDate());
// console.log(currentDate.getHours());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());
// console.log(currentDate.getTime());

// const birthDate = new Date('November 27, 2003');
// console.log(birthDate.getTime());




// const hyderabadi = new Date('May 26 , 2004').getTime();
// const currentDate = new Date().getTime();
// const remainingMilliseconds = currentDate - hyderabadi;

// console.log(remainingMilliseconds / 1000 / 60 / 60 /24 / 30 / 12);


// let currentDate = new Date("May 26, 2004 07:25:00");
// ;
// // let setYear = currentDate.setMonth(6)
// // console.log(setYear);
// console.log(currentDate);



// const date = document.querySelector('#date');

// function getDateFromInput (){
//     console.log(date.value);
//     const currentDate = new Date(date.value);
//     console.log(currentDate);
// }