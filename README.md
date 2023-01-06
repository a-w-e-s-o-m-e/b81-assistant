# b81-assistant
A simple assistant to improve the BEAT81 experience.

With b81-assistant you can create a public profile to share workouts with friends and auto-sync your schedule with the Google Calendar (including when you cancel a workout)

### Getting started

The app has two folders:
- The server app is just a NodeJS server that fetches the events and caches them to then serve them to the client.
- The client app is just a ReactJS app that consumes the API from the server APP.

In local:

#### Start the server
- `cd server`
- `cp .env.sample .env`
- `vim .env` (or any other editor you like, but we are tough so we use vim)
- `yarn`
- `yarn start`

#### Start the client
- `cd client`
- `cp .env.sample .env`
- `vim .env`
- `yarn`
- `yarn start`

### Why
I wanted to share my workout extensive schedule with my friends in order to workout together, but it would be too chaotic to share the events one by one or too hard to keep up to date with the schedule changes.
Also it happened a couple of times that I got myself confused with the workout location, ending up at the wrong location. So Google Calendar can definitely be of help here.

### Todo:
- Add Google Calendar support
- Dockerize it
- Add docs on how to deploy

### Disclaimer
This project is just for fun and it is not affiliated with BEAT81
