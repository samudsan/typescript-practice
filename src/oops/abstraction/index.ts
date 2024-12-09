import {Circle} from './Circle';
import {Rectangle} from './Rectangle';
import {Shape} from './Shape';

// Usage
const shapes: Shape[] = [
    new Circle("Red", 10),
    new Rectangle("Blue", 20, 15),
  ];
  
  shapes.forEach((shape) => {
    shape.displayColor();
    console.log(`Area: ${shape.calculateArea()}`);
  });
  // Output:
  // Color: Red
  // Area: 314.159...
  // Color: Blue
  // Area: 300
  