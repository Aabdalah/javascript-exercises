const  convertToFahrenheit= function(temp) {
  return Number.isInteger(temp * 9/5 + 32)? (temp * 9/5 + 32):Math.round((temp * 9/5 + 32)*10)/10;
};

const convertToCelsius = function(temp) {
  return Number.isInteger((temp - 32) * 5/9)?((temp - 32) * 5/9):Math.round(((temp - 32) * 5/9)*10)/10; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
