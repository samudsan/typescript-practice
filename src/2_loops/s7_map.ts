// The map method iterates over an array and returns a new array.


function mapExample() {
    const numbers = [1, 2, 3];
    const squares = numbers.map(num => num * num);
    console.log(squares); // Output: [1, 4, 9]
}

mapExample();

// map is used for transformations.
// It doesn’t modify the original array.
