// Helper function to generate a random number within a given range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return !isEven(number);
  }
  
  // Helper function to calculate the factorial of a number
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  // Example usage of helper functions
  console.log(getRandomNumber(1, 10)); // Output a random number between 1 and 10
  console.log(isEven(4)); // Output: true
  console.log(isOdd(5)); // Output: true
  console.log(factorial(5)); // Output: 120 (since 5! = 5 * 4 * 3 * 2 * 1)
  