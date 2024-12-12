
class Calculator {
    // Overload declarations
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
      return a + b; // Implementation
    }
  }
  
  const calc = new Calculator();
  console.log(calc.add(5, 10)); // 15
  // console.log(calc.add(true, false)); // you can never do this, as it does not match with overload declaration above
  console.log(calc.add("Hello, ", "World!")); // "Hello, World!"
  
  