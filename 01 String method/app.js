console.log("hello string method");

// toLowerCase  
// toUpperCase  
// length  
// charAt  
// indexOf  
// lastindexof  
// slice  
// replace  
// replaceall  
// split


const fruits = ['apple', 'banana', 'orange', 'watermelon', 'guawa'];
console.log(fruits.slice(1, 3))// slice ma agar hum (1,3) dalanga to 0 ko uradaga or indexno 3 ko bhi shamil kr ka agay ki array delete krdaga
// console.log(fruits.indexOf('appleesdadsd'));// indexof ma gagr hum koi bhi chez string ma dalanga agar wo chez array ma exist krti ha to index number batada ga or wo chez array ma nahi ha to -1 agay ga
// console.log(fruits.includes('watermelon'));

const username = 'Muhammad Abdullah';
console.log(username.toUpperCase())
// console.log(username[2]);
// console.log(username.length);// length string ma space ko bhi count krta ha
// console.log(username.slice(3 , 7));

// console.log(username.toLowerCase());
// console.log(username.toUpperCase());


// const city = prompt('which city do you live?');

// if(city.toLowerCase() === 'karachi'){
//     console.log('you live in the safest city');
// }else{
//     console.log('zindagi jhand haa!');
// }



// let message = "Ali and Sami are best and friends. They play cricket Ali and Sami and football Ali and Sami together abdullah abdullah Ali Ali.";

// console.log(message[message.length - 1]);// is tarika sa hum string ka last letter ko maloom karsakta ha


// console.log(message.replace('Ali' , 'ABDULLAH'));//is sa string ma pahli value ko dusri value sa change krdata ha sirf paihly lafz ko
// console.log(message.replaceAll('Ali' , 'ABDULLAH'));// is ma bhi replace ki tarha kam hota ha bs ya sara words ko change krdata ha jo braket ma ho




// const username = 'Muhammad Abdullah';
// const name = 'usman';
// console.log(username[4]);
// console.log(username.charAt(4));
// console.log(username.indexOf('x'));
// console.log(username.indexOf('A'));
// console.log(username.indexOf('a'));
// console.log(username.lastIndexOf('h'));
// console.log(username.split('a'));
// console.log(username.length - 1);
// console.log(username[username.length - 1]);
// console.log('hello'.concat(' world'));



//aik array banani ha cities ki. user input field ka undar koi bhi city ka naam likhaiga. Agar wo city us array ma mujood hogi screeen pa show hona chahyaa 'this city is the safest city' else 'this is not the safest city'

// const cities = ['karachi' , 'hyderabad' , 'larkana' , 'sukkar' , 'jamshoro' , 'shikarpur' , 'lahore' , 'gujrawala' , 'sahiwal' , 'peshawar' , 'quetta'];

// const city = document.querySelector('#city');
// function checkCity(){
//     if(cities.includes(city.value)){
//         console.log('you live in the safest city');
//     }else{
//         console.log('Maalik mushkil ha!');
//     }
// }
