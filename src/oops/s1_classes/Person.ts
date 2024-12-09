export class Person {
    // Properties
    public name: string;
    public age: number;
  
    // Constructor to initialize properties
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method
    public greet(): string {
      return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  

  