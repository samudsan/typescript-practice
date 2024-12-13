// Numeric Enums
enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  
  let move: Direction = Direction.Left;
  console.log(move) // output 2 as by default enums index start with 0,
// we can explicitely mention from where to start our first enum constant.


// -----------------------------------------------------------------------------------
  // String Enums
  enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
console.log(Color.Green)


// -----------------------------------------------------------------------------------
// Heterogeneous Enums:
enum MixedColor {
    Red = 1,
    Green,
    Orange,
    Blue = "BLUE"
}
console.log(MixedColor.Orange)
console.log(MixedColor.Blue)

// all the enum constants after Blue should be initialized.
