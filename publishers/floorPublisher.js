//import mqtt module
const mqtt = require('mqtt');
//will message to be sent when the client disconnects
const options = {
  will: {
    topic: 'lex/floorPublisher/status',
    payload: 'Floor Publisher has disconnected',
    qos: 1,
    retain: false
  }
};
//connect to the broker
const client = mqtt.connect('mqtt://broker.hivemq.com', options);

//array of locations
const locations = ['hallway', 'cafeteria', 'office', 'meeting room', 'restroom'];
const lightLocations = locations;

//publish light and window status data to the broker with a delay of 0.5 seconds
client.on('connect', function () {
  setInterval(function() {
    //generate random light and window status values
    const lightStatus = Math.random() > 0.5 ? 'ON' : 'OFF';
    const windowStatus = Math.random() > 0.5 ? 'OPEN' : 'CLOSE';
    //select a random location from the array
    const lightLocation = locations[Math.floor(Math.random() * locations.length)];
    const windowLocation = locations[Math.floor(Math.random() * locations.length)];
    //publish the values to the broker
    client.publish(`lex/floor/light/${lightLocation}`, lightStatus);
    client.publish(`lex/floor/window/${windowLocation}`, windowStatus);

    //log the values to the console
    console.log(`Sending light status: ${lightStatus} in ${lightLocation}`);
    console.log(`Sending window status: ${windowStatus} in ${windowLocation}`);
  }, 500);
});