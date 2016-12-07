'use strict';

function Thermostat() {
  this._currentTemperature = 20;
};

Thermostat.prototype.temperature = function() {
  return this._currentTemperature ;
};
