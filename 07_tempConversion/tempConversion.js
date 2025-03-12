const convertToCelsius = function(temp) {
  tempToCelsius = (temp - 32) * 0.5555555556;
  tempToCelsius = tempToCelsius.toFixed(1);
  tempToCelsius = Number(tempToCelsius);
  return tempToCelsius;
};

const convertToFahrenheit = function(temp) {
  tempToFarenheit = temp * 1.8 + 32;
  tempToFarenheit = tempToFarenheit.toFixed(1);
  tempToFarenheit = Number(tempToFarenheit);
  return tempToFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
