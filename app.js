// console.log("hello string method");

// toLowerCase  book ma haga
// toUpperCase  book ma haga
// length  book ma haga
// charAt  book ma haga
// indexOf  book ma haga
// lastindexof  book ma haga
// slice  book ma haga
// replace  book ma haga
// replaceall  book ma haga
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


// console.log("hello number method");

// Number // book ma haga
// parseInt() // book ma haga
// parseFloat() // book ma haga
// toString() // book ma haga
// toFixed() // book ma haga
// isfinite()
// isinteger()




// let a ='66';
// let num = +a // is tarha hum 1 string ko number ma convert carta ha
// num = Number(a) // is tarha bhi hum 1 string ko number ma convert carta ha
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
// let num3 = parseInt(d);//parseInt ka method ma ('99 88') is tarha ki yani jub digits ka bich ma space ho to ya start vali value data ha magar simple number method ma nahi data or jub hum is ka bitch ka space khatam krdanga ('9988') to ya puri value return kraga or basicly ya integer return krta ha yani point sa paihly vali 
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


// let b = 234-true;
// let num1 = b.toString()
// console.log(num1);
// // document.write(num1,'<br>')
// console.log(num1+1);



// console.log("hello Math method");


// ceil()  book ma ha
// floor()  book ma ha
// round()  book ma ha
// random()  book ma ha
// trunc()



// ceil ma value point ma ho to us value ka integer ma'1+' krdaga or point ka bad ki value nahi daga
// floor ma value point ma ho to us value ka integer ma kuch nahi krdaga or point ka bad ki value nahi daga



let e = Math.ceil(2.021837)
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


// console.log('hello time');

//jub hama koi bhi chez specific time ma run karani ho to us ka lia hum use krta ha setInterval 

// isma 2 argument hota ha paihly ma wo value dalta ha jo jo kamkarwana ho or dosra ma time jaisa 1000 mili second dala hua ha mana

// let a = 0;
// let id = setInterval(anim, 1000);
// function anim() {

//     if (a == 10) {
//         clearInterval(id)
//     } else {

//         console.log(a = a + 1);
// console.log(a += + 1);
//     }
// }

//jis tar ha setintervel hota ha is tarha settimeout bhi hota ha magar firq sirf itna ha  ma ka settimeout 1 dafa chalta ha or setinterval jub tk chalta ha jub tk usko  na roko. settimeout ko rokna ka lia cleartimeout use krta ha

// console.log('hello date & time');



let currentDateTime = new Date();
console.log(currentDateTime);//is tarika sa hum computer ka current day,date,time,time zone ko pata laga saktaha

let currentDate = new Date('10/2/2024');
// let currentDate = new Date(' January 10 2010');
console.log(currentDate);//is tarika sa hum apni date bhi dal ka usa fixed karsakta ha

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




// console.log('hello object');

// let array = {
//     username: 'jawad',
//     age: '19',
//     address: 'malir',
//     isLoggedIn: false,
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
//     console.log(key);//is tarha object ki sirf properties ko get krsakta ha
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


// let hasnain = {
//     firstnames: 'jawad',
//     lastnames: 'akhter',
//     age: '10,',
//     email: 'akterjawad566@gmail.com',
//     hobbies: ['car', 'food', 'travel'],//is karha nested object banta ha
// salary:function() {
//     return 20000
// }
// }
// console.log(hasnain.salary());
// console.log(hasnain.hobbies);
// console.log(hasnain.hobbies[2]);

// let jawad = {
//     firstnames: 'jawad',
//     lastnames: 'akhter',
//     fullname :function () {
//         return this.firstnames +''+ this.lastnames;
//     }
// }

// console.log(jawad.fullname());



// const username = document.querySelector('#name');
// const age = document.querySelector('#age');
// const city = document.querySelector('#city');
// const email = document.querySelector('#email')
// function getValue(){
//     const obj = {
//         name: username.value,
//         email: email.value,
//         city: city.value,
//         age: age.value
//     }
//     console.log(obj);
// }



console.log('hello Deep Dom!');

// Dom ma jo (.parentElement) wo parent ko get karta ha or jo (.parentNode) hota ha usma bhi yahi hota ha magar jis chiz pa aap (.parentNode) or us ka koi parent na ho jaisa HTML ka tag ko wo kuch na kuch lazmi return karta ha magar (.parentElement) null return karta ha


// Dom ma jo (.children) wo child ko get karta ha or jo (.childNodes) hota ha usma bhi yahi hota ha magar jis chiz pa aap (.childNodes) or us ka koi child na ho jaisa HTML ka tag ko wo kuch na kuch lazmi return karta ha magar (.parentElement) null return karta ha


