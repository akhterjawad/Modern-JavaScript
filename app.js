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


const fruits = ['apple', 'banana', 'orange', 'watermelon', 'guawa'];
console.log(fruits.slice(1, 3))// slice ma agar hum (1,3) dalanga to 0 ko uradaga or 3 ko bhi shamil kr ka agay ki array delete krdaga
// console.log(fruits.indexOf('appleesdadsd'));// indexof ma gagr hum koi bhi chez string ma dalanga agar wo chez array ma exist krti ha to index number batada ga or wo chez array ma nahi ha to -1 agay ga
// console.log(fruits.includes('watermelon'));

// const username = 'Muhammad Abdullah';
// console.log(username.toLocaleUpperCase())
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

// console.log(message[message.length - 1]);// is tarika sa hum string ka last letter ko ma loom karsakta ha


// console.log(message.replace('Ali' , 'ABDULLAH'));//is sa string ma pahli value ko dusri value sa change krdata ha sirf paihly lafz ko
// console.log(message.replaceAll('Ali' , 'ABDULLAH'));// is ma bhi replace ki tarha kam hota ha bs ya sara words ko change krdata ha jo braket ma ho 




// const username = 'Muhammad Abdullah';
// const name = 'usman';
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
// let d = "89 years";
// let d = "years 89";
// let d = "89.47";
// let d = "089";// browzer pa bilawaja ka yani jo bilkul start ma laga hua ho wo zero show nahi hota Q ka us zero ki koi value nahi hoti
// let num3 = parseInt(d);
// let num3 = Number(d);//100
// console.log(num3);
// document.write(num3);


// let q = '010.40 year'// browzer pa bilawaja ka yani jo bilkul start ma laga hua ho wo zero show nahi hota Q ka us zero ki koi value nahi hoti
// let q = '10.404 year'
// var num4 = parseFloat(q)
// console.log(num4);


// let r = -1.44
// let s = "6"
// let t = "hell"
// let num4 = isFinite(r)//is ma infinite number & boolien ka batata ha true ya false ma
// document.write(num4)
// console.log(num4);


// let u = 100
// let u = 100.42
// let u = '100'
// let num5 = Number.isInteger(q)//is ma integer ma batata ha yani baghair point (.)ka baghir decimal ka , ka jo aap na value likhi ha wo integer hi hana
// console.log(num5);


// let v = 22.854864920;
// let num6 = v.toFixed(24)
// let num6 = v.toFixed(2)//is ma pori value ati ha bs point (.) ka bad utna hi digit ata ha jitna hum () ma dalta ha 
// console.log(num6);



// console.log("hello Math method");

// let e = Math.ceil(2.35)
// console.log(e);
// let f = Math.ceil(2.90)
// console.log(f);


// let g = Math.floor(2.35)
// console.log(g);
// let h = Math.floor(2.90)
// console.log(h);


// let i = Math.round(2.35)
// console.log(i);
// let j = Math.round(2.90)
// console.log(j);
// let l = Math.round(2.49)// (.50) ka bad upper digit pa convert hota ha
// console.log(l);


// let m = Math.trunc(2.90)
// console.log(m);


// let n = Math.random()*10;
// console.log(n);
// let o = Math.random()*2;
// console.log(o);
// let p = Math.floor(Math.random()*2)
// console.log(p);




// let currentDate = new Date();
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




// console.log('hellow obj');

// let array = {
//     username: 'jawad',
//     age: '19',
//     address: 'malir'
//     // isLoggedIn: false,
// }
// //object ma jo chez left ma likhi hoti ha jaisa username wo hoti ha property or jo right pa likhi hoti ha wo ha value jo string ma likha hui ha 

// console.log(array);//is tarha ham pura object ko console me show karwa sakta ha
// console.log(array.username);//is tarha hum object ka username ko console me show karwa sakta ha
// delete array.age// is tarha hum obj ma sa koi bhi chez delete krsakta ha
// array.email = 'haseeburrehman'// is tarha hum obj ma sa koi bhi chez reasign krsakta ha


// let obj = {
//     firstnames: 'jawad',
//     lastnames: 'jawad',
//     age: '10,',
//     email: 'akterjawad566@gmail.com',
// }
// delete obj.age
// obj.email = 'haseeburrehman'
// console.log(obj);


// let ahmed = {
//     firstnames: 'jawad',
//     lastnames: 'jawad',
//     age: '10,',
//     email: 'akterjawad566@gmail.com'
// }
// for (let key in ahmed) {
//     console.log(key);//is tarha object kisirf properties ko get krsakta ha
// }

// let haseeb = {
//     firstnames: 'jawad',
//     lastnames: 'jawad',
//     age: '10,',
//     email: 'akterjawad566@gmail.com'
// }
// for (let key in haseeb) {
//     console.log(key + ':' + haseeb[key]);//is tarha object ki properties , value ko get krsakta ha
// }


let hasnain = {
    firstnames: 'jawad',
    lastnames: 'jawad',
    age: '10,',
    email: 'akterjawad566@gmail.com',
    hobbies: ['car', 'food', 'travel']//is karha nested object banta ha
}
console.log(hasnain.hobbies);
console.log(hasnain.hobbies[2]);


