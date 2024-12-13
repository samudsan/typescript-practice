//The forEach method is used to iterate over an array.

function forEachExample() {
    const numbers = [10, 20, 30];
    numbers.forEach((number, index) => {
        console.log(`Index ${index}: Number ${number}`);
    });
    // Output: Index 0: Number 10, Index 1: Number 20, Index 2: Number 30
}

forEachExample();
// forEach provides the value and index in each iteration.
// It doesn’t allow breaking out of the loop.