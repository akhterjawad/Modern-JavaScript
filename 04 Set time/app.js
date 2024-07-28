
// setTimeout: Schedules a function to be executed after a specified delay.

// clearTimeout: Cancels a timeout previously established by setTimeout.

// setInterval: Schedules a function to be executed repeatedly at specified intervals.

// clearInterval: Cancels an interval previously established by setInterval.



const intervalId = setInterval(() => {
    console.log('This message prints every second');
}, 1000);
clearInterval(intervalId);
const timeoutId = setTimeout(() => {
    console.log('This message prints after 2 seconds');
}, 2000);
clearTimeout(timeoutId);


// Function to start the countdown
function startCountdown(duration) {
    let timer = duration; // duration in seconds
    const intervalIdMain = setInterval(() => {
        console.log(`Time left: ${timer} seconds`);
        timer--;

        if (timer < 0) {
            clearInterval(intervalIdMain); // Stop the interval when the countdown is finished
            console.log('Countdown finished!');
        }
    }, 1000); // 1000 milliseconds = 1 second

    // Optionally, you could use `setTimeout` to cancel the interval after a certain time
    const cancelTimeout = setTimeout(() => {
        clearInterval(intervalIdMain);
        console.log('Countdown canceled!');
    }, 10000); // Cancel the interval after 10 seconds

    // Return the intervalId and cancelTimeout so they can be cleared later if needed
    return { intervalIdMain, cancelTimeout };
}

// Start a countdown for 5 seconds
const { intervalIdMain, cancelTimeout } = startCountdown(5);

// To cancel the countdown manually, you can use `clearInterval` and `clearTimeout`
// clearInterval(intervalId);
// clearTimeout(cancelTimeout);



// setTimeout: Used for one-time delays.

// clearTimeout: Used to cancel a timeout.

// setInterval: Used for repeated execution at regular intervals.

// clearInterval: Used to stop repeated execution.