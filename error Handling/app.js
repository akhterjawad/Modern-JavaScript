console.log('Error handling/try catch');

// Callbacks
// Promises
// Async/Await
// setTimeout
// setInterval
// setImmediate (Node.js)
// process.nextTick (Node.js)
// Event Listeners (e.g., click, load, readystatechange)
// Fetch API
// File API

//try catch ka ander hum wo code likhta ha jis code ma hama doute ho  or catch ma hum error show karada ta ha. try ka ander hum asynchronous code nahi likhta jaisa settimeout balka asi situation ma hum asynchronous code ka andr try catch likhta ha


console.log('hasnain');
try {
  console.log(jawad);
} catch (error) {
  console.log(error);
}
console.log('nana');






function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function performDivision() {
  try {
    const result = divide(10, 0);
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

performDivision();


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Failed to fetch data"));
    }, 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getData();


function parseJSON(jsonString) {
  try {
    const parsedData = JSON.parse(jsonString);
    console.log("Parsed Data:", parsedData);
  } catch (error) {
    console.error("Invalid JSON:", error.message);
  }
}

const jsonString = '{"name": "John", "age": 30}';
parseJSON(jsonString);

const invalidJsonString = '{"name": "John", "age": 30';
parseJSON(invalidJsonString);
