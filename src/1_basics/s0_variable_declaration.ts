
function exampleLet() {
    let message = "Hello";
    console.log(message); // Outputs: Hello

    message = "Hi";
    console.log(message); // Outputs: Hi

    if (true) {
        let blockScoped = "I'm inside the block";
        console.log(blockScoped); // Outputs: I'm inside the block
    }
    // console.log(blockScoped); // Error: blockScoped is not defined
}

exampleLet(); // calling the function.
//---------------------------------------------------------------------------------
function exampleConst() {
    const greeting = "Hello";
    console.log(greeting); // Outputs: Hello

    // greeting = "Hi"; // Error: Assignment to constant variable

    if (true) {
        const blockScopedConst = "I'm constant inside the block";
        console.log(blockScopedConst); // Outputs: I'm constant inside the block
    }
    // console.log(blockScopedConst); // Error: blockScopedConst is not defined
}

exampleConst();
//---------------------------------------------------------------------------------
function exampleVar() {
    console.log(message) // calling var variable before declaration.
    var message = "Hello";
    console.log(message); // Outputs: Hello

    message = "Hi";
    console.log(message); // Outputs: Hi

    if (true) {
        var functionScoped = "I'm inside the block";
        console.log(functionScoped); // Outputs: I'm inside the block
    }
    console.log(functionScoped); // Outputs: I'm inside the block (No error!)
}

exampleVar();

// declaring variable using var is discouraged to use in ts due to its function scope instead of block scope 
// and it leads to hoisting problem(accessing variable before its declaration)
