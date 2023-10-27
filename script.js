// Irhan Iftikar, October 2023, Postage Cost Assignment
// script.js code that runs the back-end postage cost calculation in JavaScript

// Main function that runs all the code
function main() {
    // Takes inputs from index.html and saves them to JS variables
    var length = document.getElementById("length").value
    var height = document.getElementById("height").value
    var thickness = document.getElementById("thickness").value
    var startzip = document.getElementById("startzip").value
    var endzip = document.getElementById("endzip").value

    // Code below classifies the package type based on length, height, thickness parameters
    var distance = 2*length + 2*height + 2*thickness
    if (length >= 3.5 && length <= 4.25 && height >= 3.5 && height <= 6 && thickness >= 0.007 && thickness <= 0.016) {
        var package = "Regular Post Card"
      } else if (length >= 4.25 && length <= 6 && height >= 6 && height <= 11.5 && thickness >= 0.007 && thickness <= 0.015) {
        var package =  "Large Post Card"
      } else if (length >= 3.5 && length <= 6.125 && height >= 5 && height <= 11.5 && thickness >= 0.016 && thickness <= 0.25) {
        var package =  "Envelope"
      } else if (length >= 6.125 && length <= 24 && height >= 11 && height <= 18 && thickness >= 0.25 && thickness <= 0.5) {
        var package =  "Large Envelope"
      } else if (length > 0 && height > 0 && thickness > 0 && distance >= 0 && distance <= 84) {
        var package =  "Package"
      } else if (length > 0 && height > 0 && thickness > 0 && distance > 84 && distance <= 130) {
        var package = "Large Package"
      }
        else {
        var package = "Unmailable"
      }

    // Code below classifies the zone number of the starting and ending zipcode
    if (1 <= startzip && startzip <= 6999) {
        var start_zone = 1
    }   else if (7000 <= startzip && startzip <= 19999) {
        var start_zone = 2
    }   else if (20000 <= startzip && startzip <= 35999) {
        var start_zone = 3
    }   else if (36000 <= startzip && startzip <= 62999) {
        var start_zone = 4
    }   else if (63000 <= startzip && startzip <= 84999) {
        var start_zone = 5
    }   else if (85000 <= startzip && startzip <= 99999) {
        var start_zone = 6
    }   else {
        var package = "Unmailable"
    }
    if (1 <= endzip && endzip <= 6999) {
        var end_zone = 1
    }   else if (7000 <= endzip && endzip <= 19999) {
        var end_zone = 2
    }   else if (20000 <= endzip && endzip <= 35999) {
        var end_zone = 3
    }   else if (36000 <= endzip && endzip <= 62999) {
        var end_zone = 4
    }   else if (63000 <= endzip && endzip <= 84999) {
        var end_zone = 5
    }   else if (85000 <= endzip && endzip <= 99999) {
        var end_zone = 6
    }   else {
        var package = "Unmailable"
    }
    // Takes the absolute value of total zones the package travels through
    var total_zones = Math.abs(start_zone - end_zone)

    // Code below calculates total cost of shipping a package using determined variables
    if (package == "Regular Post Card") {
        var cost = .2 + .03*total_zones
    }   else if (package == "Large Post Card") {
        var cost = .37 + .03*total_zones
    }   else if (package == "Envelope") {
        var cost = .37 + .04*total_zones
    }   else if (package == "Large Envelope") {
        var cost = .6 + .05*total_zones
    }   else if (package == "Package") {
        var cost = 2.95 + .25*total_zones
    }   else if (package == "Large Package") {
        var cost = 3.95 + .35*total_zones
    }   else if (package == "Unmailable") {
        var cost = "Unmailable"
    }

    // Code below rounds cost to two decimal points and removes leading '0' if cost is less than 1
    if (typeof cost == "number") {
        cost = cost.toFixed(2)  // Rounds to two decimal points
        if (cost < 1) {
            cost = cost.toString() 
            cost = cost.slice(1)  // Removes leading '0' if cost is less than 1
        }   else {}
    } else {}

    //Prints the cost by connecting to the element in index.html with the id "print"
    document.getElementById("print").innerHTML = cost
}