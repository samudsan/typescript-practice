export class Student {
    private name: string; // Private property: Cannot be accessed outside the class
  
    constructor(name: string) {
      this.name = name;
    }
  
    // Getter to access the private property
    public getName(): string {
      return this.name;
    }
  
    // Setter to update the private property
    public setName(newName: string): void {
      this.name = newName;
    }
  }
  
