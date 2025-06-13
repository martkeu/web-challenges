console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
    console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
    console.log("Access denied!");
}

// Part 2: Even / Odd
const number = -5;

if (number % 2 === 0) {
    console.log('even number');
} else {
    console.log('odd number');
}

// Part 3: Hotdogs
const numberOfHotdogs = 50;

if (numberOfHotdogs >= 1000000) {
    console.log('Price:  euro per hotdog');
    console.log(`${numberOfHotdogs * 0.10} Euro`);
} else if (numberOfHotdogs >= 100){
    console.log('Price: 1 euro per hotdog');
    console.log(`${numberOfHotdogs} Euro`);
} else if (numberOfHotdogs >= 5){
    console.log('Price: 1.50 euro per hotdog');
    console.log(`${numberOfHotdogs * 1.50} Euro`);
}else {
    console.log('Price: 2 euro per hotdog');
    console.log(`${numberOfHotdogs * 2} Euro`);
}


// Part 4: Daytime
const currentHour = 17;

const statement = (currentHour < 17) ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
// const userName = "Sven";

const greeting = "Hello " + (userName === "Sven" ? "Coach!" : userName) + "!";

console.log(greeting);
