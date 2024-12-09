import {Shape} from './Shape';

export class Circle extends Shape {
    constructor(color: string, private radius: number) {
      super(color);
    }
  
    public calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
}