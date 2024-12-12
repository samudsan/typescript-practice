export abstract class Shape {
    constructor(public color: string) {}
  
    // Abstract method (must be implemented by subclasses)
    abstract calculateArea(): number;
  
    // abstract class can have abstract methods / concrete methods
    public displayColor(): void {
      console.log(`Color: ${this.color}`);
    }
  }