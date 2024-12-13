// The for...in loop iterates over the keys of an object or array.


function forInLoopExample() {
    const user = { name: "Lavanya", age: 25 };
    for (const key in user) {
        console.log(`${key}: ${user[key as keyof typeof user]}`);
    }
    // Output: name: Lavanya, age: 25
}

forInLoopExample();

// Use for...in to iterate over object properties or indices of an array.
// Access the values using object[key].
