
/**
 * 
 * @param {*} xa  x coordinate of any point A (x,y)
 * @param {*} xb  x coordinate of any point B (x,y)
 * @param {*} ya  y coordinate of any point A (x,y)
 * @param {*} yb  y coordinate of any point B (x,y)
 * @returns distance between any two points A & B 
 */
export let calculateDistance = (xa, xb, ya, yb) => {
  let run = xb - xa;
  let rise = yb - ya;
  let distance = Math.hypot(run, rise);
  return distance;
};

 
/** 
 * 
 * @param {*} arrowSlopeDegree is the slope of the line connecting origin and destination point
 * @param {*} angle  4 possible theta (factoring the slope)
 * @returns possible angles(theta) for the arrow flanks from the slope and converts the value from radiance to degree
 */
export let arrowAngleCalculation = (arrowSlopeDegree, angle) => {
  return (arrowSlopeDegree + angle) * (Math.PI / 180);
};


/**
 * 
 * @param {*} angle  4 possible theta (factoring the slope)
 * @param {*} origin origin parameter 
 * @param {*} destination destination parameter
 * @param {*} arrowSidesLength length of arrow side/flank
 * @returns   calculates the possible coordinates and the distance between origin and these possible coordinates
 */
export let distanceToOrigin = (
  angle,
  origin,
  destination,
  arrowSidesLength
) => {
  let x = xCoordinatePossibilities(angle, destination.x, arrowSidesLength);
  let y = yCoordinatePossibilities(angle, destination.y, arrowSidesLength);
  // calculate distance between origin and given coordinates
  let distance = calculateDistance(x, origin.x, origin.y, y);

  return { distance, x, y };
};

/**
 * xCoordinatePossibilities calculate the possibilities of X & Y coodinates based on angle and destination coordinates
 * @param {*} angle 4 possible theta values (factoring the slope)
 * @param {*} destinationX x coordinate of Destination parameter 
 * @param {*} arrowSidesLength length of arrow side/flank
 * @returns possible values of x coordinate
 */

let xCoordinatePossibilities = (angle, destinationX, arrowSidesLength) => {
  let xPossibility = destinationX + arrowSidesLength * Math.cos(angle);
  let output = Math.round(xPossibility * 100) / 100;
  return output;
};

/**
 * 
 * @param {*} angle 4 possible theta values (factoring the slope)
 * @param {*} destinationY y coordinate of Destination parameter
 * @param {*} arrowSidesLength length of arrow side/flank
 * @returns possible values of y coordinate
 */

let yCoordinatePossibilities = (angle, destinationY, arrowSidesLength) => {
  let yPossibility = destinationY + arrowSidesLength * Math.sin(angle);
  let output = Math.round(yPossibility * 100) / 100;
  return output;
};
