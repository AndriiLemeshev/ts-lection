// Enums
enum Color {
    Red, // 0 by default
    Green, // 1
    Blue, // 2
}

let myColor: Color = Color.Blue;
console.log(myColor); // Outputs 2

enum Status {
  Open = "OPEN",
  InProgress = "IN_PROGRESS",
  Closed = "CLOSED",
}

let taskStatus: Status = Status.InProgress;
console.log(taskStatus); // Outputs "IN_PROGRESS"