console.log('hello Events!');
//onclick
//onchange
//onmouseover
//onmouseout
//onsubmit

// function hello(){
//     console.log('hello world');
// }


// const btn1 = document.querySelector('#btn');

// btn.addEventListener('click' , hello);//jo kam hum HTML ma on click ka throw karaha tha wohi kam hum JavaScript ma addEventListener ka throw karta ha or on click bad practice ha ,addEventListener ma 3 parameter receive hota ha 3 bad ma dakhanga first ma string ma click||submit||change||mouseover||mouseout or second ma function ka sirf nam ya phir pura function banado or third parameter ma sirf boolean hota ha or by default false hota ha


// click mouse ka click pa kam karta ha.
//submit enter ka button pa kam karta ha jaisa hum HTML ma form ka tag ka ander input field banata ha or enter daban apa wo console pa show kara ta ha.
//change input pa laga ta ha jaisa hi hum input ma kuch likhta ha to wo chez hum console ma kuch bhi likh ka check karwa sakta ha first word pa 1 dafa show hoga then kuch bhi likho phir enter dabao to hi show hoga
//mouseover sa jub hum ksi chez par just mouse laker jata ha to usma jo chez bhi karanga wo chez hojaygi
//mouseout mouseover ka parallel ha

// btn1.addEventListener('click' , function(){
//     console.log('hello world!')
// })


// bubbling
// capturing
// bubbling ma ya hota ha ka jub aap ksi div ka ander div bana o or dono ka ander alag alag functuality dalo or jub aap ander wala div pa click karo to uper wala bhi kam kra. ya bubbling kahlati ha

// capturing ma hum isi chiz ko apna hisab sa change kardata ha


// const ul = document.querySelector('#ul');
// const about = document.querySelector('#about');

// ul.addEventListener('click', function () {
//     console.log('ul clicked')
// }, false)

// about.addEventListener('click', function () {
//     console.log('about clicked')
// } , false)

// stopPropagation ka method sa hum ksi bhi chiz ka default behaviour ko change karsakta ha

// about.addEventListener('click', function (event) {
//     event.stopPropagation();
//     console.log('about clicked')
// } , false)

//.target sa wo variable target hota ha
//.tagName sa us chez ka nam ajata ha
//.remove() sa wo chez remove ojati ha jis chez pa laga o


// const ul1 = document.querySelector('.images');
// // const image3 = document.querySelector('#image-3');
// // const link = document.querySelector('#link-1');

// ul1.addEventListener('click', function (event) {
//     console.log('ul1 clicked');
//     console.log(event.target.tagName);
//     if(event.target.tagName === 'A'){
//         event.target.innerHTML = 'abc'
//         console.log(event.target.innerHTML);
//     } 
//     console.log(event.target.parentNode.tagName)
//     if(event.target.parentNode.tagName === 'LI'){
//         event.target.parentNode.remove()
//         console.log('LI');
//     }

// })


//onchange

// const input = document.querySelector('#input');
// input.addEventListener('change' , function(){
//     console.log('onchange event')
// })


//onmouseover
// const input = document.querySelector('#input');
// input.addEventListener('mouseover' , function(){
//     console.log('mouseover')
// })


// //onmouseout
// input.addEventListener('mouseout' , function(){
//     console.log('mouseout')
// })


// const image = document.querySelector('#image');

// image.addEventListener('mouseover' , function(){
//     image.src = 'https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-320-80.jpg'
// })

// image.addEventListener('mouseout' , function(){
//     image.src = 'https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png'
// })



//onsubmit

// const username = document.querySelector('#username')
// const email = document.querySelector('#email')
// const password = document.querySelector('#password')
// const form = document.querySelector('#form')

// form.addEventListener('submit' , function(event){
//     event.preventDefault()
//     console.log(username.value)
//     console.log(email.value)
//     console.log(password.value)
// })

console.log('hellow hoisting');
//Hoisting
// var hoisting support karta ha let || const hoisting support nahi karta

// console.log(usernames);
// var usernames = 'abdullah';
// console.log(username1);
// let username1 = 'abdullah';

// var usernames;

console.log('hello IIFE ||Immediately Invoked Function Expression function');

// (function IIFE(){
//     console.log('hello world');
// })()

console.log('hello arrow function');


//nicha normal function bana hua haa 2
haseeb('world')
function haseeb(name) {
    console.log('hello', name);
}


const world = function (username) {
    console.log('hello world', username)
}
world('abdullah');



