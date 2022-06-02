import {
  calculateDistance,
  arrowAngleCalculation,
  distanceToOrigin,
} from "./helper.js";

// Main Function

let arrowHeadPoints = (origin, destination) => {
  // Find the distance between origin and destination
  let arrowLine = calculateDistance(
    origin.x,
    destination.x,
    origin.y,
    destination.y
  );

  // Calculate the length of left & right arrowHeadSides/flanks (assuming 30% of total arrow Line distance)
  let arrowSides = arrowLine * 0.3;

  // Calculate the slope of the main line between origin and destination
  let arrowSlopeDegree =
    (Math.atan2(destination.y - origin.y, destination.x - origin.x) * 180) /
    Math.PI;

  // degree between arrow flank and slope
  let degree = 30;

  //  The below function calculates 4 possible theta (accounting the slope)

  let arrowAngleP1 = arrowAngleCalculation(arrowSlopeDegree, degree);
  let arrowAngleP2 = arrowAngleCalculation(arrowSlopeDegree, 180 - degree);
  let arrowAngleP3 = arrowAngleCalculation(arrowSlopeDegree, 180 + degree);
  let arrowAngleP4 = arrowAngleCalculation(arrowSlopeDegree, 360 - degree);

  // Final Coordinates for left and right flanks
  let outputCoordinates = [];

  let flag = 0; // temporary variable declared to be used in a condition to break out from switch cases

  // switch case will evaluate which two points have the shortest distance to the origin, as the arrow coordinates will be closer to the origin.
  switch (true) {
    case true:
      let distanceP1 = distanceToOrigin(
        arrowAngleP1,
        origin,
        destination,
        arrowSides
      );
      console.log(distanceP1);
      if (distanceP1.distance < arrowLine) {
        flag++;
        outputCoordinates.push(distanceP1.x);
        outputCoordinates.push(distanceP1.y);
      }

    case true:
      let distanceP2 = distanceToOrigin(
        arrowAngleP2,
        origin,
        destination,
        arrowSides
      );
      if (distanceP2.distance < arrowLine) {
        flag++;
        outputCoordinates.push(distanceP2.x);
        outputCoordinates.push(distanceP2.y);
      }

    case true:
      if (flag == 2) {
        break;
      }
      let distanceP3 = distanceToOrigin(
        arrowAngleP3,
        origin,
        destination,
        arrowSides
      );
      if (distanceP3.distance < arrowLine) {
        flag++;
        outputCoordinates.push(distanceP3.x);
        outputCoordinates.push(distanceP3.y);
      }

    case true:
      if (flag == 2) {
        break;
      }
      let distanceP4 = distanceToOrigin(
        arrowAngleP4,
        origin,
        destination,
        arrowSides
      );
      if (distanceP4.distance < arrowLine) {
        outputCoordinates.push(distanceP4.x);
        outputCoordinates.push(distanceP4.y);
      }
  }

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
