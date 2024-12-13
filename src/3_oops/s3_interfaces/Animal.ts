// Define an interface
interface Animal {
    name: string;
    sound: string;
    makeSound(): void;
  }
  
  // Create an object that implements the interface
  const dog: Animal = {
    name: "Dog",
    sound: "Woof",
    makeSound: function () {
      console.log(`${this.name} says ${this.sound}`);
    },
  };
  
  dog.makeSound(); // Output: Dog says Woof
  