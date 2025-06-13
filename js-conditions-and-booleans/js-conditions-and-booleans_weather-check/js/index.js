// Change this value to test different "weather" conditions.
const weather = "rainy"

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22; 

switch (weather) {
    case "sunny":
        console.log("It's sunny!");
        break;
    case "rainy":
        console.log("It's raining, don't forget your umbrella!");
        break;
    case "snowy":
        console.log("It's snowing, stay warm!");
        break;
    default:
        console.log("II'm not sure what the weather is like.");
}