//arrow function ma agar aap sirf single parameter recetive karta ha to ()bracket dalna ki zarorat nahi ha. 1 sa zada parameter recetive karta ha ya agar parameter receive nahi karta to bhi () dalna ha agar ham single console chalata ha to {} dalna ki zarorat nahi ha or return ki bhi zarorat nahi ha.agar aap na {} dal dia to return lazmi karna paraga 

//arrow function hoisting support nahi karta but normal function karta ha

// jawad()
// const jawad = () => {
//     console.log('hello arrow')
// }


//this

//arrow function normal function ki tarha this. ko get nahi karta


// const obj = {
//     username: 'abdullah',
//     greetUser: function () {
//         console.log(this.username)
//     },
//     greetUser2: () => {
//         console.log(this.username)
//     }
// }
// obj.greetUser()
// obj.greetUser2()

console.log('hello array loops');
//1 for loop    array or object dono ma use ho sakta ha
//2 for of       array ma use ho sakta ha
//3 for in          object  ma use ho sakta ha


let ArrayMain = ['apple', 'banana', 'graps']
let div = document.querySelector('div')

//1 for loop

for (let i = 0; i < ArrayMain.length; i++) {
    console.log(ArrayMain[i]);
    div.innerHTML += `
${ArrayMain[i]}
`
}
let ObjectMain = {
    username: 'jawad',
    age: 20
}
//2 for of

for (const iterator of ArrayMain) {
    console.log(iterator);
}

//2 for in
//is tarika sa object ki sirf ki aygi
for (const key in ObjectMain) {
    console.log(`${key} ==>${ObjectMain[key]}`);
}

// method ma "." ata ha or function ma "." nahi ata

//some array methods like loop

//1  forEach
//2  map
//3  filter
//4  reduce

//two functions
//1 callback function
//2 heigh order function

//1 callback function wo function hota ha jo ksi function ka ander as an argument bhajta ha.callback function ma 3 parameter receive karta ha paihly ma array ka items dosra ma unka indexNo or 3 ma poori ki poori array

//2 heigh order function wo function hota ha jo ass an argument apna ander call back function lata ha usa heigh order function katha ha
ArrayMain.forEach(function (item, index, ArrayMain) {
    console.log(item, index, ArrayMain);
})

// foreach ka method ma or map ka method ma sirf itna fraq ha K foreach ksi bhi tarha return nahi karta 
function alpha(data) {
    console.log(`hello ${data}`);
}

function get() {
    (alpha('jawad'));
}
get()

ArrayMain.forEach((main) => {
    console.log(main);
    div.innerHTML += `
<h1>${main}</h1>
`
})

ArrayMain.map((items, index) => {
    div.innerHTML += `
    <h1>${items}</h1>`
    console.log(items);
    console.log(index);
})

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const main = num.map(item => item)
console.log(main);


const sumOfNum = num.map(item => item + 10)// ya jo parameter yani item ka bad + 10 likha hua is ki waja sahar number ma 10 + horaha ha  
console.log(sumOfNum);


let maap = num.map(item => item > 5)
console.log('map=>', maap);


let filter = num.filter((item) => {
    return item > 5
})
console.log(`filtered=>`, filter);


let filteredarray = []
for (let i = 0; i < num.length; i++) {
    if (num[i] > 5) {
        filteredarray.push(num[i])
    }
}
console.log(filteredarray);




const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch"
    }
];

// const electronics = products.filter(item=>{return item.category==='Electronics'})
// console.log(electronics);  // is tarika sa hamara pas sirf products ma wo category ayieanga jo Electronics ki  

// filter ka me
const electronics = products.filter(item => {
    return item.category === 'Electronics' && item.price > 100
}).filter((item) => {
    return item.price < 200
})
console.log(electronics);


//nicha wala variable ma return ka key word is lia nahi lagay Q ka hum na apna arrow function ma  Scope yani {} nahi lagay. jub hum {} nahi lagata to return ka key word lagana zarory nahi hota.
let electronicsmain = products.filter(item => 
    item.category === 'Electronics' && item.price > 100
).filter((item) => 
    item.price < 200
)
console.log(electronicsmain);


console.log('Promise');

// jub hum database pa data mangwana ka lia call karta ha to wo data ana ma time lagta ha agar hum usa setTimeout ma 1 second ka bad print karwata ha or agar wo print nahi hua, data ana ma time laga to website cresh hojay gi therefore hum Promise use karta 
//promise ma ya hota ha ka web cresh nahi hoti. promise ma ju data ata ha jubhi print karata ha

//fetch() fetch ka ander hum promises banata ha  
//.then() agar data ajay to then chalaga
//.catch() agar data na ay to catch chalaga
//.finally() agar then or catch dono chaljay to finally chalaga magar isko hum badma dakhanga