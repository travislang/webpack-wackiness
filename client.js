// WebPack's way of bringing in another module!
import distanceConverter from './modules/distance-converter';

// These lines are just here instead of jQuery, AngularJS, or React
// Plain or Vanilla JavaScript DOM manipulation that you don't need to worry about
const distanceInMilesFromHTML = document.getElementById('miles').innerText;
const distanceInInchesFromHTML = document.getElementById('inches').innerText;

const distanceInKilometers = distanceConverter.milesToKilometers(distanceInMilesFromHTML);
const distanceInCentimeters = distanceConverter.inchesToCentimeters(distanceInInchesFromHTML);

// More Vanilla JavaScript DOM manipulation to update the values
document.getElementById('kilometers').innerHTML = distanceInKilometers;
document.getElementById('centimeters').innerHTML = distanceInCentimeters;
document.getElementById('currentTime').innerHTML = currentTime;