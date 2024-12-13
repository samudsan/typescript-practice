enum Direction {
    North, // 0
    East,  // 1
    South, // 2
    West   // 3
  }
  
  console.log(Direction.North); // Output: 0
  console.log(Direction[2]);    // Output: South
  

  enum Status {
    Pending = 1,
    InProgress = 2,
    Completed = 3
  }
  
  console.log(Status.Pending);      // Output: 1
  console.log(Status["Completed"]); // Output: 3
  