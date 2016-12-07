'use strict';

var Thermostat = function() {
  this.MINIMUM_TEMPERATURE = 10;
  this._maximumTemperature = 25;
  this._currentTemperature = 20;
  this._powerSavingMode = true;
};

Thermostat.prototype.temperature = function() {
  return this._currentTemperature ;
};

Thermostat.prototype.up = function(){
  return this._currentTemperature += 1;
};

Thermostat.prototype.down = function(){
  if (this._currentTemperature === this.MINIMUM_TEMPERATURE) {
    throw new Error('Cannot go below 10 degrees');
  }
    return this._currentTemperature -= 1;
};

Thermostat.prototype.turnOffPowerSaving = function () {
  this._powerSavingMode = false;
  this._maximumTemperature = 32;
};

Thermostat.prototype.reset = function () {
  this._currentTemperature = 20;
};
