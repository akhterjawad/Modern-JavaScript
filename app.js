// console.log("hello string method");

// toLowerCase
// toUpperCase
// length
// charAt
// indexOf
// slice
// replace
// replaceall
// split


// const fruits = ['apple' , 'banana' , 'orange' , 'watermelon' , 'guawa'];
// console.log(fruits.slice(1 , 3))
// console.log(fruits.indexOf('appleesdadsd'));
// console.log(fruits.includes('watermelon'));

// const username = 'Muhammad Abdullah';
// console.log(username.toLocaleUpperCase())
// console.log(username[2]);
// console.log(username.length);
// console.log(username.slice(3 , 7));

// console.log(username.toLowerCase());
// console.log(username.toUpperCase());


// const city = prompt('which city do you live?');

// if(city.toLowerCase() === 'karachi'){
//     console.log('you live in the safest city');
// }else{
//     console.log('zindagi jhand haa!');
// }



// let message = "Ali and Sami are best and friends. They play cricket Ali and Sami and football Ali and Sami together.";

// console.log(message[message.length - 1]);


// console.log(message.replace('Ali' , 'Abdullah'));
// console.log(message.replaceAll('Ali' , 'Abdullah'));




// const username = 'Muhammad Abdullah';
// const Username = 'usman';
// console.log(username[4]);
// console.log(username.charAt(4));
// console.log(username.indexOf('x'));
// console.log(username.lastIndexOf('h'));
// console.log(username.split('a'));
// console.log(username.length - 1);
// console.log(username[username.length - 1]);



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


// console.log("hello number method");

// let a ='66';
// let num = Number(a)
// console.log(num);
// console.log(num+10);


// let b = true;
// // b= false
// let num1 = Number(b)
// console.log(num1);
// document.write(num1,'<br>')
// console.log(num1+1);


// let c = "99 88";
// let num2 = Number(c);
// console.log(num2);
// document.write(num2,'<br>');


// let d = "99 88";
// let num3 = parseInt(d);
// console.log(num3);
// document.write(num3);


// console.log("hello Math method");


let e = Math.ceil(2.35)
console.log(e);
let f = Math.ceil(2.90)
console.log(f);


let g = Math.floor(2.35)
console.log(g);
let h = Math.floor(2.90)
console.log(h);


let i = Math.round(2.35)
console.log(i);
let j = Math.round(2.90)
console.log(j);
let l = Math.round(2.49)// (.50) ka bad upper digit pa convert hota ha
console.log(l);


let m = Math.trunc(2.90)
console.log(m);


let n = Math.random()*10;
console.log(n);
let o = Math.random()*2;
console.log(o);