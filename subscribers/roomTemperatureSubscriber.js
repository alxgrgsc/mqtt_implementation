//mqtt module
const mqtt = require('mqtt');

//connect to the broker
const client = mqtt.connect('mqtt://broker.hivemq.com');

//subscribe to a more specific temperature topic
client.on('connect', function () {
  client.subscribe('floor/room/temperature/lex', function (err) {
    if (err) console.error(err);
  });
  client.subscribe('roomPublisher/status', function (err) {
    if (err) console.error(err);
  });
});

client.on('message', function (topic, message) {
  console.log(`Received message on ${topic}:`) 
  console.log(`${message.toString()}`);
  //blank line
  console.log();
});

