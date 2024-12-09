import { Person } from '../s1_classes/Person';

// Creating objects
const john = new Person("John", 30);
const jane = new Person("Jane", 25);

// Using methods
console.log(john.greet()); // Output: Hi, my name is John and I am 30 years old.
console.log(jane.greet()); // Output: Hi, my name is Jane and I am 25 years old.

//------------------------------------------------------------------------------
// Object literal (without a class)
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    getDetails: function () {
        return `${this.brand} ${this.model} (${this.year})`;
    },
};

console.log(car.getDetails()); // Output: Toyota Corolla (2020)