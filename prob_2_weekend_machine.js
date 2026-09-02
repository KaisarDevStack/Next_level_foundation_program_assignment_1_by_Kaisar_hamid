function getDayType(day) {
  switch (day) {
    case "Sunday":
      return "Working Day";
    case "Monday":
      return "Working Day";
    case "Tuesday":
      return "Working Day";
    case "Wednesday":
      return "Working Day";
    case "Thursday":
      return "Working Day";
    case "Friday":
      return "Weekend";
    case "Saturday":
      return "Weekend";
    default:
      return "Invalid Day";
  }
}

console.log(getDayType("Monday")); // Output: "Working Day"
console.log(getDayType("Sunday")); // Output: "Working Day"
console.log(getDayType("Friday")); // Output: "Weekend"
console.log(getDayType("January")); // Output: "Invalid Day"
