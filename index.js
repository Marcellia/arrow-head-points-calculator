import {
  calculateDistance,
  arrowAngleCalculation,
  distanceToOrigin,
} from "./helper.js";

// Main Function

let arrowHeadPoints = (origin, destination) => {

  let degree = 30;   // degree between arrow side/flank and slope
  let outputCoordinates = [];


  // arrowLineLength finds the distance between origin and destination
  let arrowLineLength = calculateDistance(
    origin.x,
    destination.x,
    origin.y,
    destination.y
  );

  // arrowSidesLength calculates the length of left & right arrowHeadSides/flanks (assuming 30% of total arrow Line distance)
  let arrowSidesLength = arrowLineLength * 0.3;

  // arrowSlopeDegree calculates the slope of the main line between origin and destination
  let arrowSlopeDegree =
    (Math.atan2(destination.y - origin.y, destination.x - origin.x) * 180) /
    Math.PI;

  let possibleAngles = [degree, 180 - degree, 180 + degree, 360 - degree];

  //  arrrowAngles function calculates 4 possible theta (factoring the slope)

  let arrrowAngles = possibleAngles.map((angle) => {
    return arrowAngleCalculation(arrowSlopeDegree, angle);
  });

  // This below function will evaluate which two points have the shortest distance to the origin, as the correct arrow coordinates will be closer to the origin.

  arrrowAngles.forEach((angle) => {
    let distance = distanceToOrigin(
      angle,
      origin,
      destination,
      arrowSidesLength
    );
    if (distance.distance < arrowLineLength) {
      outputCoordinates.push(distance.x);
      outputCoordinates.push(distance.y);
    }
  });

  let result = [
    [origin, destination],
    [destination, { x: outputCoordinates[0], y: outputCoordinates[1] }],
    [destination, { x: outputCoordinates[2], y: outputCoordinates[3] }],
  ];
  return result;
};

let origin = { x: 12, y: 7 };
let destination = { x: 22, y: 28 };

console.log(arrowHeadPoints(origin, destination));
