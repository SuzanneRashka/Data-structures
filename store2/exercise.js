var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable.
var saleDatesBB = store2['sale dates']['Banana Bunches'];

console.log(saleDatesBB);
// What built-in array property would you use to determine how many sale dates there are for store2's 'Banana Bunches'?
console.log(saleDatesBB.length);

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Why or why not?

var priceOfMints = store2['inventory prices']['Mint Wafers'];
console.log(priceOfMints);
priceOfMints = .99;
console.log(store2['inventory prices']['Mint Wafers']);
// No the price doesn't change. Not sure why?

// Set a variable equal to the Peanut Butter Buttered Peanuts sale dates in store2. Use pop to remove one of the sale dates for store2's Caramel Twists.
var saleDatesPBBP = store2['sale dates']['Peanut Butter Buttered Peanuts'];
console.log(saleDatesPBBP);

var saleDatesCT = store2['sale dates']['Caramel Twists'];
console.log(saleDatesCT.pop());

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for Caramel Twists. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
var ctDates = store2['sale dates']['Caramel Twists'];
for (var i = 0; i < ctDates; i++){
  console.log(ctDates);
}
/*
/////////////////////////////////////////////////
newObject literal;
 ////////////////////////////////////////////////
*/

// Iterate over store2's sale dates data to find which day had the most total number of sales. How did you calculate this?
/*
/////////////////////////////////////////////////
Math.max
 ////////////////////////////////////////////////
*/

/////////// CHALLENGE ///////////

// Create an object containing the amounts that store2 made by selling each type of candy.
