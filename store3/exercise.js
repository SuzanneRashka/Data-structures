// Hint: Don't forget to require in your data! Refer to store1 or store2 exercise.js files on how to do this.
var store3 = require('./store3-data.js');

//()()()()() ACCESSING DATA ()()()()()\\

// Set a variable equal to Berry Bites data for store3 on January 7.
var dataBB = store3[1]['inventory sold']['Berry Bites'];
console.log(dataBB);

// Console log how many Mint Wafers were sold on January 9th?
console.log(store3[3]['inventory sold']['Mint Wafers'].quantity);

// Set a variable equal to how many dates are included in the dataset.
console.log(store3['dates']);// without looping, I'm unsure of how to do this.

//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3. Use this loop to create an array of dates contained in the sale data.


// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price.


// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold on all dates.


//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th.
