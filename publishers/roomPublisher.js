//import modules
const mqtt = require('mqtt');
//will message to be sent when the client disconnects
const options = {
  will: {
    topic: 'roomPublisher/status',
    payload: 'Room Publisher has disconnected',
    qos: 1,
    retain: false
  }
};
//connect to the broker
const client = mqtt.connect('mqtt://broker.hivemq.com', options);

//publish temperature and humidity data to the broker with a delay of 1 second
client.on('connect', function () {
  setInterval(function () {
    //generate random temperature and humidity values
    const temperature = Math.floor(Math.random() * 31) + 5;
    const humidity = Math.floor(Math.random() * 100);
    //log the values to the console
    console.log(`Sending temperature: ${temperature} C`);
    console.log(`Sending humidity: ${humidity}%`);
    //publish the values to the broker
    client.publish('floor/room/temperature/hdsdev', `Temperature: ${temperature} C`);
    client.publish('floor/room/humidity/hdsdev', `Humidity: ${humidity}%`);
  }, 1000);
});