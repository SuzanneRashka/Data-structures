// Remember what goes here?
var store4 = require('./store4-data.js');
// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^
// What is the cost of 'Dark Chocolate Crunchies' from store4?
console.log(store4['Dark Chocolate Crunchies'].cost);

// Set the total number of 'Berry Bites' sold by store4 to a variable.
var datesSoldOfBB = store4['Berry Bites']['sold on'];
var totalCountOfBB = datesSoldOfBB.reduce(a, b){
  function add(a + b){
    return a + b;
  }
}
console.log(totalCountOfBB);

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candies that cost more than $2.00
for (var key in store4){
  for (var i = 0; i < store4; i ++){
    //store4[keys].cost > 2.00   /// work on
  }
}

// Create a loop to return an object that has the candy name as the key and the cost as the value


// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? (Each date represents 1 item sold.)


// Determine how much money did store3 make on January 9th.


// Calculate how much store4 made from selling Dark Chocolate Crunchies across all the days.
