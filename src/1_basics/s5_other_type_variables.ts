// The any type allows you to assign any type of value. Use it sparingly to avoid losing type safety.
// Use when the type is not known
let randomValue: any = "Hello";
console.log(randomValue); // Outputs: Hello

randomValue = 42;
console.log(randomValue); // Outputs: 42
//-------------------------------------------------------------

// A safer alternative to any, representing a value whose type is not known.
let var1: unknown = "some value";
console.log(var1);
// Flexibility: Allows you to perform type checks and assertions before using the value.
//-------------------------------------------------------------

// Union Type : A variable that can hold multiple types
let result: string | number;
result = "Success";
console.log(`Result: ${result}`); // Outputs: Success

result = 200;
console.log(`Result: ${result}`); // Outputs: 200
//-------------------------------------------------------------

// Null: Represents the intentional absence of any object value.
// Undefined: Represents a variable that has been declared but not1 yet assigned a