# MQTT Publisher and Subscriber

This repository contains code for MQTT publishers and subscribers. The publishers send messages about the status of lights, windows, temperature, and humidity in different rooms and floors. The subscribers listen for these messages and log them to the console.

## Getting Started

To run these scripts, you'll need Node.js and npm installed on your machine.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository
2. Install the dependencies with `npm install`

## Running the scripts

### Publishers

There are two publishers: `floorPublisher.js` and `roomPublisher.js`.

- `floorPublisher.js` sends messages about the status of lights and windows on different floors. The light status is either 'ON' or 'OFF', and the window status is either 'OPEN' or 'CLOSED'. The messages are sent every 0.5 seconds.
- `roomPublisher.js` sends messages about the temperature and humidity in different rooms. The temperature is a random number between 5 and 35, and the humidity is a random number between 0 and 100. The messages are sent every 1 second.

To run the publishers, use the following commands:

```bash
node floorPublisher.js
node roomPublisher.js
```

### Subscribers

There are several subscribers that listen for messages on different topics:

- `floorTemperatureSubscriber.js` listens for messages related to floor/room/temperature.
- `roomSubscriber.js` listens for any messages related to room.
- `floorLightAndWindowSubscriber.js` listens for messages related to the floor for both light and window.

To run the subscribers, use the following commands:

```bash
node floorTemperatureSubscriber.js
node roomSubscriber.js
node floorLightAndWindowSubscriber.js
```

## Handling Disconnected Clients

Each client sets a Last Will and Testament (LWT) message when it connects to the MQTT broker. This message is stored by the broker and sent out to all subscribers of the client's status topic if the client disconnects unexpectedly. This allows other clients to know when a client has disconnected and take appropriate action.
