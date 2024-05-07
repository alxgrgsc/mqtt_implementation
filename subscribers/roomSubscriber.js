//mqtt module
const mqtt = require('mqtt');

//connect to the broker
const client = mqtt.connect('mqtt://broker.hivemq.com');

//subscribe to the room topic
client.on('connect', function () {
  client.subscribe('lex/floor/room/#', function (err) {
    if (err) console.error(err);
  });
  //subscribe to the status topic for the roomPublisher
  client.subscribe('lex/roomPublisher/status', function (err) {
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

