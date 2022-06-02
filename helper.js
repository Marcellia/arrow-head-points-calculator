// calculateDistance finds the distance between any two points
export let calculateDistance = (xa, xb, ya, yb) => {
  let run = xb - xa;
  let rise = yb - ya;
  let distance = Math.hypot(run, rise);
  return distance;
};

// Calculating 4 possible angles(theta) for the arrow flanks from the slope.
export let arrowAngleCalculation = (arrowSlopeDegree, angle) => {
  return (arrowSlopeDegree + angle) * (Math.PI / 180);
};

// distanceToOrigin calculates distance between origin and possible coordinates
export let distanceToOrigin = (
  angle,
  origin,
  destination,
  arrowSides
) => {
  let x = xCoordinatePossibilities(angle, destination.x, arrowSides);
  let y = yCoordinatePossibilities(angle, destination.y, arrowSides);
  // calculate distance between origin and given coordinates
  let distance = calculateDistance(x, origin.x, origin.y, y);

  return { distance, x, y };
};

// Function to calculate the possibilities of X & Y coodinates based on angle and destination coordinates
let xCoordinatePossibilities = (arrowAngle, destinationX, arrowSides) => {
  let xPossibility = destinationX + arrowSides * Math.cos(arrowAngle);
  let output = Math.round(xPossibility * 100) / 100;
  return output;
};

let yCoordinatePossibilities = (arrowAngle, destinationY, arrowSides) => {
  let yPossibility = destinationY + arrowSides * Math.sin(arrowAngle);
  let output = Math.round(yPossibility * 100) / 100;
  return output;
};
