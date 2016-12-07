'use strict';

function Thermostat() {
  this._currentTemperature = 20;
};

Thermostat.prototype.temperature = function() {
  return this._currentTemperature ;
};

Thermostat.prototype.up = function(){
  return this._currentTemperature += 1;
};

Thermostat.prototype.down = function(){
  return this._currentTemperature -= 1;
};
