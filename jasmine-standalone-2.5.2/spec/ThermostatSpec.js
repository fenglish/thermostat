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

  it ('should contain minimum temperature value', function(){
    expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10);
  });

  it ('should contain default maximum temperature value', function(){
    expect(thermostat._maximumTemperature).toEqual(25);
  });

  it ('should return true when powerSavingMode is on', function(){
    expect(thermostat._powerSavingMode).toBe(true)
  });

  it('should turn off power saving',function(){
    thermostat.turnOffPowerSaving();
    expect(thermostat._powerSavingMode).toBe(false);
  });

  it ('should reset the temperature to 20', function(){
    expect(thermostat.reset).not.toBeUndefined();
  });

  it('checks for medium level usage', function(){
    expect(thermostat.checkEnergyUsage()).toEqual('medium usage');
  });

  it('checks for high level usage', function(){
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.checkEnergyUsage()).toEqual('high usage');
  });

  it('checks for low level usage', function(){
    for (var i = 0; i < 6; i++) {
      thermostat.down();
    }
    expect(thermostat.checkEnergyUsage()).toEqual('low usage');
  });



});
