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

  it('should contain minimum temperature value', function(){
    expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10);
  });

});
