//import mqtt module
const mqtt = require('mqtt');
//will message to be sent when the client disconnects
const options = {
  will: {
    topic: 'floorPublisher/status',
    payload: 'Floor Publisher has disconnected',
    qos: 1,
    retain: false
  }
};
//connect to the broker
const client = mqtt.connect('mqtt://broker.hivemq.com', options);

//publish light and window status data to the broker with a delay of 0.5 seconds
client.on('connect', function () {
  setInterval(function() {
    //generate random light and window status values
    const lightStatus = Math.random() > 0.5 ? 'ON' : 'OFF'; // Random light status
    const windowStatus = Math.random() > 0.5 ? 'OPEN' : 'CLOSE'; // Random window status
    //publish the values to the broker
    client.publish('floor/light/ID', lightStatus);
    client.publish('floor/window/location', windowStatus);
  }, 500);
});