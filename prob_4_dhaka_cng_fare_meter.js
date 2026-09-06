function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let minimumFare = 50;

  if (distance > 2) {
    let totalDistance = distance - 2;
    fare = minimumFare + totalDistance * 15 + waitingMinutes * 2;
  } else {
    fare = minimumFare;
  }

  if (isNight) {
    fare = fare * 1.2;
  }

  return fare;
}

console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));
