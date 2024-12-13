// Fixed Length: Tuples have a fixed number of elements.
// Heterogeneous Types: Each element can have a different data type.
// Static: Once defined, the structure of a tuple cannot be changed.
// Positional Type Safety: TypeScript enforces the type of each element at its specific position.

let person: [string, number];
person = ["Lavanya", 25]; // Correct
console.log(`Person: ${person[0]}, Age: ${person[1]}`);

