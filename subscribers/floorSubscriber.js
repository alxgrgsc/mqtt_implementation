//mqtt module
const mqtt = require('mqtt');

//connect to the broker
const client = mqtt.connect('mqtt://broker.hivemq.com');

//subscribe to the light and window topics for the floor plus the status topic for the floorPublisher
client.on('connect', function () {
  client.subscribe('lex/floor/light/#', function (err) {
    if (err) console.error(err);
  });
  client.subscribe('lex/floor/window/#', function (err) {
    if (err) console.error(err);
  });
  client.subscribe('lex/floorPublisher/status', function (err) {
    if (err) console.error(err);
  });
});

//display the received messages
client.on('message', function (topic, message) {
  console.log(`Received message on ${topic}:`) 
  console.log(`${message.toString()}`);
  //blank line
  console.log();
});

