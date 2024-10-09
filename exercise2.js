//pg 59 exercise 1
var foodCost = 79.25;
var tax = 6.54;
var tip = 12.0;

var totalDue = foodCost + tax + tip;
// console.log("The total due is " + totalDue);
// console.log("Food cost is " + foodCost + " and tax is " + tax);
// console.log("Tip is " + tip);
// console.log("Total Due is " + totalDue);
// console.log("Tip is " + tip.toFixed(2));

// exercise 2
var asset = 134645
var liabilities = 32345
var netWorth = asset - liabilities

// console.log("Your total net worth is " + "$" + netWorth)

// exercise 3
convertToCelsius = (number) => {
    return ((number - 32) * 5/9).toFixed(2)
}
convertToFarenheit = (number) => {
    return ((number * 9/5) + 32).toFixed(2)
}

console.log(convertToCelsius(75))
console.log(convertToFarenheit(23.89))