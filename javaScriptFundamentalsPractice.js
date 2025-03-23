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

// Challenge #4: Sum of an Array
// Write a function that takes an array of numbers and returns the sum of all the elements.

// Example:
// sumArray([1, 2, 3, 4, 5]); // Output: 15

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(sumArray([1, 2, 3, 4, 5])); // Expected output: 15
console.log(sumArray([10, 20, 30])); // Expected output: 60

console.log(
  `-----------------------------------Challenge #5---------------------------------------------`
);

// Challenge #5: Find the Longest Word
// Write a function that takes a sentence (string) and returns the longest word in the sentence.
// If there are multiple words with the same length, return the first one that appears.

// Example:
// longestWord("The quick brown fox jumps over the lazy dog"); // Output: "jumps"
// longestWord("JavaScript is awesome"); // Output: "JavaScript"

function longestWord(sentence) {
  return sentence
    .split(" ")
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
}

// Test cases
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // Expected output: "jumps"
console.log(longestWord("JavaScript is awesome")); // Expected output: "JavaScript"

console.log(
  `-----------------------------------Challenge #6---------------------------------------------`
);

// Challenge #6: FizzBuzz
// Write a function that prints numbers from 1 to n. But for multiples of 3, print "Fizz" instead of the number,
// and for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Test case
fizzBuzz(15);

console.log(
  `-----------------------------------Challenge #7---------------------------------------------`
);

// Challenge #7: Count Vowels
// Write a function that takes a string and returns the number of vowels (a, e, i, o, u) in the string.

// Example:
// countVowels("hello world"); // Output: 3
// countVowels("JavaScript is fun"); // Output: 6

function countVowels(str) {
  return str
    .toLowerCase()
    .split("")
    .filter((char) => "aeiou".includes(char)).length;
}

// Test cases
console.log(countVowels("hello world")); // Expected output: 3
console.log(countVowels("JavaScript is fun")); // Expected output: 6

console.log(
  `-----------------------------------Challenge #8---------------------------------------------`
);

// Challenge #8: Palindrome Checker
// Write a function that takes a string and returns `true` if it is a palindrome
// (reads the same forward and backward), and `false` otherwise. Ignore spaces, punctuation, and case.

// Example:
// isPalindrome("racecar"); // Output: true
// isPalindrome("hello"); // Output: false
// isPalindrome("A man a plan a canal Panama"); // Output: true

function isPalindrome(str) {
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

// Test cases
console.log(isPalindrome("racecar")); // Expected output: true
console.log(isPalindrome("hello")); // Expected output: false
console.log(isPalindrome("A man a plan a canal Panama")); // Expected output: true

console.log(
  `-----------------------------------Challenge #9---------------------------------------------`
);

// Challenge #9: Array Chunking
// Write a function that takes an array and a chunk size, and splits the array into subarrays,
// where each subarray is of the given chunk size. The last chunk may contain fewer elements if necessary.

// Example:
// chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
// Output: [[1, 2, 3], [4, 5, 6], [7, 8]]

// chunkArray([10, 20, 30, 40, 50], 2);
// Output: [[10, 20], [30, 40], [50]]

function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Test cases
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // Expected output: [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunkArray([10, 20, 30, 40, 50], 2)); // Expected output: [[10, 20], [30, 40], [50]]
console.log(chunkArray([1, 2, 3, 4, 5], 4)); // Expected output: [[1, 2, 3, 4], [5]]

console.log(
  `-----------------------------------Challenge #10---------------------------------------------`
);

// Challenge #10: Find the Second Largest Number
// Write a function that takes an array of numbers and returns the second largest number.
// If there is no second largest (array has less than 2 unique numbers), return null.

// Example:
// secondLargest([10, 20, 30, 40]); // Output: 30
// secondLargest([5, 5, 5, 5]); // Output: null
// secondLargest([100, 1, 50, 75, 100]); // Output: 75

function secondLargest(arr) {
  let uniqueNums = [...new Set(arr)]; // Remove duplicates
  if (uniqueNums.length < 2) return null; // If not enough unique numbers

  uniqueNums.sort((a, b) => b - a); // Sort in descending order
  return uniqueNums[1]; // Return second largest
}

// Test cases
console.log(secondLargest([10, 20, 30, 40])); // Expected: 30
console.log(secondLargest([5, 5, 5, 5])); // Expected: null
console.log(secondLargest([100, 1, 50, 75, 100])); // Expected: 75
console.log(secondLargest([-1, -5, -3, -10])); // Expected: -3
