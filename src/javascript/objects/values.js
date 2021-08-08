// Simple - array 
const candies = { 1: "lollipop", 2: "Gummy", 3: "Chocolate" }
console.log(Object.values(candies))

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']