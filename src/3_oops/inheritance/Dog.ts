import {Animal} from './Animal';

export class Dog extends Animal {
    constructor(name: string) {
      super(name); // Calls the parent class constructor
    }
  
    public makeSound(): void {
      console.log("Woof! Woof!"); // Overriding the parent method
    }
  }
  
 