import {Animal} from './Animal';
import { Dog } from './Dog';
import { Bird } from './Bird'

const animals: Animal[] = [new Dog("Buddy"), new Bird("Tweety")];
  
animals.forEach((animal) => {
  animal.makeSound();
});
// Output:
// Woof! Woof!
// Chirp! Chirp!