// Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it.
const returnFirstTwoDrivers = function(drivers) {
  // Return a new array containing the first two drivers in the array
  return drivers.slice(0, 2);
};

// Declare a variable with const that is assigned an anonymous function.
const returnLastTwoDrivers = function(drivers) {
  // Return a new array containing the last two drivers in the array
  return drivers.slice(-2);
};

// This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly.
const createFareMultiplier = function(integer) {
  return function(fare) {
      return fare * integer;
  };
};

// Declare a variable with const and assign a function returned by createFareMultiplier() to it.
const fareDoubler = createFareMultiplier(2);

// Declare a variable with const and assign a function returned by createFareMultiplier() to it.
const fareTripler = createFareMultiplier(3);

// This function takes two arguments, an array of the names of Scuber's drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function.
const selectDifferentDrivers = function(drivers, selectFunction) {
  // Based on the selectFunction argument, return either the first two drivers or the last two drivers.
  return selectFunction(drivers);
};

// Example usage based on provided tests:
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Amari', 'Mo']
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // Output: ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); // Output: ['Amari', 'Mo']
console.log(fareDoubler(10)); // Output: 20
console.log(fareTripler(10)); // Output: 30
