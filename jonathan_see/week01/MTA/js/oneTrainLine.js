// # MTA Lab

// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

var trainLines = {
  lineN: ["Time Square", "34th", "28th-N", "23rd-N", "Union Square", "8th"],
  lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
  line6: ["Grand Central", "33rd", "28th-6", "23rd-6", "Union Square", "Astor Place"]
}

var planTrip = function (lineStart, startStop, lineEnd, endStop) {
  var startLine = trainLines[lineStart];
  var endLine = trainLines[lineEnd];
  var startIndex = startLine.indexOf(startStop);
  var endIndex = endLine.indexOf(endStop);

  if (startLine === endLine) {

  if (startIndex === endIndex) {
	console.log("Invalid!");
  } else if (startIndex < endIndex) {

		var firstStop = startIndex + 1;
  	var lastStop = endIndex + 1;
		var stopsPassed = startLine.slice(firstStop, lastStop);
		var totalStops = stopsPassed.length;
		console.log("You will pass at the ff stops: " + stopsPassed + " for a total of " + totalStops + " stops.");

  } else if (startIndex > endIndex) {
		var firstStop = startIndex;
		var stopsPassed = endLine.slice(lastStop, firstStop);
		var totalStops = stopsPassed.length;
		console.log("You will pass at the ff stops: " + stopsPassed.reverse() + " for a total of " + totalStops + " stops.");
  }
}
}
planTrip("lineN", "Time Square", "lineN""23rd-N");
planTrip("lineN", "23rd-N", "lineN", "Time Square");
