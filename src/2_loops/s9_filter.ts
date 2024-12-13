function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6]

// ------------------------------------------------------------------------------
function filterByKeyword(strings: string[], keyword: string): string[] {
    return strings.filter(str => str.includes(keyword));
}

const strings = ["apple", "banana", "grape", "pineapple"];
const keyword = "apple";
const filteredStrings = filterByKeyword(strings, keyword);
console.log(filteredStrings); // Output: ["apple", "pineapple"]

// filter Method:

// It takes a callback function as an argument.
// The callback is invoked for each element in the array.
// If the callback returns true, the element is included in the new array.
// If it returns false, the element is excluded.
