function validateUserName(userName) {
  if (userName.length < 4) {
    return "Too short";
  } else if (userName.includes(" ")) {
    return "No Space Allowed";
  } else if (
    userName.toLowerCase() === "admin" ||
    userName.toUpperCase() === "A"
  ) {
    return "Reserved Word";
  }
  return "Available";
}

console.log(validateUserName("kaisar"));
console.log(validateUserName("Aisr"));
console.log(validateUserName("admin"));
console.log(validateUserName("ADMIN"));
