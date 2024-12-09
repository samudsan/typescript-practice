import {Shape} from './Shape';

export class Rectangle extends Shape {
    constructor(color: string, private width: number, private height: number) {
      super(color);
    }
  
    public calculateArea(): number {
      return this.width * this.height;
    }
  }