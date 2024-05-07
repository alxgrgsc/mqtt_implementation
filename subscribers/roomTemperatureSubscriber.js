//mqtt module
const mqtt = require('mqtt');
//will message to be sent when the client disconnects
const options = {
  will: {
    topic: 'roomTemperatureSubscriber/status',
    payload: 'Room Temperature Subscriber has disconnected',
    qos: 1,
    retain: false
  }
};
//connect to the broker
const client = mqtt.connect('mqtt://broker.hivemq.com', options);

//subscribe to the temperature topic
client.on('connect', function () {
  client.subscribe('floor/room/temperature', function (err) {
    if (err) console.error(err);
  });
});

//log the received message
client.on('message', function (topic, message) {
  console.log(`Received message on ${topic}: ${message.toString()}`);
});