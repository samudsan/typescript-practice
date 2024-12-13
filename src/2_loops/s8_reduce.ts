//  The reduce method iterates over an array and reduces it to a single value.

function reduceExample() {
    const numbers = [1, 2, 3];
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(`Sum: ${sum}`); // Output: Sum: 6
}

reduceExample();

// Accumulates a result using the callback function.
// Useful for summing, flattening arrays, etc.
