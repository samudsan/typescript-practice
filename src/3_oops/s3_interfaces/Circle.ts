// Define an interface
export interface Shape {
  color: string;
  getArea(): number;
}


export class Circle implements Shape {
    color: string;
    radius: number;
  
    constructor(color: string, radius: number) {
      this.color = color;
      this.radius = radius;
    }
  
    public getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  // Creating an object
  const redCircle = new Circle("red", 5);
  console.log(`Circle Area: ${redCircle.getArea()}`); // Output: Circle Area: 78.53981633974483