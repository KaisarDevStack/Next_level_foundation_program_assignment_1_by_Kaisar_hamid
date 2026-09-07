const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;
  if (runsNeeded <= 0) {
    return "Won";
  } else if (ballsLeft <= 0) {
    return "Lost";
  }
  const requiredRunRate = (runsNeeded / ballsLeft) * 6;
  if (requiredRunRate <= 6) {
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | "Comfortable"`;
  } else if (requiredRunRate >= 6 && requiredRunRate <= 12) {
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | "Tough"`;
  } else {
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | "Almost Impossible"`;
  }
};
console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));
