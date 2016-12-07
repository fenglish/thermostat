'use strict';

describe ('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ('', function(){
    expect(thermostat.temperature).not.toBeUndefined();
  });
});
