// Use break to exit a loop and continue to skip to the next iteration.

function breakAndContinueExample() {
    for (let i = 0; i < 5; i++) {
        if (i === 2) {
            console.log("Skipping 2");
            continue; // Skip this iteration
        }
        if (i === 4) {
            console.log("Breaking at 4");
            break; // Exit the loop
        }
        console.log(`Iteration: ${i}`);
    }
    // Output: Iteration: 0, Iteration: 1, Skipping 2, Iteration: 3, Breaking at 4
}

breakAndContinueExample();
