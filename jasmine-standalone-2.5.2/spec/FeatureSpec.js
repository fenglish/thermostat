'use strict';


describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ('starts at 20 degrees',function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it ('can increase the temperature', function(){
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });

  it ('can decrease the temperature', function(){
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
  });

  it ('cannot go below 10 degrees', function() {
    for (var i = 0; i< 10; i++) {
      thermostat.down();
    }
    expect(function() {thermostat.down(); }).toThrowError('Cannot go below 10 degrees');
  });

  it ('set the maximum temperature 25 degrees when saving mode is on', function(){
    expect(thermostat._powerSavingMode).toBe(true);
    expect(thermostat._maximumTemperature).toEqual(25);
  });

  it ('can reset the temperature to 20', function(){
    thermostat.up();
    thermostat.reset();
    expect(thermostat._currentTemperature).toEqual(20);
  });

  describe ('when power saving is off', function(){
    beforeEach(function(){
      thermostat.turnOffPowerSaving();
    });
    it('maximum temperature is 32 degrees', function(){
      expect(thermostat._powerSavingMode).toBe(false);
      expect(thermostat._maximumTemperature).toEqual(32);
    });
  });

  it ('checks for medium level of usage', function(){
    expect(thermostat.checkEnergyUsage()).toEqual('medium usage');
  });

  it ('checks for high level of usage', function(){
    for (var i = 0; i<6; i++) {
      thermostat.up();
    }
    expect(thermostat.checkEnergyUsage()).toEqual('high usage');
  });

  it ('checks for low level of usage', function(){
    for (var i = 0; i<6; i++) {
      thermostat.down();
    }
    expect(thermostat.checkEnergyUsage()).toEqual('low usage');
  });


});
