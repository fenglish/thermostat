'use strict';

describe ('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ('responds to temperature function', function(){
    expect(thermostat.temperature).not.toBeUndefined();
  });

  it ('responds to up function', function(){
    expect(thermostat.up).not.toBeUndefined();
  });

  it ('responds to up function', function(){
    expect(thermostat.down).not.toBeUndefined();
  });

});
