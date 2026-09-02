function describeValue(value) {
  let type;
  let truthyValue;

  if (typeof value === "string") {
    type = "string";
  } else if (typeof value === "number") {
    type = "number";
  } else if (typeof value === "boolean") {
    type = "boolean";
  } else if (typeof value === "undefined") {
    type = "undefined";
  } else if (typeof value === "function") {
    type = "function";
  } else if (typeof value === "bigint") {
    type = "bigint";
  } else if (typeof value === "symbol") {
    type = "symbol";
  } else {
    type = "object";
  }

  if (value) {
    truthyValue = "truthy";
  } else {
    truthyValue = "falsy";
  }

  return type + " | " + truthyValue;
}

console.log(describeValue());
console.log(describeValue("hello"));
console.log(describeValue(42));
console.log(describeValue(true));
console.log(describeValue(false));
console.log(describeValue(null));
console.log(describeValue(undefined));
console.log(describeValue(NaN));
