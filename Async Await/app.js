console.log('Async/Await');

// Ham koi bhi normal function banata ha uska picha Async likhdata ha to wo Async function bunjata ha phir us function ka ander hum await likhdataha, await jis statement,line ka picha likhta ha to us line ko wait karna parta ha to next line pa move hojata ha jaisa 

async function test() {
  console.log("2: Message");
  console.log("3: Message");
  console.log("4: Message");
}
console.log("1: Message");
test();
console.log("5: Message");




function asyncLog(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve();
    }, delay);
  });
}

async function testMain() {
  console.log("2: value");
  await asyncLog("3: value", 1000); // Waits for 1 second before logging
  console.log("4: value");
}

console.log("1: value");
testMain();
console.log("5: value");



async function test() {
  const response = await
    fetch("student_data.json")
  const students = await response.json();
  return students;
}
test().then((res) => {
  console.log(res);
}).catch((error) => {
  console.log(error);
});



// A function that returns a promise which resolves after 2 seconds
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log('Start');

  // Await the delay function
  await delay(2000);

  console.log('End');
}

asyncFunction();



async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();



function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncChain() {
  console.log('Step 1');
  await delay(1000);

  console.log('Step 2');
  await delay(1000);

  console.log('Step 3');
}

asyncChain();



async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchDataWithErrorHandling();
