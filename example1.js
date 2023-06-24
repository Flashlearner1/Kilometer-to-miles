const prompt = require("prompt-sync")({sigint: true});

//converting from km to miles
function Distance_converter( km ) {
    return (1.61 * km);
}

//input your distance(km)
let number = prompt("Enter a number(km): ");

let result =  Distance_converter(number);

//The output is displayed in this form
console.log("This distance in miles is " + result);