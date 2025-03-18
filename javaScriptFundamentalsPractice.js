console.log(
  `-----------------------------------Challenge #1---------------------------------------------`
);
// Challenge #1: Word Reverser
// Write a function that takes a string as input and returns the string
// with each word reversed but keeps the word order the same.

// Example:
// reverseWords("hello world"); // Output: "olleh dlrow"
// reverseWords("JavaScript is fun"); // Output: "tpircSavaJ si nuf"

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// Test cases
console.log(reverseWords("hello world")); // Expected output: "olleh dlrow"
console.log(reverseWords("JavaScript is fun")); // Expected output: "tpircSavaJ si nuf"

console.log(
  `-----------------------------------Challenge #2---------------------------------------------`
);

// Challenge No. 2: Capitalize the First Letter of Every Word
// Write a function that takes an array of words and returns a new array
// where the first letter of each word is capitalized.

// Example Input
let words = ["hello", "world", "javascript", "map"];

function capitalizeWords(words) {
  return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
}

// Expected Output: ["Hello", "World", "Javascript", "Map"]
console.log(capitalizeWords(words));

console.log(
  `-----------------------------------Challenge #3---------------------------------------------`
);

// Challenge #3: Remove Duplicates from an Array
// Write a function that takes an array of numbers and returns a new array
// with all duplicate values removed.

// Example:
// removeDuplicates([1, 2, 3, 2, 4, 3, 5]); // Output: [1, 2, 3, 4, 5]
// removeDuplicates([10, 20, 20, 30, 40, 10]); // Output: [10, 20, 30, 40]

let numSetA = [1, 2, 3, 2, 4, 3, 5];
let numSetB = [10, 20, 20, 30, 40, 10];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Test cases
console.log(removeDuplicates(numSetA)); // Expected output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(numSetB)); // Expected output: [10, 20, 30, 40]

console.log(
  `-----------------------------------Challenge #4---------------------------------------------`
);
