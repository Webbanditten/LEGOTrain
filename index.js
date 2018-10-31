const {SmartMoveRobot, SmartRobot, HubManager} = require('@powered-up/api');
const {BLEManager}= require('@powered-up/ble');
const {autorun} = require('mobx');
const noble = require('noble');


/*autorun(() => {
    noble.on('stateChange', function(state) {
        if (state === 'poweredOn') {
          noble.startScanning();
        } else {
          noble.stopScanning();
        }
      });
      
      noble.on('discover', function(peripheral) {
          console.log('Found device with local name: ' + peripheral.advertisement.localName);
          console.log('advertising the following service uuid\'s: ' + peripheral.advertisement.serviceUuids);
          console.log();
      });
*/

/*
    console.log("Starting");
    const hubManager = HubManager.getSingleton();
    hubManager.addHub("000016231212efde1623785feabcd123");

    console.log(hubManager.hubs);

});*/

/*const moveRobot = new SmartMoveRobot();

autorun(() => {
    const {motorA} = moveRobot;
    
    if (!motorA) {
        return;
    }

    if (!motorA.busy) {
        motorA.runWithPower(100);
    }
});
*/
/*const robot = new SmartRobot();

autorun(() => {
    const {motorA} = robot;
    console.log(motorA)
    if (!motorA) {
        console.log("Nope");
    return;
    }

    if (!motorA.busy) {
        console.log("test");
    motorA.runWithPower(100);
    }
});*/
const moveRobot = new SmartMoveRobot();

autorun(() => {
  const {encodedMotorA} = moveRobot;
   console.log( moveRobot.getDevice());
  if (!encodedMotorA || !rgbLight) {
      console.log("nej")
    return;
  }

  if (buttonPressed) {
    rgbLight.setColor({red: 0, green: 255, blue: 0});

    encodedMotorA.runWithPower(100);
  } else {
    rgbLight.setColor({red: 255, green: 0, blue: 0});

    encodedMotorA.brake();
  }
});